<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Verify Code",
  meta: [
    {
      name: "description",
      content: "Verify Code",
    },
    {
      name: "keywords",
      content: "Verify Code",
    },
    {
      property: "og:title",
      content: "Verify Code",
    },
    {
      property: "og:description",
      content: "Verify Code",
    },
  ],
});
</script>

<template>
  <div class="container md:mx-auto lg:mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <ResetPasswordVerifyCodeForm class="col-span-1" />
      <div class="col-span-1 hidden md:block">
        <LoginSwiper />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
