<script setup lang="ts"></script>

<template>
  <section class="our-vision">
    <h4 class="main-title">
      {{ $t("The_Heart_Behind") }} <span class="rakwa">Rakwa</span>
    </h4>
    <p class="text-center">
      {{ $t("Driven_by_your_needs_inspired_by_your_trust") }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div class="our-vision-card">
        <div class="icon">
          <IconsOurGoal />
        </div>
        <h5 class="our-vision-card-title">{{ $t("Our_Goal") }}</h5>
        <p>
          Rakwa was born out of a vision to simplify access to Arab businesses
          and services. Whether you’re a resident or a visitor in Turkey, or
          part of the vibrant Arab American community in the USA, Rakwa is
          designed to bring you closer to the services you need and love.
        </p>
      </div>
      <div class="our-vision-card">
        <div class="icon">
          <IconsOurVision />
        </div>
        <h5 class="our-vision-card-title">{{ $t("Our_vision") }}</h5>
        <p>
          Rakwa was born out of a vision to simplify access to Arab businesses
          and services. Whether you’re a resident or a visitor in Turkey, or
          part of the vibrant Arab American community in the USA, Rakwa is
          designed to bring you closer to the services you need and love.
        </p>
      </div>
      <div class="our-vision-card">
        <div class="icon">
          <IconsOurMission />
        </div>
        <h5 class="our-vision-card-title">{{ $t("Our_Mission") }}</h5>
        <p>
          Rakwa was born out of a vision to simplify access to Arab businesses
          and services. Whether you’re a resident or a visitor in Turkey, or
          part of the vibrant Arab American community in the USA, Rakwa is
          designed to bring you closer to the services you need and love.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
