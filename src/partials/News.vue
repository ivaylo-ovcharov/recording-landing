<script>
export default {
  name: "News",
  data() {
    return {
      courses: [
        {
          name: "Research and Planning",
          img: "/course/1ReseachPlanning.png",
          description:
            "Learn how to visualise your ideas, nail the requirement specification and give your self a head start for building the app",
        },
        {
          name: "Set up your theme and tokens",
          img: "/course/2ColorsTokens.png",
          description:
            "We will set up our boilerplate and configure our code editor for smoother dev exprience ",
        },
        {
          name: "Research and Planning",
          img: "/course/3DesignSystem.png",
          description:
            "Create your own design system Step into the Designer Role and build them fron scratch in Vue",
        },
        {
          name: "Research and Planning",
          img: "/course/4DataLayer.png",
          description:
            "We will create a method that will allow us to fetch data with a single line of code, we will also include caching",
        },
        {
          name: "Research and Planning",
          img: "/course/5Peaces.png",
          description:
            "Once we have all building blocks done we will put the peaces together and create our DataTable component",
        },
        {
          name: "Research and Planning",
          img: "/course/6Allignments.png",
          description:
            "Final UI/UX alignments and preparation for release, some details that most developers miss",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Build web app with Swapi and Vue.js</h2>
          <p class="text-xl text-body">
            Enhance your learning experience with our carefully curated
            resources designed to complement the Vue.js Mastery Course.
          </p>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div
            class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
          >
            <!-- 1st article -->
            <article
              v-for="course in courses"
              :key="course"
              class="flex flex-col h-full"
              data-aos="fade-up"
            >
              <header>
                <router-link
                  to="/courses/build-app-swapi-and-vue"
                  class="block mb-6"
                >
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden rounded-sm"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      :src="course.img"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>
                <p class="text-lg text-body grow">
                  {{ course.description }}
                </p>
                <!-- <h3 class="h4 mb-2">
                  <router-link
                    to="/blog-post"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >{{ course.name }}</router-link
                  >
                </h3> -->
              </header>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

