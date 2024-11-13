<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="wave">
      <NuxtImg
        src="/Wave.png"
        alt="wave"
        format="webp"
        class="wave-img w-full"
      />
    </div>
    <div class="company-info container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="description col-span-1">
          <NuxtImg
            src="/logo.png"
            alt="logo"
            format="webp"
            class="wave-img"
          />
          <p>
            {{
              $t(
                "Rakwa_USA_is_your_premier_directory_for_exploring_and_connecting_with_the_finest_Arab_American_businesses_across_the_United_States_celebrating_our_rich_culture_and_community",
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
