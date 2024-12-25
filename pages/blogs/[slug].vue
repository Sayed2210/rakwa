<script setup lang="ts">
import type Blog from "~/types/blog";
import { BASE_URL } from "~/base/persention/utils/constant";

const { data: blog } = await useAsyncData("blogs", async () => {
  const response = await $fetch<{
    data: Blog;
    message: string;
    status: number;
  }>(`${BASE_URL}/blog-details`, {
    method: "POST",
    body: { slug: useRoute().params.slug },
  });
  return response.data; // Extract only the `data` part
});

useSeoMeta({
  title: blog.value?.title,
  ogTitle: blog.value?.title,
  description: blog.value?.description,
  ogDescription: blog.value?.description,
  ogUrl: `https://example.com/blogs/${blog.value?.slug}`,
  ogImage: blog.value?.image,
  ogImageAlt: blog.value?.title,
})
</script>

<template>
  <section class="blogs">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb />
      <BlogsDetails :blog="blog" />
    </div>
  </section>
</template>

<style scoped></style>
