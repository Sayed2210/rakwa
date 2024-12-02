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
</script>

<template>
  <section class="listing">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <ListingShowOnMap />
      <ListingSearchContent />
    </div>
  </section>
</template>

<style scoped></style>
