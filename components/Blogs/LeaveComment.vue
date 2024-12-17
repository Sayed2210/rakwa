<script setup lang="ts">
import MakeCommentController from "~/features/MakeCommentFeature/presentation/controllers/make_comment_controller";
import MakeCommentParams from "~/features/MakeCommentFeature/Core/Params/make_comment_params";


const name = ref("");
const email = ref("");
const message = ref("");
const makeCommentController = MakeCommentController.getInstance();
const makeComment = async () => {
  await makeCommentController.makeComment(
      new MakeCommentParams(
          useRoute().params.id as string,
          name.value,
          email.value,
          message.value,
          null
      )
  );
}
</script>

<template>
    <section class="leave-comment">
    <h2 class="leave-comment-title">Leave a Comment</h2>
    <p class="leave-comment-description">
      {{
        $t(
          "Your_email_address_will_not_be_published_Required_fields_are_marked",
        )
      }}
    </p>
    <form @submit.prevent="makeComment" class="comment-form grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1">
        <div class="input-wrapper">
          <label class="input-label" for="name">{{ $t("name") }}</label>
          <input
            class="input"
            placeholder="Enter your name"
            type="text"
            name="name"
            v-model="name"
            id="name"
          />
        </div>
      </div>
      <div class="col-span-1">
        <div class="input-wrapper">
          <label class="input-label" for="email">{{ $t("email") }}</label>
          <input
            class="input"
            placeholder="Enter your email"
            type="email"
            name="email"
            v-model="email"
            id="email"
          />
        </div>
      </div>
      <div class="col-span-1">
        <div class="input-wrapper">
          <label class="input-label" for="message">{{ $t("message") }}</label>
          <textarea
            class="input"
            placeholder="Enter your message"
            name="message"
            id="message"
            v-model="content"
          ></textarea>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
