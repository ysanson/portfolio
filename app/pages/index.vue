<script setup lang="ts">
import type { PageLink } from "@nuxt/ui";

const links = ref<PageLink[]>([
    {
        label: "LinkedIn",
        icon: "i-lucide-linkedin",
        to: "https://www.linkedin.com/in/yvansanson/",
        target: "_blank",
    },
    {
        label: "GitHub",
        icon: "i-lucide-github",
        to: "https://github.com/nuxt/ui",
        target: "_blank",
    },
]);
</script>
<template>
    <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
            <WindowsXPCard
                title="Presentation.exe"
                icon="i-heroicons-user-circle"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-4">
                    <h2 class="text-lg font-bold">
                        {{ $t("presentation.name") }}
                    </h2>
                    <p>{{ $t("presentation.text") }}</p>
                </div>
            </WindowsXPCard>
        </div>
        <div>
            <WindowsXPCard
                title="Links.exe"
                icon="i-heroicons-paper-clip"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-4">
                    <UPageLinks :links="links" />
                </div>
            </WindowsXPCard>
        </div>
        <div>
            <WindowsXPCard
                title="Profile_picture.bmp"
                icon="i-heroicons-photo"
                minimizable
                maximizable
                closable
            >
                <img
                    src="https://i.kym-cdn.com/photos/images/newsfeed/000/754/538/454.jpg"
                />
            </WindowsXPCard>
        </div>
    </div>
</template>
