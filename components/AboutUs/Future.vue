<script setup lang="ts"></script>

<template>
  <div class="future">
    <h2 class="main-section-title">
      {{ $t("about_us") }}
    </h2>
    <h4 class="sub-section-title">
      {{ $t("together_we_are_shaping_a_promising_future") }}
    </h4>
    <Swiper
      class="mySwiper hero-swiper"
      :slides-per-view="5"
      :space-between="50"
      :pagination="{ clickable: true }"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :effect="'cards'"
      :grab-cursor="true"
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
    </Swiper>
  </div>
</template>

<style scoped></style>
