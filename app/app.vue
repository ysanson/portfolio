<script setup lang="ts">
const { locale } = useI18n();
const colorMode = useColorMode();

const color = computed(() =>
    colorMode.value === "dark" ? "#2e3440" : "white",
);

useHead({
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { key: "theme-color", name: "theme-color", content: color },
    ],
    link: [{ rel: "icon", href: "/favicon.ico" }],
    htmlAttrs: {
        lang: locale.value,
    },
});
</script>
<template>
    <UApp>
        <NuxtLayout>
            <UMain>
                <NuxtPage />
            </UMain>
        </NuxtLayout>
    </UApp>
</template>
