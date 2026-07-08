<script setup lang="ts">
import edaAnalysisImg from "~/assets/images/corpy/mlops/eda-analysis.png";
import autoAnnotationImg from "~/assets/images/corpy/mlops/running-auto-annotation.png";
import anomalyGenerationImg from "~/assets/images/corpy/mlops/ng-image-generation.png";

const { t, tm, rt } = useI18n();

const highlightsOf = (key: string) =>
    (tm(key) as unknown[]).map((item) => rt(item as never));

const screenshots = [
    {
        title: "Analysis.png",
        src: edaAnalysisImg,
        alt: "Dataset analysis and clustering view",
    },
    {
        title: "Auto_annotation.png",
        src: autoAnnotationImg,
        alt: "Prompt-based auto-annotation running",
    },
    {
        title: "Anomaly_generation.png",
        src: anomalyGenerationImg,
        alt: "Synthetic anomaly generation output",
    },
];

const lightboxOpen = ref(false);
const activeScreenshot = ref<(typeof screenshots)[number] | null>(null);

const openLightbox = (screenshot: (typeof screenshots)[number]) => {
    activeScreenshot.value = screenshot;
    lightboxOpen.value = true;
};

const lifecycleStages = [
    "data",
    "annotation",
    "analysis",
    "training",
    "operations",
];
const stages = computed(() =>
    lifecycleStages.map((key, index) => ({
        step: index + 1,
        label: t(`corpyPage.mlops.lifecycle.stages.${key}.label`),
        description: t(`corpyPage.mlops.lifecycle.stages.${key}.description`),
    })),
);

const moduleKeys = ["dm", "mm", "xai"];
const modules = computed(() =>
    moduleKeys.map((key) => ({
        code: t(`corpyPage.mlops.modules.items.${key}.code`),
        name: t(`corpyPage.mlops.modules.items.${key}.name`),
        description: t(`corpyPage.mlops.modules.items.${key}.description`),
    })),
);

const featureKeys = ["autoAnnotation", "anomalyGeneration", "explainability"];
const features = computed(() =>
    featureKeys.map((key) => ({
        title: t(`corpyPage.mlops.features.items.${key}.title`),
        description: t(`corpyPage.mlops.features.items.${key}.description`),
    })),
);

const architectureKeys = ["control", "execution", "artifacts"];
const architecture = computed(() =>
    architectureKeys.map((key) => ({
        title: t(`corpyPage.mlops.architecture.items.${key}.title`),
        description: t(`corpyPage.mlops.architecture.items.${key}.description`),
    })),
);

const engineeringKeys = [
    "pipelines",
    "modularCore",
    "releaseUnit",
    "smallestMachine",
];
const engineeringDecisions = computed(() =>
    engineeringKeys.map((key) => ({
        title: t(`corpyPage.mlops.engineering.items.${key}.title`),
        description: t(`corpyPage.mlops.engineering.items.${key}.description`),
    })),
);

const contributionHighlights = computed(() =>
    highlightsOf("corpyPage.mlops.contribution.highlights"),
);

const tags = [
    "Vue",
    "Python / FastAPI",
    "Golang",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
];
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
                title="ConfideMLOps.doc"
                icon="i-heroicons-cpu-chip"
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
                            {{ t("corpyPage.mlops.tagline") }}
                        </h2>
                        <p class="text-sm">{{ t("corpyPage.mlops.intro") }}</p>
                        <h3 class="font-bold">
                            {{ t("corpyPage.mlops.gapTitle") }}
                        </h3>
                        <p class="text-sm">{{ t("corpyPage.mlops.gap") }}</p>
                        <p class="text-sm">
                            {{ t("corpyPage.mlops.deploymentNote") }}
                        </p>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.mlops.lifecycle.title") }}
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
                            {{ t("corpyPage.mlops.modules.title") }}
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
                            {{ t("corpyPage.mlops.features.title") }}
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                            {{ t("corpyPage.mlops.architecture.title") }}
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
                            {{ t("corpyPage.mlops.engineering.title") }}
                        </h3>
                        <div class="space-y-3">
                            <div
                                v-for="decision in engineeringDecisions"
                                :key="decision.title"
                                class="border border-gray-300 dark:border-gray-600 rounded p-3 space-y-1"
                            >
                                <p class="font-semibold text-sm">
                                    {{ decision.title }}
                                </p>
                                <p class="text-xs">
                                    {{ decision.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-bold mb-2">
                            {{ t("corpyPage.mlops.contribution.title") }}
                        </h3>
                        <p class="text-sm">
                            {{ t("corpyPage.mlops.contribution.intro") }}
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
