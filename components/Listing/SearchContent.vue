<script setup lang="ts"></script>

<template>
  <section class="listing-search-content">
    <ListingSearchBar />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="col-span-1">
        <ListingFilter />
      </div>
      <div
        class="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div class="col-span-1 lg:col-span-3">
          <ListingNoListingSearch />
        </div>
        <div class="col-span-1" v-for="i in 12" :key="i">
          <ListingListCard />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
