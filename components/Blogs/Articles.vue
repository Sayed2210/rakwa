<script setup lang="ts">
import type Blog from "~/types/blog";

const props = defineProps<{ blogs: Blog[] | null }>();
</script>

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
          <div class="col-span-1" v-for="blog in blogs" :key="i">
            <BlogsBlogCard :blog="blog" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <BlogsCategories />
        <BlogsRecentPosts />
        <BlogsTags />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
