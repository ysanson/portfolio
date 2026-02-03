<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, ja, fr } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();

const navigationItems: NavigationMenuItem[] = [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home",
  },
  {
    label: "Experience",
    to: "/experience",
    icon: "i-heroicons-briefcase",
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "i-heroicons-code-bracket",
  },
];
</script>

<template>
  <div class="fixed top-2 sm:top-4 left-0 right-0 z-10 px-4">
    <div class="flex items-center justify-between max-w-7xl mx-auto gap-4">
      <TerminalPath />

      <div class="flex gap-2">
        <UNavigationMenu
          :items="navigationItems"
          variant="link"
          color="neutral"
          class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
          :ui="{
            link: 'px-2 py-1',
          }"
        >
          <template #list-trailing>
            <ColorModeButton />
          </template>
        </UNavigationMenu>
        <ULocaleSelect
          :model-value="locale"
          :locales="[en, ja, fr]"
          @update:model-value="setLocale($event)"
          class="bg-muted/80 backdrop-blur-sm rounded-full border border-muted/50 shadow-lg shadow-neutral-950/5"
        />
      </div>
    </div>
  </div>
</template>
