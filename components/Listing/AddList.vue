<script setup lang="ts">
const image = ref<File | null>(null);
</script>

<template>
  <div class="listing-section">
    <h2 class="listing-section-title">
      {{ $t("basic_information") }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <GlobalUploadImage @update:image="(file) => (file = image)" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
