<script setup lang="ts">
const { t } = useI18n();

const links = useSocialLinks();

const languages = computed(() => [
    {
        key: "french",
        name: t("languages.french.name"),
        level: t("languages.french.level"),
        certification: t("languages.french.certification"),
    },
    {
        key: "english",
        name: t("languages.english.name"),
        level: t("languages.english.level"),
        certification: t("languages.english.certification"),
    },
    {
        key: "japanese",
        name: t("languages.japanese.name"),
        level: t("languages.japanese.level"),
        certification: t("languages.japanese.certification"),
    },
]);
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <WindowsXPCard
            title="Profile_picture.bmp"
            icon="i-heroicons-photo"
            minimizable
            maximizable
            closable
        >
            <img
                src="~/assets/images/profile.webp"
                alt="Profile picture"
                class="w-full h-auto"
            />
        </WindowsXPCard>
        <div class="lg:col-span-3 space-y-6">
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

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <WindowsXPCard
                    title="Links.html"
                    icon="i-heroicons-paper-clip"
                    minimizable
                    maximizable
                    closable
                >
                    <div class="grid grid-cols-3 gap-2 -m-2">
                        <a
                            v-for="link in links"
                            :key="link.label"
                            :href="link.to"
                            target="_blank"
                            class="group flex flex-col items-center gap-1 rounded-sm px-1 py-2 text-center outline-offset-1 hover:bg-[#316ac5]/20 hover:outline hover:outline-dotted hover:outline-[#316ac5] focus:bg-[#316ac5]/30"
                        >
                            <span class="relative">
                                <UIcon
                                    :name="link.icon"
                                    class="text-4xl text-gray-800 dark:text-gray-100"
                                />
                                <span
                                    class="absolute -bottom-0.5 -left-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-white ring-1 ring-black/10"
                                >
                                    <UIcon
                                        name="i-heroicons-arrow-top-right-on-square"
                                        class="text-[9px] text-gray-700"
                                    />
                                </span>
                            </span>
                            <span
                                class="text-xs font-medium leading-tight group-hover:underline"
                            >
                                {{ link.label }}
                            </span>
                        </a>
                    </div>
                </WindowsXPCard>

                <WindowsXPCard
                    title="Languages.xls"
                    icon="i-heroicons-table-cells"
                    minimizable
                    maximizable
                    closable
                >
                    <div
                        class="-m-2 border border-gray-500 dark:border-gray-500 overflow-x-auto select-none"
                    >
                        <table
                            class="w-full text-xs border-collapse whitespace-nowrap"
                        >
                            <thead>
                                <tr>
                                    <th
                                        class="w-6 border border-gray-400 dark:border-gray-600 bg-linear-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-700"
                                    />
                                    <th
                                        v-for="col in ['A', 'B', 'C']"
                                        :key="col"
                                        class="border border-gray-400 dark:border-gray-600 bg-linear-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-700 font-normal text-gray-600 dark:text-gray-300 px-2 py-0.5"
                                    >
                                        {{ col }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        class="border border-gray-400 dark:border-gray-600 bg-linear-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-center text-gray-600 dark:text-gray-300"
                                    >
                                        1
                                    </td>
                                    <td
                                        class="border border-gray-400 dark:border-gray-600 bg-[#e9f2da] dark:bg-gray-700 font-bold px-2 py-0.5"
                                    >
                                        {{ t("languages.headers.language") }}
                                    </td>
                                    <td
                                        class="border border-gray-400 dark:border-gray-600 bg-[#e9f2da] dark:bg-gray-700 font-bold px-2 py-0.5"
                                    >
                                        {{ t("languages.headers.level") }}
                                    </td>
                                    <td
                                        class="border border-gray-400 dark:border-gray-600 bg-[#e9f2da] dark:bg-gray-700 font-bold px-2 py-0.5"
                                    >
                                        {{
                                            t("languages.headers.certification")
                                        }}
                                    </td>
                                </tr>
                                <tr
                                    v-for="(lang, index) in languages"
                                    :key="lang.key"
                                >
                                    <td
                                        class="border border-gray-400 dark:border-gray-600 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-center text-gray-600 dark:text-gray-300"
                                    >
                                        {{ index + 2 }}
                                    </td>
                                    <td
                                        class="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/40 px-2 py-0.5 font-medium"
                                    >
                                        {{ lang.name }}
                                    </td>
                                    <td
                                        class="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/40 px-2 py-0.5"
                                    >
                                        {{ lang.level }}
                                    </td>
                                    <td
                                        class="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/40 px-2 py-0.5"
                                    >
                                        {{ lang.certification }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </WindowsXPCard>
            </div>
        </div>
    </div>
</template>
