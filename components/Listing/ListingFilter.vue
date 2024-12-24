<script setup lang="ts">
import Slider from "primevue/slider";
import FilterListingParamsBuilder from "~/features/ListingFeature/Presentation/Builder/filter_listing_builder";
import FetchCountriesParams from "~/features/FetchCountriesFeature/Core/Params/fetch_countries_params";
import FetchCountriesController from "~/features/FetchCountriesFeature/presentation/controllers/fetch_countries_controller";
import type CountryModel from "~/features/FetchCountriesFeature/Data/models/country_model";
import debouncing from "~/base/persention/utils/debounce";
import FetchCitiesController from "~/features/FetchCitiesFeature/presentation/controllers/fetch_cities_controller";
import type CityModel from "~/features/FetchCitiesFeature/Data/models/city_model";
import FetchCitiesParams from "~/features/FetchCitiesFeature/Core/Params/fetch_cities_params";
import SearchListingController from "~/features/ListingFeature/Presentation/controllers/search_listing_controller";
import { FilterStrategy } from "~/features/ListingFeature/Presentation/strategies/filter_strategy";

const withDistance = ref<boolean>(false);
const withPrice = ref<boolean>(false);

const distance = ref(3);
const priceRange = ref<[]>([200, 1600]);
const address = ref<string>("");

const filterListingParamsBuilder = FilterListingParamsBuilder.Instance;
const searchListingController = SearchListingController.getInstance();
searchListingController.setStrategy(new FilterStrategy());

const filterStatus = (e: Event) => {
  const status = (e.target as HTMLInputElement).value;
  filterListingParamsBuilder.setStatus(parseInt(status));
  searchListingController.executeStrategy(filterListingParamsBuilder.build());
};

const filterCountry = async (e: Event) => {
  const country = (e.target as HTMLInputElement).value;
  filterListingParamsBuilder.setCountryId(parseInt(country));
  fetchCities(parseInt(country));
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};
const filterCity = async (e: Event) => {
  const country = (e.target as HTMLInputElement).value;
  filterListingParamsBuilder.setCityId(parseInt(country));
  // await fetchCities(country);
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};

const filterRate = (rate: number) => {
  filterListingParamsBuilder.setRate(rate);
  searchListingController.executeStrategy(filterListingParamsBuilder.build());
};
const filterDistance = async () => {
  filterListingParamsBuilder.setDistance(distance.value);
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};
const filterDistanceDebounced = debouncing(filterDistance);

const filterDistanceOn = async () => {
  await filterDistanceDebounced.debouncedFunction();
};
const filterPriceRange = async () => {
  console.log(priceRange.value);

  filterListingParamsBuilder.setPriceRange(priceRange.value);
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};
const filterPriceRangeDebounced = debouncing(filterPriceRange);

const filterPriceRangeOn = async () => {
  await filterPriceRangeDebounced.debouncedFunction();
};
const filterAddress = async () => {
  // console.log(priceRange.value);
  filterListingParamsBuilder.setAddress(address.value);
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};
const filterAddressDebounced = debouncing(filterAddress);

const filterAddressOn = async () => {
  await filterAddressDebounced.debouncedFunction();
};

//fetch countries
const countries = ref<CountryModel[]>([]);
const fetchCountriesController = FetchCountriesController.getInstance();

const fetchCountries = async () => {
  countries.value = (
    await fetchCountriesController.fetchCountries(
      new FetchCountriesParams(1, 10),
    )
  ).value.data!;
};

onMounted(async () => {
  await fetchCountries();
});

// fetch cities
const cities = ref<CityModel[]>([]);
const fetchCitiesController = FetchCitiesController.getInstance();

const fetchCities = async (id: number) => {
  cities.value = (
    await fetchCitiesController.fetchCities(new FetchCitiesParams(id, 1, 10))
  ).value.data!;
};
</script>

<template>
  <aside class="listing-filter">
    <div class="flex gap-2 items-center">
      <IconsFilterSetting />
      <h2 class="filter-title">{{ $t("Filters") }}</h2>
    </div>
    <div class="applied-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Applied_Filters") }}</h3>
        <button type="button" class="clear-filter">
          {{ $t("Clear_Filters") }}
        </button>
      </div>
      <div class="filtered-items">
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
      </div>
    </div>
    <div class="applied-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Current_status") }}</h3>
      </div>
      <div class="filter-items">
        <label for="open" class="filter-item"> {{ $t("Open") }} </label>
        <input
          type="checkbox"
          @change="filterStatus"
          id="open"
          name="open"
          class="hidden"
          :value="1"
        />
        <label for="close" class="filter-item"> {{ $t("Close") }}</label>
        <input
          type="checkbox"
          id="close"
          name="close"
          class="hidden"
          :value="0"
        />
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("state") }}</h3>
      </div>
      <div class="filter-items">
        <span
          class="filter-item"
          v-for="country in countries"
          :key="country?.id"
        >
          <label :for="`country${country?.id}`">
            {{ country?.title }}
          </label>
          <input
            type="checkbox"
            :id="`country${country?.id}`"
            :name="`country${country?.id}`"
            class="hidden"
            @change="filterCountry"
            :value="country?.id"
          />
        </span>
      </div>
      <!--      <button type="button" class="clear-filter mt-4">-->
      <!--        {{ $t("show_all_states") }}-->
      <!--        <IconsShowAll />-->
      <!--      </button>-->
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("city") }}</h3>
      </div>
      <div class="filter-items">
        <span class="filter-item" v-for="city in cities" :key="city?.id">
          <label :for="`country${city?.id}`">
            {{ city?.title }}
          </label>
          <input
            type="checkbox"
            :id="`country${city?.id}`"
            :name="`country${city?.id}`"
            class="hidden"
            @change="filterCity"
            :value="city?.id"
          />
        </span>
      </div>
      <!--      <button type="button" class="clear-filter mt-4">-->
      <!--        {{ $t("show_all_states") }}-->
      <!--        <IconsShowAll />-->
      <!--      </button>-->
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Rating") }}</h3>
      </div>
      <div class="filter-items">
        <span class="filter-item" @click="filterRate(1)">
          1
          <IconsStar />
        </span>
        <span class="filter-item" @click="filterRate(2)">
          2 <IconsStar />
        </span>
        <span class="filter-item" @click="filterRate(3)">
          3 <IconsStar />
        </span>
        <span class="filter-item" @click="filterRate(4)">
          4 <IconsStar />
        </span>
        <span class="filter-item" @click="filterRate(5)">
          5 <IconsStar />
        </span>
      </div>
    </div>
    <div class="range-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("distance_radius") }}</h3>
      </div>

      <div class="input-wrapper-switch">
        <div class="switch">
          <input type="checkbox" v-model="withDistance" id="distance" />
          <label for="distance" class="slider"></label>
        </div>
      </div>
      <div class="range">
        <span>1 Km</span>
        <span>15 Km</span>
      </div>
      <div class="range-slider">
        <Slider
          v-model="distance"
          :disabled="!withDistance"
          @update:modelValue="filterDistanceOn"
          :max="15"
        />
      </div>
    </div>
    <div class="range-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("price_range") }}</h3>
      </div>

      <div class="input-wrapper-switch">
        <div class="switch">
          <input type="checkbox" id="price_range" v-model="withPrice" />
          <label for="price_range" class="slider"></label>
        </div>
      </div>
      <div class="range">
        <span>100 $</span>
        <span>2000 $</span>
      </div>
      <div class="range-slider">
        <Slider
          v-model="priceRange"
          @update:modelValue="filterPriceRangeOn"
          range
          :disabled="!withPrice"
          :min="100"
          :max="2000"
        />
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("On Map") }}</h3>
      </div>
      <div class="filter-items">
        <div class="input-wrapper">
          <label class="input-label" for="category">
            {{ $t("address") }}
          </label>
          <input
            type="text"
            class="input"
            id="category"
            @keyup="filterAddressOn"
            v-model="address"
            :placeholder="$t('enter_address')"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
