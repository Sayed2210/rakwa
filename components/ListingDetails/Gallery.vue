<script setup lang="ts">
const images = [
  "/ehud-neuhaus-dP1To-YckZI-unsplash.jpg",
  "/ehud-neuhaus-TmJl4_5cSGs-unsplash.jpg",
  "/ehud-neuhaus-zRRlQ2JEK-M-unsplash.jpg",
  "/hans-vivek-LcJZ1J9rF10-unsplash.jpg",
  "/40171.png",
];
</script>

<template>
  <div class="img-gallery">
    <NuxtImg
      v-for="image in images"
      :src="image"
      alt="listing image"
      :class="[
        image === images[0] ? 'main-img' : '',
      ]"
      format="webp"

    />
  </div>
</template>

<style scoped></style>
