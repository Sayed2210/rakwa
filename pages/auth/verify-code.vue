<script setup lang="ts">
definePageMeta({
  layout: "auth",
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
