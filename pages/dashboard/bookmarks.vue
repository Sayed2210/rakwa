<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Bookmark",
  ogTitle: "Bookmark",
  description: "Bookmark",
  ogDescription: "Bookmark",
});
</script>

<template>
  <section class="bookmarks-section">
    <BookmarksBookmarkCard />
<!--    <BookmarksNoBookmark />-->
  </section>
</template>

<style scoped></style>
