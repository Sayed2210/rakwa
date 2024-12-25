<script setup lang="ts">
import { convertToBase64 } from "~/base/persention/utils/convert_to_base_64";
import AddRateParams from "~/features/AddRateFeature/Core/Params/add_rate_params";
import AddRateController from "~/features/AddRateFeature/presentation/controllers/add_rate_controller";

const visible = ref<boolean>(false);
const email = ref("");
const name = ref("");
const note = ref("");
const phone = ref("");
const images = ref<string[]>([]);
const route = useRoute();
const rate = ref(1);
const addRateController = AddRateController.getInstance();
const addRate = async () => {
  await addRateController.addRate(
    new AddRateParams(
      route.params.id as string,
      rate.value,
      note.value,
      images.value,
    ),
  );

  visible.value = false;
};

const handleImages = async (files: File[]) => {
  images.value = await convertToBase64(files) as string[];
};
</script>

<template>
  <button type="button" class="primary-button" @click="visible = true">
        <IconsAddRate />
    {{ $t("add_rate") }}
  </button>

  <Dialog
    class="add-rating-dialog"
    v-model:visible="visible"
    :header="$t('add_rate')"
    modal
  >
    <p>
      We are happy to share your opinion and evaluation with us and it will help
      us to improve the level of service for your comfort and provide a better
      level
    </p>
    <form @submit.prevent="addRate">
      <div class="rates">
        <div class="rate">
          <input type="radio" class="hidden" name="rate" v-model="rate" :value="1" id="1" />
          <label for="1">
            <span class="star-count">
              <IconsRedStar v-for="i in 1" :key="i" />
            </span>
            {{ $t("Poor")}}
          </label>
        </div>
        <div class="rate">
          <input type="radio" name="rate" class="hidden" v-model="rate" :value="1" id="2" />
          <label for="2">
            <span class="star-count">
              <IconsRedStar v-for="i in 2" :key="i" />
            </span>
            {{ $t("Fair")}}
          </label>
        </div>
        <div class="rate">
          <input type="radio" name="rate" class="hidden" v-model="rate" :value="1" id="3" />
          <label for="3">
            <span class="star-count">
              <IconsRedStar v-for="i in 3" :key="i" />
            </span>
            {{ $t("Good")}}
          </label>
        </div>
        <div class="rate">
          <input type="radio" name="rate" class="hidden" v-model="rate" :value="4" id="4" />
          <label for="4">
            <span class="star-count">
              <IconsRedStar v-for="i in 4" :key="i" />
            </span>
            {{ $t("Very_Good")}}
          </label>
        </div>
        <div class="rate">
          <input type="radio" name="rate" class="hidden" v-model="rate" :value="5" id="5" />
          <label for="5">
            <span class="star-count">
              <IconsRedStar v-for="i in 5" :key="i" />
            </span>
            {{ $t("Excellent")}}
          </label>
        </div>
      </div>

      <div class="input-wrapper">
        <label class="input-label" for="note">{{ $t("note") }}</label>
        <textarea
          class="input"
          v-model="note"
          placeholder="Enter your password"
          id="note"
        />
      </div>
      <ListingGallary @update:images="handleImages" />
      <button type="submit" class="primary-button-2">
        {{ $t("Rate_now") }}
      </button>
    </form>
  </Dialog>
</template>

<style scoped></style>
