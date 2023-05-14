<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div x-data="{ page: '1' }" class="flex flex-col md:flex-row">
            <!-- Main content -->
            <main class="md:flex-auto md:pl-10 order-1" data-aos="fade-up">
              <!-- FAQ’s – Frequently Asked Questions -->
              <div v-show="page === '1'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Books I recommend reading</h2>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How to win friends and influence people
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Clean Code - Uncle Bob
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Win without pitching manifesto
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- What is Open PRO -->
              <div v-show="page === '2'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Tools and Platforms</h2>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Preline - Free Design system
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      LandingFolio - Inspiration and Tawilind snippets
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Cruip - Premium themes
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>

                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Strapi - Open source CMS
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Metabase - Data analythics
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Open PRO plan’s features -->
              <div v-show="page === '3'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Youtube Favorites</h2>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      The Futur - Chris Do
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Flux Academy - Ran Segall
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Refactoring UI - Steve Schoger
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Clean Code - Uncle Bob - All lessons
                    </h4>
                    <p class="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>
            </main>

            <!-- Nav sidebar -->
            <aside
              class="md:w-64 mb-16 md:mb-0 md:mr-10 md:shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4
                class="text-lg font-medium px-3 pb-3 border-b border-border-default"
              >
                Choose a topic
              </h4>
              <nav>
                <ul>
                  <li class="py-2 border-b border-border-default">
                    <a
                      :class="{ 'text-purple-600': page === '1' }"
                      class="flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '1'"
                    >
                      <span>Books I recommend reading</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-border-default">
                    <a
                      :class="{ 'text-purple-600': page === '2' }"
                      class="flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '2'"
                    >
                      <span>Tools and Platforms</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-border-default">
                    <a
                      :class="{ 'text-purple-600': page === '3' }"
                      class="flex items-center px-3 group text-gray-400 hover:text-purple-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '3'"
                    >
                      <span>Youtube Favorites</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import Footer from "../partials/Footer.vue";

export default {
  name: "Help",
  components: {
    Header,
    PageIllustration,
    Footer,
  },
  data: function () {
    return {
      page: "1",
    };
  },
};
</script>
