export interface RepoLanguage {
    name: string;
    percent: number;
    color: string;
}

export interface RepoStats {
    stars: number;
    updatedAt: string;
    languages: RepoLanguage[];
}

interface GithubRepoResponse {
    stargazers_count: number;
    pushed_at: string;
}

interface GitlabProjectResponse {
    star_count: number;
    last_activity_at: string;
}

function toLanguageList(entries: [string, number][]): RepoLanguage[] {
    const total = entries.reduce((sum, [, value]) => sum + value, 0) || 1;
    return entries
        .map(([name, value]) => ({
            name,
            percent: Math.round((value / total) * 1000) / 10,
            color: languageColor(name),
        }))
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 5);
}

async function fetchGithubStats(
    owner: string,
    repo: string,
): Promise<RepoStats> {
    const [repoInfo, languages] = await Promise.all([
        $fetch<GithubRepoResponse>(`https://api.github.com/repos/${owner}/${repo}`),
        $fetch<Record<string, number>>(
            `https://api.github.com/repos/${owner}/${repo}/languages`,
        ),
    ]);

    return {
        stars: repoInfo.stargazers_count,
        updatedAt: repoInfo.pushed_at,
        languages: toLanguageList(Object.entries(languages)),
    };
}

async function fetchGitlabStats(
    owner: string,
    repo: string,
): Promise<RepoStats> {
    const path = encodeURIComponent(`${owner}/${repo}`);
    const [projectInfo, languages] = await Promise.all([
        $fetch<GitlabProjectResponse>(
            `https://gitlab.com/api/v4/projects/${path}`,
        ),
        $fetch<Record<string, number>>(
            `https://gitlab.com/api/v4/projects/${path}/languages`,
        ),
    ]);

    return {
        stars: projectInfo.star_count,
        updatedAt: projectInfo.last_activity_at,
        languages: toLanguageList(Object.entries(languages)),
    };
}

export function useRepoStats(
    platform: "github" | "gitlab",
    owner: string,
    repo: string,
) {
    const stats = ref<RepoStats | null>(null);
    const pending = ref(true);
    const error = ref(false);

    onMounted(async () => {
        try {
            stats.value =
                platform === "github"
                    ? await fetchGithubStats(owner, repo)
                    : await fetchGitlabStats(owner, repo);
        } catch {
            error.value = true;
        } finally {
            pending.value = false;
        }
    });

    return { stats, pending, error };
}
