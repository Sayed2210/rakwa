<script setup lang="ts">
import type Blog from "~/types/blog";
import { BASE_URL } from "~/base/persention/utils/constant";

useSeoMeta({
  title: "Blogs",
  ogTitle: "Blogs",
  description: "Blogs",
  ogDescription: "Blogs",
});

const searchWord = ref(""); // Reactive search word

// Fetch blogs using useAsyncData and watch for searchWord changes
const {
  data: blogs,
  pending,
  refresh,
} = await useAsyncData("blogs", async () => {
  const response = await $fetch<{
    data: Blog[];
    message: string;
    status: number;
  }>(`${BASE_URL}/${searchWord.value ? "home_blogs" : "home_blogs"}`, {
    method: "POST",
    ...(searchWord.value ? { body: { word: searchWord.value } } : {}),
  });
  return response.data; // Return only the blogs data
});

// Search function updates the searchWord, triggering the fetch
const search = (word: string) => {
  searchWord.value = word;
  console.log(searchWord.value);
  refresh(); // Refresh the data to fetch new results
};
</script>

<template>
  <section class="blogs">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        v-if="pending"
      >
        <BlogsCardBlogLoader class="col-span-1" v-for="i in 4" :key="i" />
      </div>
      <BlogsArticles :blogs="blogs" @search="search" v-else />
    </div>
  </section>
</template>

<style scoped></style>
