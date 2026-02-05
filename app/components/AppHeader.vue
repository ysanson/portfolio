<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, ja, fr } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();

const route = useRoute();
const navigationItems = computed<NavigationMenuItem[]>(() => [
    {
        label: "Home",
        to: "/",
        icon: "i-heroicons-home",
        active: route.path === "/",
    },
    {
        label: "Experience",
        to: "/experience",
        icon: "i-heroicons-briefcase",
        active: route.path.startsWith("/experience"),
    },
    {
        label: "Projects",
        to: "/projects",
        icon: "i-heroicons-code-bracket",
        active: route.path.startsWith("/projects"),
    },
]);
</script>

<template>
    <UHeader title="Yvan SANSON" class="dark:bg-[#2e3440]">
        <template #left>
            <TerminalPath />
        </template>
        <template #default>
            <UNavigationMenu
                :items="navigationItems"
                variant="link"
                color="neutral"
            />
        </template>
        <template #right>
            <ColorModeButton />
            <ULocaleSelect
                :model-value="locale"
                :locales="[en, ja, fr]"
                class="bg-muted/80 backdrop-blur-sm rounded-full border border-muted/50 shadow-lg shadow-neutral-950/5"
                @update:model-value="setLocale($event)"
            />
        </template>
        <template #body>
            <UNavigationMenu
                :items="navigationItems"
                orientation="vertical"
                class="-mx-2.5"
            />
        </template>
    </UHeader>
</template>
