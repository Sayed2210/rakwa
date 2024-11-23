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

const toggle = ref<boolean>(false);
</script>

<template>
  <ProfileUserPhoto />
  <div class="tabs">
    <button type="button" aria-label="user_info" :class="[toggle ? 'active' : '' , 'tab']" @click="toggle = true">
      {{ $t("user_info") }}
    </button>
    <button type="button" aria-label="change_password" :class="[!toggle ? 'active' : '' , 'tab']" @click="toggle = false">
      {{ $t("change_password") }}
    </button>
  </div>
  <Suspense>
    <template #default>
      <ProfileUserInfo v-if="toggle" />
      <ProfilePasswordUpdate v-else />
    </template>
    <template #fallback>
      <div class="loader"></div>
    </template>
  </Suspense>
</template>

<style scoped></style>
