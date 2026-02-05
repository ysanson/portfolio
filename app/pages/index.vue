<script setup lang="ts"></script>
<template>
  <div>
    <WindowsXPCard
      title="Presentation.exe"
      icon="i-heroicons-computer-desktop"
      :minimizable="true"
      :maximizable="true"
      :closable="true"
      @close="handleClose"
    >
      <div class="space-y-4">
        <h2 class="text-lg font-bold">Yvan SANSON</h2>
        <p>Fullstack software engineer with 6 years of experience.</p>
        <div class="flex gap-2">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            My projects
          </button>
          <button
            class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            My tech stack
          </button>
        </div>
      </div>
    </WindowsXPCard>
  </div>
</template>
