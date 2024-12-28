<script setup lang="ts">
import type Category from "~/types/categories";

const props = defineProps<{ popularCategory: Category }>();
</script>

<template>
  <div class="category-card">
    <div class="category-img">
      <NuxtImg
        :src="popularCategory.image"
        alt="category image"
        class="category-img"
        format="webp"
      />
    </div>
    <h6 class="category-title">{{ popularCategory.name }}</h6>
    <p class="category-count">{{ popularCategory.place_count }} place</p>
  </div>
</template>

<style scoped></style>
