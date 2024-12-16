<script setup lang="ts">
</script>

<template>
  <main class="dashboard">
    <DashboradLayoutHeader />
    <DashboradLayoutBanner />
    <div class="flex gap-4 p-10">
      <DashboradLayoutSidebar />
      <div class="w-full border border-gray-200 p-4 bg-white rounded-2xl">
        <slot />
      </div>
    </div>
    <GlobalMainDialog />

  </main>
</template>

<style scoped></style>
