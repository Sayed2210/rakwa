<script setup lang="ts"></script>

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
  </section>
</template>

<style scoped></style>
