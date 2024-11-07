<script setup lang="ts">

</script>

<template>
  <main class="dashboard">
    <DashboradLayoutHeader />
    <div class="flex">
      <DashboradLayoutSidebar />
      <div class="w-full">
        <slot/>
      </div>
    </div>
  </main>
</template>

<style scoped></style>