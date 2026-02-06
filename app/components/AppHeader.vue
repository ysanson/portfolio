<script setup lang="ts">
import { en, ja, fr } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();

const route = useRoute();
const showStartMenu = ref(false);

const navigationItems = computed(() => [
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

const toggleStartMenu = () => {
    showStartMenu.value = !showStartMenu.value;
};

const closeStartMenu = () => {
    showStartMenu.value = false;
};
</script>

<template>
    <div class="xp-taskbar">
        <!-- Start Menu Overlay (for closing when clicking outside) -->
        <div
            v-if="showStartMenu"
            class="xp-start-menu-overlay"
            @click="closeStartMenu"
        />

        <!-- Start Menu -->
        <Transition name="start-menu">
            <div v-if="showStartMenu" class="xp-start-menu">
                <div class="xp-start-menu-header">
                    <div class="xp-start-menu-user">
                        <UIcon name="i-heroicons-user-circle" class="text-3xl" />
                        <span class="font-bold">Menu</span>
                    </div>
                </div>
                <div class="xp-start-menu-items">
                    <NuxtLink
                        v-for="item in navigationItems"
                        :key="item.to"
                        :to="item.to"
                        class="xp-start-menu-item"
                        :class="{ active: item.active }"
                        @click="closeStartMenu"
                    >
                        <UIcon :name="item.icon" class="text-xl" />
                        <span>{{ item.label }}</span>
                    </NuxtLink>
                </div>
            </div>
        </Transition>

        <div class="xp-taskbar-content">
            <!-- Start Button -->
            <button class="xp-start-button" @click="toggleStartMenu">
                <div class="xp-start-icon">
                    <UIcon name="i-heroicons-squares-2x2" class="text-lg" />
                </div>
                <span class="xp-start-text">Start</span>
            </button>

            <!-- Navigation Items as Taskbar Buttons -->
            <div class="xp-taskbar-buttons">
                <NuxtLink
                    v-for="item in navigationItems"
                    :key="item.to"
                    :to="item.to"
                    class="xp-taskbar-button"
                    :class="{ active: item.active }"
                >
                    <UIcon :name="item.icon" class="text-base" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </div>

            <!-- System Tray -->
            <div class="xp-system-tray">
                <ColorModeButton />
                <ULocaleSelect
                    :model-value="locale"
                    :locales="[en, ja, fr]"
                    class="xp-locale-select"
                    @update:model-value="setLocale($event)"
                />
                <div class="xp-clock">
                    {{ new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }) }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.xp-taskbar {
    background: linear-gradient(
        180deg,
        #245edb 0%,
        #3f8cf3 7%,
        #245edb 50%,
        #1941a5 93%,
        #1941a5 100%
    );
    border-top: 1px solid #0831d9;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 50;
}

.dark .xp-taskbar {
    background: linear-gradient(
        180deg,
        #3a3a3a 0%,
        #4a4a4a 7%,
        #3a3a3a 50%,
        #2a2a2a 93%,
        #2a2a2a 100%
    );
    border-top: 1px solid #1a1a1a;
}

.xp-taskbar-content {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    min-height: 40px;
}

.xp-start-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px 4px 6px;
    background: linear-gradient(180deg, #5eac56 0%, #3c8d35 50%, #2d6e28 100%);
    border: 1px solid #16591e;
    border-radius: 4px 12px 12px 4px;
    box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.3) inset,
        0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.1s;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    min-height: 32px;
}

.dark .xp-start-button {
    background: linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%);
    border: 1px solid #1a1a1a;
    box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.1) inset,
        0 2px 4px rgba(0, 0, 0, 0.5);
}

.xp-start-button:hover {
    background: linear-gradient(180deg, #6ec065 0%, #4a9d43 50%, #3a7d33 100%);
    box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.4) inset,
        0 2px 6px rgba(0, 0, 0, 0.4);
}

.dark .xp-start-button:hover {
    background: linear-gradient(180deg, #5a5a5a 0%, #4a4a4a 50%, #3a3a3a 100%);
}

.xp-start-button:active {
    background: linear-gradient(180deg, #2d6e28 0%, #3c8d35 50%, #5eac56 100%);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
}

.dark .xp-start-button:active {
    background: linear-gradient(180deg, #2a2a2a 0%, #3a3a3a 50%, #4a4a4a 100%);
}

.xp-start-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.xp-start-text {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
}

.xp-taskbar-buttons {
    display: flex;
    gap: 2px;
    flex: 1;
    align-items: center;
}

.xp-taskbar-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: linear-gradient(180deg, #3f8cf3 0%, #245edb 50%, #1941a5 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.1s;
    color: white;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    min-height: 28px;
}

.dark .xp-taskbar-button {
    background: linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.xp-taskbar-button:hover {
    background: linear-gradient(180deg, #5fa3ff 0%, #3f8cf3 50%, #245edb 100%);
    border-color: rgba(255, 255, 255, 0.5);
}

.dark .xp-taskbar-button:hover {
    background: linear-gradient(180deg, #5a5a5a 0%, #4a4a4a 50%, #3a3a3a 100%);
}

.xp-taskbar-button.active {
    background: linear-gradient(180deg, #1941a5 0%, #245edb 50%, #3f8cf3 100%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0.3);
}

.dark .xp-taskbar-button.active {
    background: linear-gradient(180deg, #2a2a2a 0%, #3a3a3a 50%, #4a4a4a 100%);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.6);
}

.xp-system-tray {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    background: linear-gradient(180deg, #0c59b9 0%, #0f4d9c 100%);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
    margin-left: auto;
}

.dark .xp-system-tray {
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
    border: 1px solid rgba(0, 0, 0, 0.5);
}

.xp-system-tray :deep(button) {
    background: white !important;
    color: #000 !important;
    border: 1px solid #a0a0a0 !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
}

.xp-system-tray :deep(button:hover) {
    background: #f0f0f0 !important;
    border-color: #808080 !important;
}

.dark .xp-system-tray :deep(button) {
    background: #3a3a3a !important;
    color: #e0e0e0 !important;
    border: 1px solid #1a1a1a !important;
}

.dark .xp-system-tray :deep(button:hover) {
    background: #4a4a4a !important;
}

.xp-clock {
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    padding: 2px 6px;
    min-width: 60px;
    text-align: center;
}

.dark .xp-clock {
    color: #e0e0e0;
}

.xp-locale-select {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}

/* Start Menu Overlay */
.xp-start-menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    background: transparent;
}

/* Start Menu */
.xp-start-menu {
    position: fixed;
    top: 48px;
    left: 4px;
    width: 280px;
    background: linear-gradient(to right, #245edb 0px, #245edb 52px, #ece9d8 52px, #ece9d8 100%);
    border: 3px solid;
    border-color: #0831d9 #0831d9 #5a8de3 #5a8de3;
    border-radius: 0 0 8px 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    z-index: 100;
    overflow: hidden;
}

.dark .xp-start-menu {
    background: linear-gradient(to right, #2a2a2a 0px, #2a2a2a 52px, #1a1a1a 52px, #1a1a1a 100%);
    border-color: #1a1a1a #1a1a1a #3a3a3a #3a3a3a;
}

.xp-start-menu-header {
    padding: 12px;
    background: transparent;
}

.xp-start-menu-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.dark .xp-start-menu-user {
    color: #e0e0e0;
}

.xp-start-menu-items {
    padding: 4px 0;
    margin-left: 52px;
}

.xp-start-menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.1s;
    border-left: 3px solid transparent;
}

.dark .xp-start-menu-item {
    color: #e0e0e0;
}

.xp-start-menu-item:hover {
    background: linear-gradient(to right, #3d8cf4 0%, #5fa3ff 100%);
    color: white;
    border-left-color: #0831d9;
}

.dark .xp-start-menu-item:hover {
    background: linear-gradient(to right, #3a3a3a 0%, #4a4a4a 100%);
    border-left-color: #5a5a5a;
}

.xp-start-menu-item.active {
    background: linear-gradient(to right, #1941a5 0%, #3d8cf4 100%);
    color: white;
    font-weight: 600;
    border-left-color: #0831d9;
}

.dark .xp-start-menu-item.active {
    background: linear-gradient(to right, #2a2a2a 0%, #3a3a3a 100%);
    border-left-color: #4a4a4a;
}

/* Start Menu Transitions */
.start-menu-enter-active,
.start-menu-leave-active {
    transition: all 0.2s ease;
}

.start-menu-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.start-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Mobile responsive */
@media (max-width: 768px) {
    .xp-taskbar-buttons {
        display: none;
    }
    
    .xp-start-text {
        display: none;
    }
    
    .xp-start-button {
        padding: 4px 8px;
        border-radius: 4px;
    }
    
    .xp-start-menu {
        width: calc(100vw - 16px);
        max-width: 320px;
    }
}

/* Desktop - hide start menu on larger screens */
@media (min-width: 769px) {
    .xp-start-menu {
        display: none;
    }
}
</style>
