import { ref } from "vue";

export function useGeolocation() {
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const getLocation = (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        error.value = "Geolocation is not supported by your browser.";
        reject(new Error(error.value));
        return;
      }

      isLoading.value = true;

      navigator.geolocation.getCurrentPosition(
          (position) => {
            isLoading.value = false;
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            isLoading.value = false;
            error.value = err.message;
            reject(err);
          }
      );
    });
  };

  return { getLocation };
}
