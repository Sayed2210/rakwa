<script setup lang="ts">
import Select from "primevue/select";
import OpeningHoursParams from "~/features/ListingFeature/Core/Params/opening_hours";
import TimeParams from "~/features/ListingFeature/Core/Params/time_params";
import DaysParams from "~/features/ListingFeature/Core/Params/days_params";

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
]);

const days = ref([
  {
    id: 1,
    day: "monday",
  },
  {
    id: 2,
    day: "tuesday",
  },
  {
    id: 3,
    day: "wednesday",
  },
  {
    id: 4,
    day: "thursday",
  },
  {
    id: 5,
    day: "friday",
  },
  {
    id: 6,
    day: "saturday",
  },
]);
const openingHours = ref<OpeningHoursParams[]>([]);
const createOpeningHours = () => {
  openingHours.value = days.value.map((day) => {
    return new OpeningHoursParams(day.day, day.id, [new TimeParams("", "")]);
  });
};

createOpeningHours();

const emit = defineEmits<{
  (e: "update:openingHours", openingHours: OpeningHoursParams): void;
}>();

watch(
  () => openingHours.value,
  () => {
    // console.log(basicInformation.value);
    emit("update:openingHours", openingHours.value);
  },
  { deep: true },
);

const clearTime = (day: DaysParams) => {
  day.time = [new TimeParams("", "")];
};

const addNewTime = (day: DaysParams) => {
  day.time.push(new TimeParams("", ""));
};

const minsNewTime = (day: DaysParams, index: number) => {
  day.time.splice(index, 1);
};
</script>

<template>
  <div class="col-span-1 md:col-span-2">
    <div class="input-wrapper">
      <label class="input-label" for="time_zone">
        {{ $t("time_zone") }}
      </label>
      <Select
        v-model="openingHours.timeZone"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-2">
    <div class="day" v-for="day in openingHours">
      <div class="day-wrapper">
        <span class="day-of-week">
          {{ day.day }}
        </span>
        <button type="button" @click="clearTime(day)">
          {{ $t("clear_all") }}
        </button>
      </div>
      <div class="time-wrapper">
        <div class="time" v-for="(time, index) in day.time" :key="index">
          <div class="icon" @click="addNewTime(day)" v-if="index === 0">
            <IconsAddCircle />
          </div>
          <div class="icon" @click="minsNewTime(day, index)" v-else>
            <IconsMinsCircle />
          </div>
          <div class="input-wrapper">
            <label class="input-label" for="Opening time">
              {{ $t("Opening_time") }}
            </label>
            <DatePicker
              v-model="time.from"
              showIcon
              fluid
              iconDisplay="input"
              format="hh:mm"
              timeOnly
              :placeholder="$t('from')"
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>
          <div class="input-wrapper">
            <label class="input-label" for="closing time">
              {{ $t("closing_time") }}
            </label>
            <DatePicker
              v-model="time.to"
              showIcon
              fluid
              iconDisplay="input"
              timeOnly
              format="hh:mm"
              hour-format="24"
              :placeholder="$t('to')"
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
