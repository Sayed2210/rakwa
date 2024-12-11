<script setup lang="ts">
const images = [
  "/ehud-neuhaus-dP1To-YckZI-unsplash.jpg",
  "/ehud-neuhaus-TmJl4_5cSGs-unsplash.jpg",
  "/ehud-neuhaus-zRRlQ2JEK-M-unsplash.jpg",
  "/hans-vivek-LcJZ1J9rF10-unsplash.jpg",
  "/40171.png",
];

const hoveredImage = ref<string | null>(null);
</script>

<template>
  <div class="img-gallery">
    <div
      :class="['img', image === images[images.length - 1] ? 'last-img' : '']"
      v-for="image in images"
    >
      <NuxtImg
        alt="listing image"
        :src="image"
        :class="[
          image === images[0] && !hoveredImage ? 'main-img' : '',
          { 'main-img': image === hoveredImage },
        ]"
        format="webp"
        loading="lazy"
        @mouseover="hoveredImage = image"
        @mouseleave="hoveredImage = null"
      />
      <span class="gallery-icon" v-if="image === images[images.length - 1]">
        <IconsGallery />
      </span>
    </div>
  </div>
</template>

<style scoped></style>
