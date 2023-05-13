<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Header />

    <main class="grow">
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <BlogSingle />
      <CourseContent />

      <FeaturesHome class="mb-20" />
      <Cta />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../../partials/Header.vue";
import PageIllustration from "../../partials/PageIllustration.vue";
import BlogSingle from "../../partials/BlogSingle.vue";
import Newsletter from "../../partials/Newsletter.vue";
import Footer from "../../partials/Footer.vue";
import FeaturesHome from "../../partials/FeaturesHome.vue";
import CourseContent from "../../partials/CourseContent.vue";

import Cta from "../../partials/Cta.vue";

export default {
  name: "BlogPost",
  components: {
    Header,
    PageIllustration,
    BlogSingle,
    Newsletter,
    Footer,
    FeaturesHome,
    CourseContent,
    Cta,
  },
};
</script>
