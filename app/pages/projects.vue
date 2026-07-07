<script setup lang="ts">
interface ProjectEntry {
    name: string;
    platform: "github" | "gitlab";
    owner: string;
    repo: string;
    repoUrl: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    image?: string;
}

const { t } = useI18n();

const projects = computed<ProjectEntry[]>(() => [
    {
        name: "VeloVista",
        platform: "gitlab",
        owner: "ysanson",
        repo: "bike-stats",
        repoUrl: "https://gitlab.com/ysanson/bike-stats",
        description: t("projects.items.veloVista.description"),
        tags: ["Swift", "SwiftUI", "iOS", "watchOS"],
    },
    {
        name: "rs_torrent",
        platform: "github",
        owner: "ysanson",
        repo: "rs_torrent",
        repoUrl: "https://github.com/ysanson/rs_torrent",
        description: t("projects.items.rsTorrent.description"),
        tags: ["Rust", "Networking", "P2P"],
    },
    {
        name: "interpreter-go",
        platform: "github",
        owner: "ysanson",
        repo: "interpreter-go",
        repoUrl: "https://github.com/ysanson/interpreter-go",
        description: t("projects.items.interpreterGo.description"),
        tags: ["Go", "Compilers", "Interpreters"],
    },
    {
        name: "GitGud",
        platform: "github",
        owner: "ysanson",
        repo: "GitGud",
        repoUrl: "https://github.com/ysanson/GitGud",
        description: t("projects.items.gitGud.description"),
        tags: ["Go", "TUI", "Git"],
    },
    {
        name: "simple-form-builder",
        platform: "github",
        owner: "ysanson",
        repo: "simple-form-builder",
        repoUrl: "https://github.com/ysanson/simple-form-builder",
        description: t("projects.items.simpleFormBuilder.description"),
        tags: ["TypeScript", "React", "Open Source"],
    },
    {
        name: "NyaaBrowser",
        platform: "github",
        owner: "ysanson",
        repo: "NyaaBrowser",
        repoUrl: "https://github.com/ysanson/NyaaBrowser",
        description: t("projects.items.nyaaBrowser.description"),
        tags: ["C#", "Desktop"],
    },
    {
        name: "FocalStats",
        platform: "gitlab",
        owner: "ysanson",
        repo: "focalstats",
        repoUrl: "https://gitlab.com/ysanson/focalstats",
        description: t("projects.items.focalStats.description"),
        tags: ["Image Processing", "CLI"],
    },
    {
        name: "portfolio",
        platform: "github",
        owner: "ysanson",
        repo: "portfolio",
        repoUrl: "https://github.com/ysanson/portfolio",
        description: t("projects.items.portfolio.description"),
        tags: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS"],
    },
]);
</script>

<template>
    <div class="space-y-6">
        <WindowsXPCard
            title="My Projects.exe"
            icon="i-heroicons-folder-open"
            minimizable
            maximizable
            closable
        >
            <p>{{ t("projects.intro") }}</p>
        </WindowsXPCard>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <ProjectCard
                v-for="project in projects"
                :key="project.repoUrl"
                v-bind="project"
            />
        </div>
    </div>
</template>
