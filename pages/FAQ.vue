<script setup lang="ts">
import type Faq from "~/types/faq";
import { BASE_URL } from "~/base/persention/utils/constant";

useSeoMeta({
  title: "FAQs",
  ogTitle: "FAQs",
  description: "FAQs",
  ogDescription: "FAQs",
});

const { data: faqs } = await useAsyncData("faq", async () => {
  const response = await $fetch<{
    data: Faq[];
    message: string;
    status: number;
  }>(`${BASE_URL}/faq`);
  return response.data; // Extract only the `data` part
});
</script>

<template>
  <section class="faq">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb title="FAQs" />
      <FAQContent :faqs="faqs" />
    </div>
  </section>
</template>

<style scoped></style>
