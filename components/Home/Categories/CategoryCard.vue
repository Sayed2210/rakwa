<script setup lang="ts">
import type Category from "~/types/categories";
import FilterListingParamsBuilder from "~/features/ListingFeature/Presentation/Builder/filter_listing_builder";

const props = defineProps<{ popularCategory: Category }>();

const filterListingParamsBuilder = FilterListingParamsBuilder.Instance;
const setCategory = (id: number) => {
  filterListingParamsBuilder.setCategoryID(id);
  navigateTo("/listing");
};
</script>

<template>
  <div class="category-card"  @click="setCategory(popularCategory.id)">
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
