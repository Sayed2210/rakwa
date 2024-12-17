<script setup lang="ts">
import { BASE_URL } from "~/base/persention/utils/constant";
import type Privacy from "~/types/privacy";

useSeoMeta({
  title: "Privacy Policy",
  ogTitle: "Privacy Policy",
  description: "Privacy Policy",
  ogDescription: "Privacy Policy",
});

const { data: privacy } = await useAsyncData("privacy", async () => {
  const response = await $fetch<{
    data: Privacy;
    message: string;
    status: number;
  }>(`${BASE_URL}/privacy`);
  return response.data; // Extract only the `data` part
});
</script>

<template>
  <section class="privacy">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb title="Privacy Policy" />
      <PrivacyContent :privacy="privacy" />
    </div>
  </section>
</template>

<style scoped></style>
