<script setup lang="ts"></script>

<template>
  <section class="blogs">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="col-span-1 md:col-span-2 lg:col-span-3">
        <div class="col-span-1">
          <h1 class="title">
            {{ $t("Best LearnPress WordPress Theme Collection for 2023") }}
          </h1>
        </div>
        <div class="mt-4">
          <BlogsStatics />
        </div>
        <div class="mt-4">
          <div class="blog-img">
            <NuxtImg
              src="blog-details.png"
              alt="blog"
              class="blog-img"
              format="webp"
            />
          </div>
        </div>
        <div class="mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
            ultrices mi ut eleifend luctus ut. Id s ed faucibus bibendum augue
            id cras purus. At eget euismod cursus non. Molestie dignissim sed
            volutpat feugiat vel enim eu turpis imperdiet. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu
            duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat.
            Quisque nec non amet quis. Varius tellus justo odio parturient
            mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend
            luctus ut. Id sed faucibus bibendum augue id cras purus.
          </p>
        </div>
        <BlogsTags />
        <div class="social mt-4">
          <span>{{ $t("follow_us") }} :</span>
          <IconsFaceGray />
          <IconsPintrestGray />
          <IconsInstaGray />
          <IconsTwitterGray />
          <IconsYoutubeGray />
        </div>
        <div class="suggestions mt-4">
          <BlogsNextPreviousBlog />
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
