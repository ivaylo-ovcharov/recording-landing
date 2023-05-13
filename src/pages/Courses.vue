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
      <CourseList />
      <Newsletter />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import BlogList from "./../partials/BlogList.vue";
import Footer from "./../partials/Footer.vue";
import CourseList from "./../partials/CourseList.vue";
import Newsletter from "./../partials/Newsletter.vue";

export default {
  name: "Blog",
  components: {
    Header,
    PageIllustration,
    BlogList,
    Footer,
    CourseList,
    Newsletter,
  },
};
</script>
