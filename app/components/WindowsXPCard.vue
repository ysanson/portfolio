<template>
  <div class="windows-xp-window">
    <!-- Windows XP Title Bar -->
    <div class="windows-xp-titlebar">
      <div class="flex items-center gap-2">
        <div v-if="icon" class="w-4 h-4 flex items-center justify-center">
          <UIcon :name="icon" class="text-white text-sm" />
        </div>
        <span class="text-white text-sm font-bold tracking-tight">
          {{ title }}
        </span>
      </div>
      <div class="flex items-center gap-0.5">
        <button
          v-if="minimizable"
          class="xp-button xp-minimize"
          aria-label="Minimize"
        >
          <span class="xp-button-icon">_</span>
        </button>
        <button
          v-if="maximizable"
          class="xp-button xp-maximize"
          aria-label="Maximize"
        >
          <span class="xp-button-icon">□</span>
        </button>
        <button v-if="closable" class="xp-button xp-close" aria-label="Close">
          <span class="xp-button-icon">×</span>
        </button>
      </div>
    </div>

    <!-- Windows XP Body -->
    <div class="windows-xp-content">
      <slot />
    </div>

    <!-- Windows XP Footer -->
    <div v-if="$slots.footer" class="windows-xp-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  icon?: string;
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
}>();
</script>

<style scoped>
.windows-xp-window {
  border: 3px solid #0054e3;
  border-radius: 8px 8px 4px 4px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.2) inset,
    2px 2px 8px rgba(0, 0, 0, 0.3);
  background-color: #ece9d8;
  overflow: hidden;
}

.windows-xp-titlebar {
  background: linear-gradient(
    180deg,
    #0997ff 0%,
    #0053ee 8%,
    #0050ee 40%,
    #06f 88%,
    #06f 93%,
    #005bff 95%,
    #003dd7 96%,
    #003dd7 100%
  );
  border-radius: 5px 5px 0 0;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px 0 8px;
  border-bottom: 1px solid #0831d9;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
}

.windows-xp-content {
  background-color: #ece9d8;
  color: #000;
  padding: 1rem;
}

.windows-xp-footer {
  background-color: #ece9d8;
  color: #000;
  border-top: 1px solid #c0c0c0;
}

/* Dark mode styles */
.dark .windows-xp-window {
  background-color: #2d2d2d;
  border-color: #0054e3;
}

.dark .windows-xp-content {
  background-color: #2d2d2d;
  color: #e0e0e0;
}

.dark .windows-xp-footer {
  background-color: #2d2d2d;
  color: #e0e0e0;
  border-top: 1px solid #404040;
}

.xp-button {
  width: 21px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition: all 0.1s;
  position: relative;
}

.xp-button:hover {
  background: linear-gradient(180deg, #fff 0%, #dbeaf9 50%, #c5d9f5 100%);
  border: 1px solid #0831d9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.xp-button:active {
  background: linear-gradient(180deg, #c5d9f5 0%, #dbeaf9 50%, #fff 100%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

.xp-button-icon {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  line-height: 1;
  display: block;
}

.xp-minimize .xp-button-icon {
  font-size: 16px;
  margin-top: 8px;
}

.xp-maximize .xp-button-icon {
  font-size: 15px;
}

.xp-close {
  margin-left: 2px;
}

.xp-close .xp-button-icon {
  font-size: 18px;
  margin-top: -2px;
}

.xp-close:hover {
  background: linear-gradient(180deg, #ff9d9a 0%, #ff6b66 50%, #ff4d47 100%);
  border-color: #c13f3a;
}

.xp-close:hover .xp-button-icon {
  color: #fff;
}

.xp-close:active {
  background: linear-gradient(180deg, #ff4d47 0%, #ff6b66 50%, #ff9d9a 100%);
}
</style>
