<script setup lang="ts">
import FetchBookmarkController from "~/features/FetchBookmarkFeature/presentation/controllers/fetch_listings_controller";
import FetchBookmarkParams from "~/features/FetchBookmarkFeature/Core/Params/fetch_bookmarks_params";

definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Bookmark",
  ogTitle: "Bookmark",
  description: "Bookmark",
  ogDescription: "Bookmark",
});

const fetchBookmarkController = FetchBookmarkController.getInstance();

const state = ref(fetchBookmarkController.state.value);

const fetchBookmarks = async () => {
  await fetchBookmarkController.fetchBookmark(new FetchBookmarkParams(1, 10));
};

onMounted(async () => {
  await fetchBookmarks();
});

watch(
  () => fetchBookmarkController.state.value,
  (newVal, oldVal) => {
    state.value = newVal;
  },
  {
    deep: true,
  },
);
</script>

<template>
  <section class="bookmarks-section">
    <GlobalDataStatues :status="state">
      <template #empty>
        <BookmarksNoBookmark />
      </template>
      <template #failed> <<BookmarksNoBookmark /> </template>
      <template #loader>
        <div class="flex flex-col gap-4">
          <ListingLoadingCard v-for="i in 3" :key="i" />
        </div>
      </template>
      <template #initial> <ListingLoadingCard /> </template
      ><template #success>
        <div class="flex flex-col gap-4">
          <div v-for="(listing, index) in state.data" :key="index">
            <BookmarksBookmarkCard :bookmark="listing" />
          </div>
        </div>
      </template>
    </GlobalDataStatues>

    <!--    <BookmarksBookmarkCard />-->
  </section>
</template>

<style scoped></style>
