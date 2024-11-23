<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Listings",
  ogTitle: "Listings",
  description: "Listings",
  ogDescription: "Listings",
});

const toggle = ref<string>("active");
</script>

<template>
  <div class="tabs">
    <button
      type="button"
      :class="[toggle === 'active' ? 'active' : '', 'tab']"
      @click="toggle = 'active'"
    >
      {{ $t("active") }}
    </button>
    <button
      type="button"
      :class="[toggle === 'pending' ? 'active' : '', 'tab']"
      @click="toggle = 'pending'"
    >
      {{ $t("pending") }}
    </button>
    <button
      type="button"
      :class="[toggle === '' ? 'active' : '', 'tab']"
      @click="toggle = ''"
    >
      {{ $t("expired") }}
    </button>
  </div>
  <div class="flex justify-end mt-4">
    <div class="input-search">
      <div class="search-icon">
        <IconsSearch />
      </div>
      <input type="text" placeholder="Search by title" />
    </div>
  </div>

  <div class="active-listing">
<!--    <ListingActiveCard />-->
<!--    <ListingPendingCard/>-->
    <ListingExpiredCard/>
  </div>
</template>

<style scoped></style>
