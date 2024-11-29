<script setup lang="ts">
useSeoMeta({
  title: "About Us",
  ogTitle: "About Us",
  description: "About Us",
  ogDescription: "About Us",
});
</script>

<template>
  <section class="about-us">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb title="About Us" />
      <AboutUsFuture />
      <AboutUsOurVision />
      <AboutUsOurTeam />
    </div>
    <AboutUsCallUs />
    <div class="container mx-auto px-8">
      <AboutUsClientOpinions />
    </div>
  </section>
</template>

<style scoped></style>
