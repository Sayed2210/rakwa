<script setup lang="ts">
import ShowListingDetailsController from "~/features/ListingFeature/Presentation/controllers/show_listing_details_controller";
import ShowListingDetailsParams from "~/features/ListingFeature/Core/Params/show_listing_details_params";

const id = useRoute().params.id;

const showListingDetailsController = ShowListingDetailsController.getInstance();
const state = ref(showListingDetailsController.state.value);
const fetchListingDetails = async () => {
  await showListingDetailsController.showListingDetails(
    new ShowListingDetailsParams(parseInt(id)),
  );
};

onMounted(async () => {
  await fetchListingDetails();
});

watch(
  () => showListingDetailsController.state.value,
  (newVal, oldVal) => {
    if (newVal) {
      console.log(newVal);
      state.value = newVal;
    }
  },
  {
    deep: true,
  },
);
</script>

<template>
  <div class="listing-details">
    <GlobalDataStatues :status="state">
      <template #empty>
        <ListingNoListing />
      </template>
      <template #failed>
        <ListingNoListing />
      </template>
      <template #loader>
        <ListingLoadingCard />
      </template>
      <template #initial> <ListingLoadingCard /> </template>
      <template #success>
        <ListingDetailsBanner
          :basicInformation="state.data?.BasicInformation!"
          :address="state.data?.location.address!"
        />
        <ListingDetailsContent :listing="state.data!" />
      </template>
    </GlobalDataStatues>
  </div>
</template>

<style scoped></style>
