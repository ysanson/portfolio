<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

interface ExperienceEntry extends TimelineItem {
    company: string;
    agency?: string;
    team?: string;
    highlights?: string[];
    tags?: string[];
    website?: string;
}

const { t, tm, rt } = useI18n();

const highlightsOf = (key: string) =>
    (tm(key) as unknown[]).map((item) => rt(item as never));

const experiences = computed<ExperienceEntry[]>(() => [
    {
        date: t("experience.corpy.period"),
        title: t("experience.corpy.role"),
        company: "Corpy",
        team: t("experience.corpy.team"),
        icon: "i-heroicons-briefcase",
        description: t("experience.corpy.description"),
        highlights: highlightsOf("experience.corpy.highlights"),
        tags: ["Vue", "Python / FastAPI", "Golang", "Data processing"],
        website: "https://corpy.co.jp",
    },
    {
        date: t("experience.sncf.period"),
        title: t("experience.sncf.role"),
        company: "SNCF",
        agency: t("experience.sncf.agency"),
        team: t("experience.sncf.team"),
        icon: "i-heroicons-server-stack",
        description: t("experience.sncf.description"),
        highlights: highlightsOf("experience.sncf.highlights"),
        tags: ["NodeJS", "React", "Jenkins", "Kubernetes", "Terraform"],
        website: "https://www.groupe-sncf.com/en",
    },
    {
        date: t("experience.uromems.period"),
        title: t("experience.uromems.role"),
        company: "Uromems",
        agency: t("experience.uromems.agency"),
        team: t("experience.uromems.team"),
        icon: "i-heroicons-cpu-chip",
        description: t("experience.uromems.description"),
        highlights: highlightsOf("experience.uromems.highlights"),
        tags: ["Java", "Kotlin", "Jenkins", "Gradle", "SonarQube"],
        website: "https://www.uromems.com",
    },
    {
        date: t("experience.ecam.period"),
        title: t("experience.ecam.role"),
        company: "ECAM",
        agency: t("experience.ecam.agency"),
        team: t("experience.ecam.team"),
        icon: "i-heroicons-academic-cap",
        description: t("experience.ecam.description"),
        highlights: highlightsOf("experience.ecam.highlights"),
        tags: ["Java", "Spring Boot", "JavaScript", "Angular", "Jenkins"],
        website: "https://www.ecam.fr",
    },
]);

interface SkillCategory {
    label: string;
    items: string[];
}

const technicalSkills = computed<SkillCategory[]>(() => [
    {
        label: t("skills.categories.languages"),
        items: ["JavaScript", "TypeScript", "Golang", "Java", "Rust", "Python"],
    },
    {
        label: t("skills.categories.frameworks"),
        items: ["React", "Vue", "FastAPI"],
    },
    {
        label: t("skills.categories.databases"),
        items: ["PostgreSQL", "Redis"],
    },
    {
        label: t("skills.categories.cloud"),
        items: ["AWS", "GCP", "Terraform", "Kubernetes"],
    },
]);

const softSkills = computed<SkillCategory[]>(() => [
    {
        label: t("skills.categories.communication"),
        items: highlightsOf("skills.soft.communication"),
    },
    {
        label: t("skills.categories.teamwork"),
        items: highlightsOf("skills.soft.teamwork"),
    },
    {
        label: t("skills.categories.problemSolving"),
        items: highlightsOf("skills.soft.problemSolving"),
    },
    {
        label: t("skills.categories.adaptability"),
        items: highlightsOf("skills.soft.adaptability"),
    },
]);

const education = computed(() => ({
    institution: "Polytech Montpellier",
    location: t("education.location"),
    period: t("education.period"),
    degree: t("education.degree"),
    description: t("education.description"),
    courses: [
        "Algorithms",
        "Data Structures",
        "Web Programming",
        "Functional Programming",
        "Data Processing (Spark)",
        "API Design (REST, gRPC)",
    ],
}));
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
        <WindowsXPCard
            title="Experience.exe"
            icon="i-heroicons-briefcase"
            minimizable
            maximizable
            closable
            class="lg:col-span-7"
        >
            <UTimeline :items="experiences" class="w-full">
                <template #title="{ item }">
                    <div class="flex flex-col">
                        <span class="font-bold">{{ item.title }}</span>
                        <span class="text-sm">
                            <a
                                v-if="item.website"
                                :href="item.website"
                                target="_blank"
                                class="text-primary font-medium underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-0.5"
                            >
                                {{ item.company }}
                                <UIcon
                                    name="i-heroicons-arrow-top-right-on-square"
                                    class="size-3"
                                />
                            </a>
                            <template v-else>{{ item.company }}</template>
                            <span v-if="item.agency"> · {{ item.agency }}</span>
                        </span>
                    </div>
                </template>
                <template #description="{ item }">
                    <p>{{ item.description }}</p>
                    <p v-if="item.team" class="text-xs mt-1">
                        {{ t("experience.teamSize") }}{{ item.team }}
                    </p>
                    <ul
                        v-if="item.highlights?.length"
                        class="list-disc pl-4 mt-2 space-y-0.5 text-sm"
                    >
                        <li
                            v-for="highlight in item.highlights"
                            :key="highlight"
                        >
                            {{ highlight }}
                        </li>
                    </ul>
                    <div
                        v-if="item.tags?.length"
                        class="flex flex-wrap gap-1 mt-2"
                    >
                        <UBadge
                            v-for="tag in item.tags"
                            :key="tag"
                            :label="tag"
                            variant="subtle"
                        />
                    </div>
                </template>
            </UTimeline>
        </WindowsXPCard>

        <div class="lg:col-span-3 space-y-6">
            <WindowsXPCard
                title="Skills.exe"
                icon="i-heroicons-wrench-screwdriver"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-6">
                    <div>
                        <h3 class="font-bold mb-3">
                            {{ t("skills.technicalTitle") }}
                        </h3>
                        <div class="space-y-3">
                            <div
                                v-for="category in technicalSkills"
                                :key="category.label"
                            >
                                <p class="text-sm dark:text-muted mb-1">
                                    {{ category.label }}
                                </p>
                                <div class="flex flex-wrap gap-1">
                                    <UBadge
                                        v-for="item in category.items"
                                        :key="item"
                                        :label="item"
                                        variant="subtle"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold mb-3">
                            {{ t("skills.softTitle") }}
                        </h3>
                        <div class="space-y-3">
                            <div
                                v-for="category in softSkills"
                                :key="category.label"
                            >
                                <p class="text-sm dark:text-muted mb-1">
                                    {{ category.label }}
                                </p>
                                <div class="flex flex-wrap gap-1">
                                    <UBadge
                                        v-for="item in category.items"
                                        :key="item"
                                        :label="item"
                                        variant="subtle"
                                        color="neutral"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WindowsXPCard>

            <WindowsXPCard
                title="Education.exe"
                icon="i-heroicons-academic-cap"
                minimizable
                maximizable
                closable
            >
                <div class="space-y-2">
                    <h3 class="font-bold">{{ education.institution }}</h3>
                    <p class="text-sm text-gray-700 dark:text-muted">
                        {{ education.location }} · {{ education.period }}
                    </p>
                    <p class="text-sm font-medium mt-2">
                        {{ education.degree }}
                    </p>
                    <p class="text-sm mt-1">{{ education.description }}</p>
                    <div class="flex flex-wrap gap-1 mt-3">
                        <UBadge
                            v-for="course in education.courses"
                            :key="course"
                            :label="course"
                            variant="subtle"
                            color="neutral"
                        />
                    </div>
                </div>
            </WindowsXPCard>
        </div>
    </div>
</template>
