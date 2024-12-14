<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Register",
  meta: [
    {
      name: "description",
      content: "Register",
    },
    {
      name: "keywords",
      content: "Register",
    },
    {
      name: "og:title",
      content: "Register",
    },
    {
      name: "og:description",
      content: "Register",
    },
  ],
});
</script>

<template>
  <section class="container md:mx-auto lg:mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div class="col-span-1 hidden md:block">
        <LoginSwiper />
      </div>
      <RegisterForm class="col-span-1 " />
    </div>
  </section>
</template>

<style scoped></style>
