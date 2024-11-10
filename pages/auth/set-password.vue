<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Set Password",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Set Password",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "Set Password",
    },{
      hid: "keywords",
      name: "keywords",
      content: "Reset Password",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "Set Password",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Set Password",
    },
  ]

})
</script>

<template>
  <section class="container md:mx-auto lg:mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <ResetPasswordSetPasswordForm class="col-span-1" />
      <div class="col-span-1 hidden md:block">
        <NuxtImg
          src="/login-2.png"
          alt="reset password image"
          format="webp"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
