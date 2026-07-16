import type { PageLink } from "@nuxt/ui";

export const useSocialLinks = () =>
    ref<PageLink[]>([
        {
            label: "LinkedIn",
            icon: "i-lucide-linkedin",
            to: "https://www.linkedin.com/in/yvansanson/",
        },
        {
            label: "GitHub",
            icon: "i-lucide-github",
            to: "https://github.com/ysanson",
        },
        {
            label: "Gitlab",
            icon: "i-lucide-gitlab",
            to: "https://gitlab.com/ysanson",
        },
    ]);
