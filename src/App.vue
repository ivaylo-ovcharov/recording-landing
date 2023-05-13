<template>
  <div
    class="font-inter antialiased text-heading tracking-tight bg-surface"
    :class="isDarkTheme ? 'theme-dark' : 'theme-light'"
  >
    <router-view />
  </div>
</template>


<script setup>
import useTheme from "./composables/useTheme";
const { isDarkTheme } = useTheme();
</script>
<script>
import AOS from "aos";

export default {
  mounted() {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  },
};
</script>

