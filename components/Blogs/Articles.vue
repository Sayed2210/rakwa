<script setup lang="ts"></script>

<template>
  <section class="blogs">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="col-span-1 md:col-span-2 lg:col-span-3">
        <div class="flex justify-between items-center">
          <h1 class="title">{{ $t("All_Articles") }}</h1>
          <div class="input-search">
            <div class="search-icon">
              <IconsSearch />
            </div>
            <input type="text" placeholder="Search by title" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-span-1" v-for="i in 6" :key="i">
            <BlogsBlogCard />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="filter">
          <div class="filter-icon">
            <IconsFilter />
          </div>
          <div class="filter-title">{{ $t("Filter") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
