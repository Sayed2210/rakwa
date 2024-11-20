<script setup lang="ts">
import BasicInformation from "~/components/Listing/BasicInformation.vue";

const handleBasicInformation = (basicInformation: any) => {
  console.log(basicInformation);
};
</script>

<template>
  <div class="listing-section">
    <h4 class="listing-section-title">
      {{ $t("basic_information") }}
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BasicInformation @update:basicInformation="handleBasicInformation" />
    </div>
    <h4 class="listing-section-title">{{ $t("location") }}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ListingLocation />
    </div>
  </div>
</template>

<style scoped></style>
