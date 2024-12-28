<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Edit Listing",
  ogTitle: "Edit Listing",
  description: "Edit Listing",
  ogDescription: "Edit Listing",
});

useHead({
  link: [
    { rel: "canonical", href: "https://example.com" },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
  ],
});
</script>

<template>
  <ListingEditList />
</template>

<style scoped></style>