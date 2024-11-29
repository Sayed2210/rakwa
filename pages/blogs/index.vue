<script setup lang="ts">
useSeoMeta({
  title: "Blogs",
  ogTitle: "Blogs",
  description: "Blogs",
  ogDescription: "Blogs",
});
</script>

<template>
  <section class="blogs">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <BlogsArticles />
    </div>
  </section>
</template>

<style scoped></style>
