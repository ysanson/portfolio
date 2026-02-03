<script setup lang="ts">
const route = useRoute();

const getPageName = (path: string) => {
  if (path === "/") return "home";
  return path.replace("/", "");
};

const currentPage = computed(() => getPageName(route.path));
</script>

<template>
  <div class="font-mono text-xs sm:text-sm bg-muted/80 backdrop-blur-sm rounded-full px-3 sm:px-4 h-9 border border-muted/50 shadow-lg shadow-neutral-950/5 flex items-center">
    <div class="flex items-center gap-2">
      <span class="text-primary">$</span>
      <span class="text-muted-foreground">pwd</span>
      <span class="text-muted-foreground">→</span>
      <span class="text-foreground">ysanson.dev/{{ currentPage }}</span>
    </div>
  </div>
</template>
