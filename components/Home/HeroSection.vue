<script setup lang="ts">
import SearchBuilder from "~/features/ListingFeature/Presentation/Builder/search_builder";

const search = ref<string>("");

const searchBuilder = SearchBuilder.Instance;
const searchListing = async () => {
  try {
    if (search.value) {
      searchBuilder.setKey(search.value);
      await navigateTo(`/listing`);
    }
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <section class="hero-section">
    <Swiper
      class="mySwiper hero-swiper"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :modules="[SwiperPagination, SwiperAutoplay]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide>
        <div class="slide">
          <NuxtImg
            src="/hero-image-3.png"
            alt="login swiper image"
            class="slide-img w-full"
            format="webp"
          />
          <div class="overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
          <NuxtImg
            src="/hero-image-3.png"
            alt="login swiper image"
            class="slide-img w-full"
            format="webp"
          />
          <div class="overlay"></div>
        </div>
      </SwiperSlide>
      <!--      <SwiperSlide>-->
      <!--        <div class="slide">-->
      <!--          <NuxtImg-->
      <!--            src="/hero-image-3.png"-->
      <!--            alt="login swiper image"-->
      <!--            class="slide-img w-full"-->
      <!--            format="webp"-->
      <!--          />-->
      <!--          <div class="overlay"></div>-->
      <!--        </div>-->
      <!--      </SwiperSlide>-->
    </Swiper>
    <div class="container info-container mx-auto px-8">
      <div class="info">
        <h1 class="website-main-title">
          {{ $t("Your_Guide_to_Living_Working_and_Thriving_Overseas") }}
        </h1>
        <p class="website-sub-title">
          {{
            $t(
              "Discover_expert_resources_tips_and_a_community_to_help_you_settle_and_succeed_anywhere_in_the_world",
            )
          }}
        </p>
        <form @submit.prevent="searchListing" class="website-input-search">
          <IconsAddress />
          <input
            type="text"
            :placeholder="$t('search')"
            class="search-input"
            aria-label="search"
            name="search"
            v-model="search"
          />
          <button class="primary-button" aria-label="search">
            {{ $t("search") }}
          </button>
        </form>
      </div>
    </div>
    <div class="hero-bg">
      <NuxtImg src="/hero-background.png" alt="hero-background" format="webp" />
    </div>
  </section>
</template>

<style scoped></style>
