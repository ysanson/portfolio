<script setup lang="ts">
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
                title="ConfideMLOps.exe"
                icon="i-heroicons-cpu-chip"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-3">
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
                title="ConfideCMS.exe"
                icon="i-heroicons-document-duplicate"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-3">
                    <UBadge
                        :label="t('corpyPage.overview.cms.tagline')"
                        variant="subtle"
                        color="neutral"
                    />
                    <p class="text-sm">
                        {{ t("corpyPage.overview.cms.blurb") }}
                    </p>
                </div>
            </WindowsXPCard>
        </div>
    </div>
</template>
