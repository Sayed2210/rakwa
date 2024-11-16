<script setup lang="ts">
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "Home",
  ogDescription: "Home",
});

useHead({
  link: [{ rel: "canonical", href: "https://example.com" }, {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
  }],
});
</script>

<template>
  <section class="content">
    <HomeHeroSection />
    <HomeCategoriesSection />
    <HomeMostVisitedSection />
    <HomeOffersBanner />
    <HomeBlogsSection />
  </section>
</template>

<style scoped></style>
