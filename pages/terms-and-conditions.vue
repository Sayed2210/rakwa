<script setup lang="ts">
import {BASE_URL} from "~/base/persention/utils/constant";
import type TermsAndCondition from "~/types/terms_and_condition";

useSeoMeta({
  title: "Terms and Conditions",
  ogTitle: "Terms and Conditions",
  description: "Terms and Conditions",
  ogDescription: "Terms and Conditions",
});

const { data: termsAndConditions } = await useAsyncData("terms-and-conditions", async () => {
  const response = await $fetch<{ data: TermsAndCondition; message: string; status: number }>(
    `${BASE_URL}/terms_of_condition`,
  );
  return response.data;

})
</script>

<template>
  <section class="terms-and-conditions">
    <div class="container mx-auto px-8">
      <GlobalBreadcrumb title="Terms and Conditions" />
      <TermsContent :termsAndConditions="termsAndConditions" />
    </div>
  </section>
</template>

<style scoped></style>
