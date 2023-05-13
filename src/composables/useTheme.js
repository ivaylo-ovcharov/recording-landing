import { ref } from "vue";

const isDarkTheme = ref(false);

export default function useTheme() {
  return {
    isDarkTheme,
  };
}
