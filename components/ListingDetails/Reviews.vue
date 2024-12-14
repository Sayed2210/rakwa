<script setup lang="ts"></script>

<template>
  <section class="listing-reviews">
    <h3>{{ $t("reviews") }}</h3>
    <div class="rating">
      <div class="add-rate">
        <h4>{{ $t("Add_your_rating") }}</h4>
        <ListingDetailsAddRatingDialog />
      </div>
      <div class="rates">
        <div class="rate-count" >
          <span class="rate-number">4.8</span>
          <GlobalRate :rateCount="4" />
          <span class="rate-description">
            {{$t("We_have")}} 232 {{ $t("reviews_from_our_customers")}}
          </span>
        </div>
        <div class="rate-img">
          <NuxtImg
            src="/listing-rate.png"
            alt="rate"
            format="webp"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped></style>
