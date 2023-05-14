<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Products and Technologies I love</h1>
          <p class="text-xl text-body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <!-- Items -->
        <div class="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>
          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-default p-2"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/teamwork.png" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/vuejs.png" style="height: 45px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/figma.png" style="height: 75px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/preline.png" style="height: 30px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/strapi.png" style="height: 30px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/metabase.png" style="height: 65px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul0 p-2"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/tailwind.png" style="height: 20px" />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-border-defaul p-2"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img src="/logos/storybook.png" style="height: 30px" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
};
</script>