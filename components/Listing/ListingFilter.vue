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
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const withDistance = ref<boolean>(false);
const withPrice = ref<boolean>(false);
const filteredItems = computed(() => {
  return appliedFilters.value.map((item) => {
    if (item.key === 'status') {
      return item.value === 1 ? $t('Open') : $t('Closed');
    }
    if (item.key === 'rate') {
      return `${item.value} ${$t('stars')}`; // Replace with appropriate translation
    }
    if (item.key === 'country') {
      return countries.value.find((country) => country.id === item.value)?.title || item.value;
    }
    if (item.key === 'city') {
      return cities.value.find((city) => city.id === item.value)?.title || item.value;
    }
    return `${item.value}`; // Fallback for other cases
  });
});


const distance = ref(3);
const priceRange = ref<[]>([200, 1600]);
const address = ref<string>("");

//applied filters
const appliedFilters = ref<{ key: string; value: string | number }[]>([]);

const filterListingParamsBuilder = FilterListingParamsBuilder.Instance;
const searchListingController = SearchListingController.getInstance();
searchListingController.setStrategy(new FilterStrategy());

const filterStatus = (e: Event) => {
  const status = (e.target as HTMLInputElement).value;
  appliedFilters.value.push({
    key: "status",
    value: parseInt(status) === 1 ? $t("Open") : $t("Closed"),
  });
  filterListingParamsBuilder.setStatus(parseInt(status))
  searchListingController.executeStrategy(filterListingParamsBuilder.build());
};

const filterCountry = async (e: Event) => {
  const countryId = (e.target as HTMLInputElement).value;
  filterListingParamsBuilder.setCountryId(parseInt(countryId));
  await fetchCities(parseInt(countryId));
  appliedFilters.value.push({
    key: "country",
    value:
      countries.value.find((c) => c.id === parseInt(countryId))?.title || "",
  });
  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};

const filterCity = async (e: Event) => {
  const cityId = (e.target as HTMLInputElement).value;
  filterListingParamsBuilder.setCityId(parseInt(cityId));
  appliedFilters.value.push({
    key: "city",
    value: cities.value.find((c) => c.id === parseInt(cityId))?.title || "",
  });
  filterListingParamsBuilder.setCityId(parseInt(cityId));


  await searchListingController.executeStrategy(
    filterListingParamsBuilder.build(),
  );
};

const filterRate = (e: Event) => {
  const rate = (e.target as HTMLInputElement).value;
  appliedFilters.value.push({ key: "rate", value: rate });
  filterListingParamsBuilder.setRate(parseInt(rate));
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

const clearFilters = () => {
  appliedFilters.value = [];
  // Reset other filters if necessary
  distance.value = 3;
  priceRange.value = [200, 1600];
  address.value = "";

  // Execute strategy with default state
  searchListingController.executeStrategy(filterListingParamsBuilder.build());
};

const removeFilter = (index: number) => {
  appliedFilters.value.splice(index, 1);

  // Rebuild filters after removal
  filterListingParamsBuilder.reset();

  appliedFilters.value.forEach(filter => {
    switch (filter.key) {
      case 'country':
        console.log(filter.value.toString())
        filterListingParamsBuilder.setCountryId(parseInt(filter.value.toString()));
        break;
      case 'city':
        filterListingParamsBuilder.setCityId(parseInt(filter.value.toString()));
        break;
      case 'rate':
        filterListingParamsBuilder.setRate(filter.value);
        break;
      case 'status':
        filterListingParamsBuilder.setStatus(filter.value === $t('Open') ? 1 : 2);
        break;
    }
  });

  // Execute the strategy with the updated filter params
  searchListingController.executeStrategy(filterListingParamsBuilder.build());
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
        <span
          class="filtered-item"
          v-for="(filter, index) in filteredItems"
          :key="index"
        >
          {{ filter }}
          <button
            class="remove"
            type="button"
            @click="removeFilter(index)"
            aria-label="remove"
          >
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
        <div class="filter-item">
          <input
            type="radio"
            @change="filterStatus"
            id="open"
            name="status"
            class="hidden"
            :value="1"
          />
          <label for="open" class="filter-item"> {{ $t("Open") }} </label>
        </div>
        <div class="filter-item">
          <input
            type="radio"
            @change="filterStatus"
            id="close"
            name="status"
            class="hidden"
            :value="2"
          />
          <label for="close" class="filter-item"> {{ $t("Closed") }} </label>
        </div>
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
          <input
            type="radio"
            :id="`country${country?.id}`"
            name="country"
            class="hidden"
            @change="filterCountry"
            :value="country.id"
          />
          <label :for="`country${country?.id}`">
            {{ country?.title }}
          </label>
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
          <input
            type="radio"
            :id="`city${city?.id}`"
            name="city"
            @change="filterCity"
            :value="city?.id"
            class="hidden"
          />
          <label :for="`city${city?.id}`">
            {{ city?.title }}
          </label>
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
        <span class="filter-item">
          <input
            type="radio"
            id="1"
            name="rate"
            class="hidden"
            :value="1"
            @change="filterRate"
          />
          <label for="1"> 1 <IconsStar /> </label>
        </span>
        <span class="filter-item">
          <input
            type="radio"
            @change="filterRate"
            id="2"
            name="rate"
            class="hidden"
            :value="2"
          />
          <label for="2"> 2 <IconsStar /> </label>
        </span>
        <span class="filter-item">
          <input
            type="radio"
            @change="filterRate"
            id="3"
            name="rate"
            class="hidden"
            :value="3"
          />
          <label for="3"> 3 <IconsStar /> </label>
        </span>
        <span class="filter-item">
          <input
            type="radio"
            @change="filterRate"
            id="4"
            name="rate"
            class="hidden"
            :value="4"
          />
          <label for="4"> 4 <IconsStar /> </label>
        </span>
        <span class="filter-item">
          <input
            type="radio"
            @change="filterRate"
            id="5"
            name="rate"
            class="hidden"
            :value="5"
          />
          <label for="5"> 5 <IconsStar /> </label>
        </span>
      </div>
    </div>
    <div class="range-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("distance_radius") }}</h3>
      </div>
      <div class="input-wrapper-switch flex justify-end">
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

      <div class="input-wrapper-switch flex justify-end">
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
