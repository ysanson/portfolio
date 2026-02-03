<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <!-- Spacer for fixed header -->
    <div class="h-16 sm:h-20"></div>
    
    <!-- Divider -->
    <div class="border-b border-default"></div>
    
    <main class="flex-1">
      <UContainer class="max-w-3xl py-8 sm:py-16">
        <slot />
      </UContainer>
    </main>
  </div>
</template>
