<script setup lang="ts">
useSeoMeta({
  title: "Contact Us",
  ogTitle: "Contact Us",
  description: "Contact Us",
  ogDescription: "Contact Us",
});

useHead({
  link: [
    { rel: "canonical", href: "https://example.com" },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
  ],
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Contact Us",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "Contact Us",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Contact Us",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Contact Us",
    },
  ],
});
</script>

<template>
  <section class="contact-us">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb title="Contact Us" />
      <ContactUsReachOut />
      <ContactUsContactForm />
    </div>
  </section>
</template>

<style scoped></style>
