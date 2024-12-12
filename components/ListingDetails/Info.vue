<script setup lang="ts"></script>

<template>
  <section class="listing-info">
    <div class="listing-description">
      <h3>{{ $t("description") }}</h3>
      <p>
        Experience the authentic taste of the Mediterranean at Cedar Valley
        Mediterranean Grill. Known for our fresh ingredients and traditional
        recipes, we serve a variety of dishes, including succulent shawarma,
        creamy hummus, and perfectly grilled kebabs. Our cozy, family-friendly
        atmosphere is perfect for any occasion, whether you're enjoying a casual
        lunch or celebrating a special event. We also offer vegetarian and halal
        options to cater to diverse preferences.
      </p>
    </div>
    <div class="listing-categories">
      <h3>{{ $t("categories") }}</h3>
      <div class="categories">

      <span> restaurant </span>
      <span> restaurant </span>
      <span> Food </span>
      </div>
    </div>
    <div class="listing-service-type">
      <h3>{{ $t("service_type") }}</h3>
      <div class="type">
        <IconsTickCircle />
        {{ $t("delivery") }}
      </div>
    </div>
    <div class="listing-features">
      <h3>{{ $t("features") }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="feature">
          <IconsCheck />
          outdoor seating
        </div>
        <div class="feature">
          <IconsCheck />
          outdoor seating
        </div>
        <div class="feature">
          <IconsCheck />
          outdoor seating
        </div>
        <div class="feature">
          <IconsCheck />
          outdoor seating
        </div>
      </div>

    </div>
    <div class="listing-social-links">
      <h3>{{ $t("social_links") }}</h3>
      <div class="flex items-center gap-4">

      <div class="social-link">
        <IconsFacebook />
      </div>
      <div class="social-link">
        <IconsInstagram />
      </div>
      <div class="social-link">
        <IconsTwitter />
      </div>
      <div class="social-link">
        <IconsYoutube />
      </div>
      <div class="social-link">
        <IconsLinkedin />
      </div>
      <div class="social-link">
        <IconsWhatsApp />
      </div>
      </div>

      <div class="listing-location">
        <h3>{{ $t("location") }}</h3>
        <p class="location">1 شارع سعد زغلول، Al Inshaa WA Al Munirah, El Sayeda Zeinab, Cairo Governorate </p>
      </div>

    </div>
  </section>
</template>

<style scoped></style>