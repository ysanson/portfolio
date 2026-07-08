<script setup lang="ts">
const props = defineProps<{
    name: string;
    description: string;
    platform: "github" | "gitlab";
    owner: string;
    repo: string;
    repoUrl: string;
    tags?: string[];
    image?: string;
    liveUrl?: string;
}>();

const { t, locale } = useI18n();

const platformIcon = computed(() =>
    props.platform === "github" ? "i-lucide-github" : "i-lucide-gitlab",
);

const { stats, pending, error } = useRepoStats(
    props.platform,
    props.owner,
    props.repo,
);

const formattedDate = computed(() => {
    if (!stats.value) return "";
    return new Date(stats.value.updatedAt).toLocaleDateString(locale.value, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
});
</script>

<template>
    <WindowsXPCard
        :title="name"
        :icon="platformIcon"
        minimizable
        maximizable
        closable
    >
        <div class="space-y-3">
            <div
                v-if="image"
                class="border border-gray-500 dark:border-gray-600 bg-black/5 dark:bg-black/30 p-1"
            >
                <img
                    :src="image"
                    :alt="`${name} screenshot`"
                    class="w-full h-40 object-cover"
                />
            </div>

            <p class="text-sm">{{ description }}</p>

            <div v-if="tags?.length" class="flex flex-wrap gap-1">
                <UBadge
                    v-for="tag in tags"
                    :key="tag"
                    :label="tag"
                    variant="subtle"
                    color="neutral"
                />
            </div>

            <div
                class="border-t border-gray-300 dark:border-gray-600 pt-2 text-xs"
            >
                <p
                    v-if="pending"
                    class="italic text-gray-500 dark:text-gray-400"
                >
                    {{ t("projects.stats.loading") }}
                </p>
                <p
                    v-else-if="error"
                    class="italic text-gray-500 dark:text-gray-400"
                >
                    {{ t("projects.stats.unavailable") }}
                </p>
                <div v-else-if="stats" class="space-y-2">
                    <div v-if="stats.languages.length" class="space-y-1">
                        <div
                            class="flex h-3 w-full overflow-hidden rounded-sm border border-gray-400 dark:border-gray-600"
                        >
                            <div
                                v-for="lang in stats.languages"
                                :key="lang.name"
                                :style="{
                                    width: `${lang.percent}%`,
                                    backgroundColor: lang.color,
                                }"
                                :title="`${lang.name} ${lang.percent}%`"
                            />
                        </div>
                        <div
                            class="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400"
                        >
                            <span
                                v-for="lang in stats.languages"
                                :key="lang.name"
                                class="flex items-center gap-1"
                            >
                                <span
                                    class="inline-block size-2 rounded-full"
                                    :style="{ backgroundColor: lang.color }"
                                />
                                {{ lang.name }} · {{ lang.percent }}%
                            </span>
                        </div>
                    </div>
                    <div
                        class="flex items-center justify-between text-gray-600 dark:text-gray-400"
                    >
                        <span class="flex items-center gap-1">
                            <UIcon name="i-heroicons-star" />
                            {{ stats.stars }} {{ t("projects.stats.stars") }}
                        </span>
                        <span>{{
                            t("projects.stats.updated", { date: formattedDate })
                        }}</span>
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="flex flex-wrap gap-2 p-2">
                <UButton
                    :to="repoUrl"
                    target="_blank"
                    :icon="platformIcon"
                    color="neutral"
                    variant="subtle"
                    size="sm"
                    :label="t('projects.openRepository')"
                />
                <UButton
                    v-if="liveUrl"
                    :to="liveUrl"
                    target="_blank"
                    icon="i-heroicons-arrow-top-right-on-square"
                    color="primary"
                    variant="subtle"
                    size="sm"
                    :label="t('projects.liveDemo')"
                />
            </div>
        </template>
    </WindowsXPCard>
</template>
