<script setup lang="ts">
import mlopsOverviewImg from "~/assets/images/corpy/mlops/dataset-management.png";
import cmsOverviewImg from "~/assets/images/corpy/cms/content-folder.png";

const { t } = useI18n();
</script>

<template>
    <div class="space-y-6">
        <WindowsXPCard
            title="Corpy.exe"
            icon="i-heroicons-building-office-2"
            minimizable
            maximizable
            closable
        >
            <div class="space-y-4">
                <UButton
                    to="/experience"
                    icon="i-heroicons-arrow-left"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    :label="t('corpyPage.back')"
                />
                <p class="text-sm">{{ t("corpyPage.overview.intro") }}</p>
            </div>
        </WindowsXPCard>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <WindowsXPCard
                title="ConfideMLOps.txt"
                icon="i-heroicons-cpu-chip"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-3">
                    <div
                        class="border border-gray-500 dark:border-gray-600 bg-black/5 dark:bg-black/30 p-1"
                    >
                        <img
                            :src="mlopsOverviewImg"
                            alt="Confide MLOps dataset management screenshot"
                            class="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <p class="font-bold">
                        {{ t("corpyPage.overview.mlops.tagline") }}
                    </p>
                    <p class="text-sm">
                        {{ t("corpyPage.overview.mlops.blurb") }}
                    </p>
                </div>
                <template #footer>
                    <div class="p-2">
                        <UButton
                            to="/experience/corpy/mlops"
                            icon="i-heroicons-arrow-top-right-on-square"
                            color="primary"
                            variant="subtle"
                            size="sm"
                            :label="t('corpyPage.overview.mlops.cta')"
                        />
                    </div>
                </template>
            </WindowsXPCard>

            <WindowsXPCard
                title="ConfideContent.txt"
                icon="i-heroicons-document-duplicate"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-3">
                    <div
                        class="border border-gray-500 dark:border-gray-600 bg-black/5 dark:bg-black/30 p-1"
                    >
                        <img
                            :src="cmsOverviewImg"
                            alt="Confide Content file browser screenshot"
                            class="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <p class="font-bold">
                        {{ t("corpyPage.overview.cms.tagline") }}
                    </p>
                    <p class="text-sm">
                        {{ t("corpyPage.overview.cms.blurb") }}
                    </p>
                </div>
                <template #footer>
                    <div class="p-2">
                        <UButton
                            to="/experience/corpy/cms"
                            icon="i-heroicons-arrow-top-right-on-square"
                            color="primary"
                            variant="subtle"
                            size="sm"
                            :label="t('corpyPage.overview.cms.cta')"
                        />
                    </div>
                </template>
            </WindowsXPCard>
        </div>
    </div>
</template>
