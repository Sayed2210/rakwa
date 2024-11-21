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
      <ListingBasicInformation
        @update:basicInformation="handleBasicInformation"
      />
    </div>
    <h4 class="listing-section-title">{{ $t("location") }}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ListingLocation />
    </div>
    <h4 class="listing-section-title">{{ $t("Attachments") }}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <ListingGallary />
      </div>
      <ListingDetails />
    </div>
    <div class="listing-section-title">
      <h4>{{ $t("opening_price") }}</h4>
      <div class="input-wrapper-switch">
        <div class="switch">
          <input type="checkbox" id="opening_price" />
          <label for="opening_price" class="slider"></label>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ListingOpeningPrice />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <button class="primary-button-2" aria-label="submit">
          {{ $t("add") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
