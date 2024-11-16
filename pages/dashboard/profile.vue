<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Profile",
  ogTitle: "Profile",
  description: "Profile",
  ogDescription: "Profile",
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
</script>

<template>
  <ProfileUserPhoto />
  <div class="tab">
    <button type="button" class="active">{{ $t("user_info") }}</button>
    <button type="button">{{ $t("change_password") }}</button>
  </div>
  <ProfileUserInfo />
  <ProfilePasswordUpdate />
</template>

<style scoped></style>
