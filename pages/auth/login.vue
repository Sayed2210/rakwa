<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Login",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Login to your account",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "Login",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Login to your account",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Login",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Login to your account",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "Login",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "Authentication",
    },
  ],
});
</script>

<template>
  <div class="container md:mx-auto lg:mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <LoginForm class="col-span-1" />
      <div class="col-span-1 hidden md:block">
        <LoginSwiper />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
