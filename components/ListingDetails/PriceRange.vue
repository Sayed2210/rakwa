<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import type ListingDetailsModel from "~/features/ListingFeature/Data/models/listing_details_model";
import AddToBookmarkController from "~/features/ListingFeature/Presentation/controllers/add_to_bookmark_controller";
import AddToBookmarkParams from "~/features/ListingFeature/Core/Params/add_to_bookmark_params";

const props = defineProps<{ listing: ListingDetailsModel }>();

const listingDate = ref<ListingDetailsModel>(props.listing);
watch(
  () => props.listing,
  (newValue) => {
    if (newValue) {
      // console.log(newValue)

      listingDate.value = newValue;
    }
  },
  { deep: true },
);

const user = useUserStore();

const addToBookmarkController = AddToBookmarkController.getInstance();

const addToBookmark = async () => {
  await addToBookmarkController.addToBookmark(
    new AddToBookmarkParams(useRoute().params.id as string),
  );
};
</script>

<template>
  <section class="price-range">
    <div class="prices-range">
      <div class="start">{{ listingDate?.BasicInformation?.minPrice }} USD</div>
      <span class="icon">
        <IconsPriceRange />
      </span>
      <div class="end">{{ listingDate?.BasicInformation?.maxPrice }} USD</div>
    </div>
    <div class="opening-hours">
      <div class="opening-hours-title">
        <div class="flex gap-2 items-center">
          <span>
            <IconsClock />
          </span>
          <h3>{{ $t("opening_hours") }}</h3>
        </div>
        <div class="flex gap-2 items-center">
          <span v-if="listingDate?.BasicInformation?.status"
            >{{ $t("online") }}:</span
          >
          <IconsActive />
        </div>
      </div>
      <div class="available">
        <Accordion value="0">
          <AccordionPanel
            v-for="day in listingDate?.openingHours"
            :value="day.id"
            :key="day.id"
          >
            <AccordionHeader>
              <span class="day-title"> {{ day.day.title }} </span>
            </AccordionHeader>
            <AccordionContent>
              <div class="time">
                {{ day.openingHour.openingTime }} -
                {{ day.openingHour.closingTime }}
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
    <div class="no-verified" v-if="listing.claimStatus == 0">
      {{ $t("not_verified_claim_this_listing_now") }}
    </div>
    <div class="request-sent" v-if="listing.claimStatus == 1">
      <span>
        <IconsClockYellow />
      </span>
      {{ $t("claim_request_sent") }}
    </div>
    <div class="verified" v-if="listing.claimStatus == 2">
      <span>
        <IconsClockYellow />
      </span>
      {{ $t("verified") }}
    </div>
    <div class="user">
      <div class="user-avatar">
        <NuxtImg src="/user-photo.png" alt="user" format="webp" />
      </div>
      <div class="user-info">
        <div class="verified-type">owner</div>
        <div class="user-name">{{ listingDate?.owner?.name }}</div>
      </div>
    </div>
    <div class="contact">
      <div class="wrapper">
        <IconsEmail />
        <span>{{ listingDate?.owner?.email }}</span>
      </div>
      <div class="wrapper">
        <IconsPhone />
        <span>{{ listingDate?.owner?.phone }}</span>
      </div>
    </div>
    <div class="action">
      <button type="button" @click="addToBookmark" class="heart">
        <IconsHeart />
      </button>
      <ListingDetailsAddClaimDialog v-if="user.isAuth" />
      <NuxtLink to="/auth/login" class="secondary-button" v-else>
        {{ $t("login") }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
