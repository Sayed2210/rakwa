<script setup lang="ts">
definePageMeta({
  layout: "listing",
});

useSeoMeta({
  title: "Listing",
  ogTitle: "Listing",
  description: "Listing",
  ogDescription: "Listing",
});

const showMap = ref<boolean>(false);

const toggleToMap = () => {
  console.log(showMap.value);
  showMap.value = !showMap.value;
};
</script>

<template>
  <section class="listing">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <ListingShowOnMap @showMap="toggleToMap" v-if="!showMap" />
      <ListingSearchContent :showMap="showMap" />
    </div>
  </section>
</template>

<style scoped></style>
