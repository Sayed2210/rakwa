<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>

<template>
  <section class="price-range">
    <div class="prices-range">
      <div class="start">
        200 USD
      </div>
      <span class="icon">
        <IconsPriceRange />
      </span>
      <div class="end">
        2000 USD
      </div>
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
          <span>{{ $t("online") }}:</span>
          <IconsActive />
        </div>
      </div>
      <div class="available">
        <Accordion value="0">
          <AccordionPanel value="0">
            <AccordionHeader>
            <span class="day-title">
                Monday
            </span>
            </AccordionHeader>
            <AccordionContent>
              <div class="time">10:20 am - 12:00 pm</div>
              <div class="time">10:20 am - 12:00 pm</div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="1">
            <AccordionHeader>
            <span class="day-title">
                Tuesday
            </span>
            </AccordionHeader>
            <AccordionContent>
              <div class="time">10:20 am - 12:00 pm</div>
              <div class="time">10:20 am - 12:00 pm</div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="2">
            <AccordionHeader>
            <span class="day-title">
                Wednesday
            </span>
            </AccordionHeader>
            <AccordionContent>
              <div class="time">10:20 am - 12:00 pm</div>
              <div class="time">10:20 am - 12:00 pm</div>
            </AccordionContent>
          </AccordionPanel>

        </Accordion>

      </div>
    </div>
    <div class="no-verified">
      {{ $t("not_verified_claim_this_listing_now") }}
    </div>
    <div class="request-sent">
      <span>
        <IconsClockYellow />
      </span>
      {{ $t("claim_request_sent") }}
    </div>
    <div class="user">
      <div class="user-avatar">
        <NuxtImg src="/user-photo.png" alt="user" format="webp" />
      </div>
      <div class="user-info">
        <div class="verified-type">owner</div>
        <div class="user-name">Elsayed Hassan</div>
      </div>
    </div>
    <div class="contact">
      <div class="wrapper">
        <IconsEmail />
        <span>example2023@gmail.com</span>
      </div>
      <div class="wrapper">
        <IconsPhone />
        <span>010132458974</span>
      </div>
    </div>
    <div class="action">
      <button type="button" class="heart">
        <IconsHeart />
      </button>
      <button type="button" class="primary-button-2">
        {{ $t("contact") }}
      </button>
    </div>
  </section>
</template>

<style scoped></style>
