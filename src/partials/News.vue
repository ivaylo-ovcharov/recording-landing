<script>
export default {
  name: "News",
  data() {
    return {
      courses: [
        {
          name: "Research and Planning",
          img: "/course/1ReseachPlanning.png",
        },
        {
          name: "Set up your theme and tokens",
          img: "/course/2ColorsTokens.png",
        },
        {
          name: "Research and Planning",
          img: "/course/3DesignSystem.png",
        },
        {
          name: "Research and Planning",
          img: "/course/4DataLayer.png",
        },
        {
          name: "Research and Planning",
          img: "/course/5Peaces.png",
        },
        {
          name: "Research and Planning",
          img: "/course/6Allignments.png",
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
          <h2 class="h2" data-aos="fade-up">Explore Modules</h2>
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
                <a
                  href="https://ivo-s-school3.teachable.com/courses/asd/lectures/46902170"
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
                </a>

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

