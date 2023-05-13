<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto">
          <article>
            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <h1 class="h1 mb-4" data-aos="fade-up">
                  Design and Build web app with Swapi and Vue.js
                </h1>
                <p
                  class="text-xl text-gray-400"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
              <!-- Article meta -->
              <!-- <div class="md:flex md:items-center md:justify-between mt-3">
                <div
                  class="flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a href="#0">
                    <img
                      class="rounded-full shrink-0 mr-4"
                      src="../images/news-author-04.jpg"
                      width="40"
                      height="40"
                      alt="Author 04"
                    />
                  </a>
                  <div>
                    <a
                      class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      href="#0"
                      >Chris Solerieu</a
                    >
                    <span class="text-gray-700"> - </span>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </div>
                <div
                  class="flex justify-center mt-4 md:mt-0"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
              </div> -->
            </header>

            <!-- Article image -->
            <!-- <figure
              class="mb-8 lg:-ml-32 lg:-mr-32"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                class="w-full"
                src="../images/news-single.jpg"
                width="1024"
                height="576"
                alt="News single"
              />
            </figure> -->
            <WistiaPlayer videoId="irrbbakfrf" class="mx-auto md:max-w-none" />

            <!-- Article content -->

            <!-- Article footer -->
            <footer>
              <div
                class="md:flex md:items-center md:justify-between text-center md:text-left"
              >
                <div class="text-lg text-gray-400 italic">
                  Originally published at
                  <a class="text-gray-200" href="https://cruip.com/"
                    >https://academy.ivodev.com/</a
                  >.
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WistiaPlayer from "./../partials/WistiaPlayer.vue";

export default {
  name: "BlogSingle",
  components: {
    WistiaPlayer,
  },
};
</script>