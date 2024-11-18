<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import Select from "primevue/select";
import BasicInformation from "~/components/Listing/BasicInformation.vue";

const image = ref<File | null>(null);

const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const handleImage = (file: File | null) => {
  image.value = file;
};
</script>

<template>
  <div class="listing-section">
    <h2 class="listing-section-title">
      {{ $t("basic_information") }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <GlobalUploadImage @update:image="handleImage" />
      </div>
      <BasicInformation />
    </div>
  </div>
</template>

<style scoped></style>
