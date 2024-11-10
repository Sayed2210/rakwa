<script setup lang="ts">
const renderBullet = (index: number, className: string): string => {
  return `<span class="${className} my-bullet"></span>`;
};
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :navigation="false"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
      el: '.swiper-pagination',
      bulletClass: 'my-bullet',
      bulletActiveClass: 'my-bullet-active',
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="[SwiperAutoplay, SwiperPagination]"
    class="mySwiper swiper-login"
  >
    <!--    <SwiperSlide>-->
    <!--      <div class="slide">-->
    <!--        <img-->
    <!--          src="~/assets/images/welcome-login.png"-->
    <!--          alt="login swiper image"-->
    <!--          class="slide-img"-->
    <!--        />-->
    <!--      </div>-->
    <!--    </SwiperSlide>-->
    <SwiperSlide>
      <div class="slide">
        <img
          src="~/assets/images/login.png"
          alt="login swiper image"
          class="slide-img"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <img
          src="~/assets/images/login-2.png"
          alt="login swiper image"
          class="slide-img"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
