<script setup lang="ts">
import velovistaImg from "~/assets/images/projects/velovista.webp";
import rsTorrentImg from "~/assets/images/projects/rs_torrent.webp";
import adventOfCodeImg from "~/assets/images/projects/adventOfCode.webp";

interface ProjectEntry {
    name: string;
    platform: "github" | "gitlab";
    owner: string;
    repo: string;
    repoUrl: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    image?: string;
}

const { t } = useI18n();

const projects = computed<ProjectEntry[]>(() => [
    {
        name: "VeloVista",
        platform: "gitlab",
        owner: "ysanson",
        repo: "bike-stats",
        repoUrl: "https://gitlab.com/ysanson/bike-stats",
        description: t("projects.items.veloVista.description"),
        tags: ["Swift", "SwiftUI", "iOS", "watchOS"],
        image: velovistaImg,
    },
    {
        name: "rs_torrent",
        platform: "github",
        owner: "ysanson",
        repo: "rs_torrent",
        repoUrl: "https://github.com/ysanson/rs_torrent",
        description: t("projects.items.rsTorrent.description"),
        tags: ["Rust", "Networking", "P2P"],
        image: rsTorrentImg,
    },
    {
        name: "AdventOfCode",
        platform: "github",
        owner: "ysanson",
        repo: "AdventOfCode",
        repoUrl: "https://github.com/ysanson/AdventOfCode",
        description: t("projects.items.adventOfCode.description"),
        tags: ["Algorithms", "Puzzles"],
        image: adventOfCodeImg,
    },
    {
        name: "cordage",
        platform: "github",
        owner: "ysanson",
        repo: "cordage",
        repoUrl: "https://github.com/ysanson/cordage",
        description: t("projects.items.cordage.description"),
        tags: ["Go", "Distributed Systems", "gRPC"],
    },
    {
        name: "interpreter-go",
        platform: "github",
        owner: "ysanson",
        repo: "interpreter-go",
        repoUrl: "https://github.com/ysanson/interpreter-go",
        description: t("projects.items.interpreterGo.description"),
        tags: ["Go", "Compilers", "Interpreters"],
    },
    {
        name: "simple-form-builder",
        platform: "github",
        owner: "ysanson",
        repo: "simple-form-builder",
        repoUrl: "https://github.com/ysanson/simple-form-builder",
        description: t("projects.items.simpleFormBuilder.description"),
        tags: ["TypeScript", "React", "Open Source"],
    },
    {
        name: "NyaaBrowser",
        platform: "github",
        owner: "ysanson",
        repo: "NyaaBrowser",
        repoUrl: "https://github.com/ysanson/NyaaBrowser",
        description: t("projects.items.nyaaBrowser.description"),
        tags: ["C#", "Desktop"],
    },
    {
        name: "portfolio",
        platform: "github",
        owner: "ysanson",
        repo: "portfolio",
        repoUrl: "https://github.com/ysanson/portfolio",
        description: t("projects.items.portfolio.description"),
        tags: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS"],
    },
]);
</script>

<template>
    <div class="space-y-6">
        <WindowsXPCard
            title="My Projects.exe"
            icon="i-heroicons-folder-open"
            minimizable
            maximizable
            closable
        >
            <p>{{ t("projects.intro") }}</p>
        </WindowsXPCard>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <ProjectCard
                v-for="project in projects"
                :key="project.repoUrl"
                v-bind="project"
            />
        </div>
    </div>
</template>
