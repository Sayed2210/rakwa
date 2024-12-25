<script setup lang="ts">
import type ReviewModel from "~/features/ListingFeature/Data/models/review_model";

const props = defineProps<{ reviews: ReviewModel[]; myReview: ReviewModel }>();
</script>

<template>
  <section class="rate-wrapper" >
    <div class="my-rate" v-if="myReview?.id">
      <div class="rate-content">
        <div class="flex">
          <div class="client-img">
            <NuxtImg
              :src="myRate.clientImage"
              :alt="myRate.clientName"
              class="client-opinion-card-img"
              format="webp"
            />
          </div>
          <div>
            <h4 class="user-name">{{ myReview.clientName }}</h4>
            <div class="rate-count flex gap-2">
              <GlobalRate :rateCount="4" />
              <span class="rate-date"> {{ myReview.createdAt }} </span>
            </div>
          </div>
        </div>

        <p class="rate-text">
          {{ myReview.comment }}
        </p>
      </div>
    </div>

    <div class="rates" v-for="rate in reviews" :key="rate.id">
      <div class="flex">
        <div class="client-img">
          <NuxtImg
            :src="myRate.clientImage"
            :alt="myRate.clientName"
            class="client-opinion-card-img"
            format="webp"
          />
        </div>
        <div>
          <h4 class="user-name">{{ rate.clientName }}</h4>
          <div class="rate-count flex gap-2">
            <GlobalRate :rateCount="4" />
            <span class="rate-date"> {{ rate.createdAt }} </span>
          </div>
        </div>
      </div>
      <div class="rate-content">
        <p class="rate-text">
          {{ rate.comment }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
