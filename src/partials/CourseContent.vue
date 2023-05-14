<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-20">
          <h2 class="h2">Course chapters and highlights</h2>
        </div>

        <!-- Faqs -->
        <ul class="max-w-3xl mx-auto pl-12">
          <Accordion title="1. Research and Planning">
            Learn how to visualise your ideas, nail the requirement
            specification and give your self a head start for building the app
          </Accordion>
          <Accordion title="2. Boilerplate Configuration and Setup">
            We will set up our boilerplate and configure our code editor for
            smoother dev exprience
          </Accordion>
          <Accordion title="3. Create Your Own Design system" active>
            Create your own design system Step into the Designer Role and build
            them fron scratch in Vue
          </Accordion>
          <Accordion title="4. Data fetching with useFetch">
            We will create a method that will allow us to fetch data with a
            single line of code, we will also include caching
          </Accordion>
          <Accordion title="5. Complex components - Build DataTable">
            Once we have all building blocks done we will put the peaces
            together and create our DataTable component
          </Accordion>
          <Accordion title="6. UI/UX Alignements">
            Final UI/UX alignments and preparation for release, some details
            that most developers miss
          </Accordion>
          <span
            class="block border-t border-border-default"
            aria-hidden="true"
          ></span>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from "./../utils/Accordion.vue";

export default {
  name: "Faqs",
  components: {
    Accordion,
  },
};
</script>