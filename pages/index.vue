<script setup lang="ts">
import { BASE_URL } from "~/base/persention/utils/constant";
import type Category from "~/types/categories";
import type Blog from "~/types/blog";
import type { Listing } from "~/types/listing";

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "Home",
  ogDescription: "Home",
});

useHead({
  link: [
    { rel: "canonical", href: "https://example.com" },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

const { data: popularCategories } = await useAsyncData(
  "popular_categories",
  async () => {
    const response = await $fetch<{
      data: Category[];
      message: string;
      status: number;
    }>(`${BASE_URL}/popular_categories`, { method: "POST" });
    return response.data; // Extract only the `data` part
  },
);
const { data: blogs } = await useAsyncData("blogs", async () => {
  const response = await $fetch<{
    data: Blog[];
    message: string;
    status: number;
  }>(`${BASE_URL}/home_blogs`, { method: "POST" });
  return response.data; // Extract only the `data` part
});

const { data: listings } = await useAsyncData("listing", async () => {
  const response = await $fetch<{
    data: Listing[];
    message: string;
    status: number;
  }>(`${BASE_URL}/most_visited_places`, { method: "POST" });
  return response.data; // Extract only the `data` part
});

const { getLocation } = useGeolocation();

onMounted(async () => {
  await getLocation();
})
</script>

<template>
  <section class="content">
    <HomeHeroSection />
    <HomeCategoriesSection :popularCategories="popularCategories ?? []" />
    <HomeMostVisitedSection :listings="listings ?? []" />
    <HomeOffersBanner />
    <HomeBlogsSection :blogs="blogs ?? []" />
  </section>
</template>

<style scoped></style>
