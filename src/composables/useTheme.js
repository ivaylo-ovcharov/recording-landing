import { ref } from "vue";

const isDarkTheme = ref(true);

export default function useTheme() {
  return {
    isDarkTheme,
  };
}
