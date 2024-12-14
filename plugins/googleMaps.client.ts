import { defineNuxtPlugin } from "#app";
import { Loader } from "@googlemaps/js-api-loader";

export default defineNuxtPlugin(() => {
  const loader = new Loader({
    apiKey: "AIzaSyBDucc-Ye5pWi-CF2CBKlkMzQ-6IMGS14c", // Replace with your API key
    version: "weekly",
  });

  return {
    provide: {
      googleMaps: loader,
    },
  };
});
