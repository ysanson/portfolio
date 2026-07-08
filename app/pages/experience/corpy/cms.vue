<script setup lang="ts">
import contentFolderImg from "~/assets/images/corpy/cms/content-folder.png";
import contentViewerImg from "~/assets/images/corpy/cms/content-viewer.png";
import contentRagImg from "~/assets/images/corpy/cms/content-rag.png";
import contentWorkflowImg from "~/assets/images/corpy/cms/content-workflow.png";

const { t, tm, rt } = useI18n();

const highlightsOf = (key: string) =>
    (tm(key) as unknown[]).map((item) => rt(item as never));

const screenshots = [
    {
        title: "File_manager.png",
        src: contentFolderImg,
        alt: "Content folder tree and file manager",
    },
    {
        title: "Document_viewer.png",
        src: contentViewerImg,
        alt: "In-browser document viewer",
    },
    {
        title: "RAG_chat.png",
        src: contentRagImg,
        alt: "RAG chat answering with cited sources",
    },
    {
        title: "Workflow_builder.png",
        src: contentWorkflowImg,
        alt: "Low-code workflow builder node graph",
    },
];

const lightboxOpen = ref(false);
const activeScreenshot = ref<(typeof screenshots)[number] | null>(null);

const openLightbox = (screenshot: (typeof screenshots)[number]) => {
    activeScreenshot.value = screenshot;
    lightboxOpen.value = true;
};

const lifecycleStages = [
    "upload",
    "conversion",
    "retrieval",
    "searchAi",
    "workflow",
];
const stages = computed(() =>
    lifecycleStages.map((key, index) => ({
        step: index + 1,
        label: t(`corpyPage.cms.lifecycle.stages.${key}.label`),
        description: t(`corpyPage.cms.lifecycle.stages.${key}.description`),
    })),
);

const moduleKeys = ["cms", "searchAi", "workflow"];
const modules = computed(() =>
    moduleKeys.map((key) => ({
        code: t(`corpyPage.cms.modules.items.${key}.code`),
        name: t(`corpyPage.cms.modules.items.${key}.name`),
        description: t(`corpyPage.cms.modules.items.${key}.description`),
    })),
);

const featureKeys = [
    "pageEditor",
    "ragChat",
    "workflowBuilder",
    "accessControl",
];
const features = computed(() =>
    featureKeys.map((key) => ({
        title: t(`corpyPage.cms.features.items.${key}.title`),
        description: t(`corpyPage.cms.features.items.${key}.description`),
    })),
);

const architectureKeys = ["core", "retrieval", "action"];
const architecture = computed(() =>
    architectureKeys.map((key) => ({
        title: t(`corpyPage.cms.architecture.items.${key}.title`),
        description: t(`corpyPage.cms.architecture.items.${key}.description`),
    })),
);

const outcomeKeys = ["citedSources", "graphNotCode", "perTenant"];
const outcomes = computed(() =>
    outcomeKeys.map((key) => ({
        title: t(`corpyPage.cms.outcome.items.${key}.title`),
        description: t(`corpyPage.cms.outcome.items.${key}.description`),
    })),
);

const contributionHighlights = computed(() =>
    highlightsOf("corpyPage.cms.contribution.highlights"),
);

const tags = ["Vue", "TypeScript"];
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div class="order-2 lg:order-1 lg:col-span-1 space-y-4">
            <WindowsXPCard
                v-for="screenshot in screenshots"
                :key="screenshot.title"
                :title="screenshot.title"
                icon="i-heroicons-photo"
            >
                <button
                    type="button"
                    class="block w-full cursor-zoom-in"
                    @click="openLightbox(screenshot)"
                >
                    <img
                        :src="screenshot.src"
                        :alt="screenshot.alt"
                        class="w-full h-auto"
                    />
                </button>
            </WindowsXPCard>
        </div>

        <div class="order-1 lg:order-2 lg:col-span-3">
            <WindowsXPCard
                title="ConfideContent.doc"
                icon="i-heroicons-document-duplicate"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-6">
                    <UButton
                        to="/experience/corpy"
                        icon="i-heroicons-arrow-left"
                        color="neutral"
                        variant="ghost"
                        size="sm"
                        :label="t('corpyPage.back')"
                    />

                    <div class="space-y-3">
                        <h2 class="text-lg font-bold">
                            {{ t("corpyPage.cms.tagline") }}
                        </h2>
                        <p class="text-sm">{{ t("corpyPage.cms.intro") }}</p>
                        <h3 class="font-bold">
                            {{ t("corpyPage.cms.gapTitle") }}
                        </h3>
                        <p class="text-sm">{{ t("corpyPage.cms.gap") }}</p>
                        <p class="text-sm">
                            {{ t("corpyPage.cms.deploymentNote") }}
                        </p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.lifecycle.title") }}
                        </h3>
                        <div class="space-y-3">
                            <div
                                v-for="stage in stages"
                                :key="stage.label"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <p class="font-semibold text-sm">
                                    {{ stage.step }}. {{ stage.label }}
                                </p>
                                <p class="text-xs">{{ stage.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.modules.title") }}
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div
                                v-for="module in modules"
                                :key="module.code"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <UBadge
                                    :label="module.code"
                                    variant="subtle"
                                    color="neutral"
                                />
                                <p class="font-semibold text-sm">
                                    {{ module.name }}
                                </p>
                                <p class="text-xs">{{ module.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.features.title") }}
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div
                                v-for="feature in features"
                                :key="feature.title"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <p class="font-semibold text-sm">
                                    {{ feature.title }}
                                </p>
                                <p class="text-xs">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.architecture.title") }}
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div
                                v-for="item in architecture"
                                :key="item.title"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <p class="font-semibold text-sm">
                                    {{ item.title }}
                                </p>
                                <p class="text-xs">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.outcome.title") }}
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div
                                v-for="outcome in outcomes"
                                :key="outcome.title"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <p class="font-semibold text-sm">
                                    {{ outcome.title }}
                                </p>
                                <p class="text-xs">{{ outcome.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.cms.contribution.title") }}
                        </h3>
                        <p class="text-sm">
                            {{ t("corpyPage.cms.contribution.intro") }}
                        </p>
                        <ul class="list-disc pl-4 mt-2 space-y-1 text-sm">
                            <li
                                v-for="highlight in contributionHighlights"
                                :key="highlight"
                            >
                                {{ highlight }}
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-wrap gap-1">
                        <UBadge
                            v-for="tag in tags"
                            :key="tag"
                            :label="tag"
                            variant="subtle"
                        />
                    </div>
                </div>
            </WindowsXPCard>
        </div>
        <ClientOnly>
            <UModal
                v-model:open="lightboxOpen"
                :title="activeScreenshot?.title"
                :ui="{
                    content: 'max-w-3xl sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl',
                }"
            >
                <template #body>
                    <img
                        v-if="activeScreenshot"
                        :src="activeScreenshot.src"
                        :alt="activeScreenshot.alt"
                        class="w-full h-auto max-h-[85vh] object-contain"
                    />
                </template>
            </UModal>
        </ClientOnly>
    </div>
</template>
