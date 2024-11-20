import { defineNuxtPlugin } from "#app";
import { Loader } from "@googlemaps/js-api-loader";

export default defineNuxtPlugin(() => {
  const loader = new Loader({
    apiKey: "AIzaSyAQ7_UczCJUFVV-KYU-VlVB3o7OuAhY4oU", // Replace with your API key
    version: "weekly",
  });

  return {
    provide: {
      googleMaps: loader,
    },
  };
});
