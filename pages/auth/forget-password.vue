<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Forget Password",
  meta: [
    {
      name: "description",
      content: "Forget Password",
    },
    {
      name: "keywords",
      content: "Forget Password",
    },
    {
      name: "og:title",
      content: "Forget Password",
    },
    {
      name: "og:description",
      content: "Forget Password",
    },
  ],
  link: [{ rel: "canonical", href: "https://example.com" }],
});

useSeoMeta({
  title: "Forget Password",
  description: "Forget Password",
  ogTitle: "Forget Password",
  ogDescription: "Forget Password",
})

</script>

<template>
  <div class="container md:mx-auto lg:mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <ResetPasswordForgetPasswordForm class="col-span-1" />
      <div class="col-span-1 hidden md:block">
        <LoginSwiper />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
