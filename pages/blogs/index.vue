<script setup lang="ts">
import type Blog from "~/types/blog";
import {BASE_URL} from "~/base/persention/utils/constant";

useSeoMeta({
  title: "Blogs",
  ogTitle: "Blogs",
  description: "Blogs",
  ogDescription: "Blogs",
});


const { data: blogs } = await useAsyncData("blogs",
    async () => {
      const response = await $fetch<{ data: Blog[]; message: string; status: number }>(
          `${BASE_URL}/home_blogs`,
          { method: "POST" }
      );
      return response.data; // Extract only the `data` part
    }
);

</script>

<template>
  <section class="blogs">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <BlogsArticles :blogs="blogs"/>
    </div>
  </section>
</template>

<style scoped></style>
