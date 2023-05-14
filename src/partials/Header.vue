<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <nav class="hidden md:flex md:grow items-center justify-between">
          <router-link to="/" class="flex" aria-label="Cruip">
            <img style="height: 35px" src="/logo.svg" />
          </router-link>
          <ul class="flex">
            <li>
              <router-link
                to="/courses"
                class="text-heading hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Courses</router-link
              >
            </li>
            <li>
              <router-link
                to="/community"
                class="text-heading hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Community
              </router-link>
            </li>
            <li>
              <router-link
                to="/resources"
                class="text-heading hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Recourses</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-heading hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >About me</router-link
              >
            </li>
          </ul>

          <ul class="flex justify-end flex-wrap items-center">
            <ThemeSwitch />
            <!-- <li>
              <a
                href="#0"
                class="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out gap-2"
              >
                Let's grab a coffee</a
              >
            </li> -->
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden w-full">
          <div class="flex justify-between">
            <button
              class="hamburger"
              ref="hamburger"
              :class="{ active: mobileNavOpen }"
              aria-controls="mobile-nav"
              :aria-expanded="mobileNavOpen"
              @click="mobileNavOpen = !mobileNavOpen"
            >
              <span class="sr-only">Menu</span>
              <svg
                class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>
            <ThemeSwitch />
          </div>

          <nav
            id="mobile-nav"
            ref="mobileNav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 },
            ]"
          >
            <ul class="bg-gray-800 px-4 py-2">
              <div class="py-10 text-center">
                <router-link
                  to="/courses"
                  class="flex text-gray-300 hover:text-gray-200 text-xl py-2 justify-center"
                  >Courses</router-link
                >
                <router-link
                  to="/community"
                  class="flex text-gray-300 hover:text-gray-200 text-xl py-2 justify-center"
                  >Community</router-link
                >
                <router-link
                  to="/about"
                  class="flex text-gray-300 hover:text-gray-200 text-xl py-2 justify-center"
                  >About me</router-link
                >
                sd
              </div>

              <li>
                <a
                  href="#0"
                  class="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
                  >Let's grab a coffee</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>



<script>
import ThemeSwitch from "./ThemeSwitch.vue";
export default {
  name: "Header",
  components: {
    ThemeSwitch,
  },
  data: function () {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return;
      this.mobileNavOpen = false;
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return;
      this.mobileNavOpen = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.keyPress);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.keyPress);
  },
};
</script>