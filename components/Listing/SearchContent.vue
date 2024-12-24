<script setup lang="ts">
import SearchBuilder from "~/features/ListingFeature/Presentation/Builder/search_builder";
import SearchListingController from "~/features/ListingFeature/Presentation/controllers/search_listing_controller";
import { SearchStrategy } from "~/features/ListingFeature/Presentation/strategies/search_strategy";

const props = defineProps<{ showMap?: boolean }>();

const searchBuilder = SearchBuilder.Instance;

const searchListingController = SearchListingController.getInstance();
searchListingController.setStrategy(new SearchStrategy());

const state = ref(searchListingController.state.value);

const searchListing = async () => {
  try {
    const params = searchBuilder.build();
    await searchListingController.executeStrategy(params);
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await searchListing();
});

watch(
  () => searchListingController.state.value,
  (newValue) => {
    state.value = newValue;
  },
  { deep: true },
);

// const map = ref(props.showMap);
</script>

<template>
  <section class="listing-search-content">
    <ListingSearchBar />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="col-span-1">
        <ListingFilter />
      </div>
      <div
        :class="[
          'col-span-1',
          showMap
            ? 'md:col-span-1'
            : 'md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        ]"
      >
        <div
          v-if="state.data?.listings?.length === 0"
          :class="[
            'col-span-1',
            showMap ? 'md:col-span-1' : 'md:col-span-2 lg:col-span-3',
          ]"
        >
          <ListingNoListingSearch />
        </div>
        <GlobalDataStatues
          class="col-span-1 md:col-span-2 lg:col-span-3"
          :status="state"
        >
          <template #loader>
            <ListingLoadingCard class="col-span-1" v-for="i in 3" :key="i" />
          </template>
          <template #initial>
            <ListingLoadingCard class="col-span-1" v-for="i in 3" :key="i" />
          </template>
          <template #empty>
            <ListingNoListing />
          </template>
          <template #failed>
            <ListingNoListing />
          </template>
          <template #success>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              :class="[
                'col-span-1',
                showMap ? 'md:col-span-1' : 'md:col-span-2 lg:col-span-3',
              ]"
              v-if="state.data?.listings?.length > 0"
            >
              <ListingListCard
                v-for="listing in state.data?.listings"
                :key="listing.id"
                class="col-span-1"
                :listing="listing"
                :showMap="showMap"
              />
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              :class="[
                'col-span-1',
                showMap ? 'md:col-span-1' : 'md:col-span-2 lg:col-span-3',
              ]"
              v-else
            >
              <ListingListCard
                v-for="listing in state.data?.similarListings"
                :key="listing.id"
                class="col-span-1"
                :listing="listing"
                :showMap="showMap"
              />
            </div>
          </template>
        </GlobalDataStatues>
      </div>
      <div class="col-span-1 md:col-span-2" v-if="showMap">
        <ListingMap />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
