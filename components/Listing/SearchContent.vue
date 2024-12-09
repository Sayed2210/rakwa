<script setup lang="ts">
const props = defineProps<{ showMap?: boolean }>();

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
          :class="[
            'col-span-1',
            showMap ? 'md:col-span-1' : 'md:col-span-2 lg:col-span-3',
          ]"
        >
          <ListingNoListingSearch />
        </div>
        <div class="col-span-1" v-for="i in 12" :key="i">
          <ListingListCard :showMap="showMap" />
        </div>
      </div>
      <div class="col-span-1 md:col-span-2" v-if="showMap">
        <ListingMap />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
