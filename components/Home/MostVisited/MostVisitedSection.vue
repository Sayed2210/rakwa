<script setup lang="ts"></script>

<template>
  <section class="most-visited-section">
    <h2 class="main-section-title">
      {{ $t("most_visited_places") }}
    </h2>
    <h4 class="sub-section-title">
      {{ $t("The_Worlds_Top_Attractions") }}
    </h4>
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div class="col-span-1" v-for="i in 6" :key="i">
          <HomeMostVisitedPlaceCard />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
