<script setup lang="ts">
import { en, ja, fr } from "@nuxt/ui/locale";

definePageMeta({ layout: "card" });

const { t, locale, setLocale } = useI18n();

const email = "sansonyvan@gmail.com";

const links = useSocialLinks();

const contacts = computed(() => [
    ...links.value,
    {
        label: t("card.email"),
        icon: "i-heroicons-envelope",
        to: `mailto:${email}`,
    },
]);
</script>

<template>
    <div class="w-full max-w-xs flex flex-col gap-8">
        <div class="flex items-center justify-between">
            <UButton
                to="/"
                icon="i-heroicons-home"
                color="neutral"
                variant="soft"
                :label="t('card.home')"
            />
            <ULocaleSelect
                :model-value="locale"
                :locales="[en, ja, fr]"
                @update:model-value="setLocale($event)"
            />
        </div>

        <div class="flex flex-col items-center text-center gap-1">
            <h1 class="text-2xl font-bold">{{ t("presentation.name") }}</h1>
            <p class="text-lg text-gray-500 dark:text-gray-400">
                イヴァン・サンソン
            </p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {{
                    t("card.roleAt", {
                        role: t("experience.corpy.role"),
                        company: t("corpyPage.overview.title"),
                    })
                }}
            </p>
        </div>

        <div class="grid grid-cols-2 gap-3">
            <a
                v-for="contact in contacts"
                :key="contact.label"
                :href="contact.to"
                target="_blank"
                class="flex flex-col items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-4 text-center hover:bg-gray-100 dark:hover:bg-gray-800"
            >
                <UIcon :name="contact.icon" class="text-2xl" />
                <span class="text-sm font-medium">{{ contact.label }}</span>
            </a>
        </div>
    </div>
</template>
