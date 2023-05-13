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

      <HeroHome />
      <FeaturesZigzag />
      <News class="mb-14" />
      <FeaturesHome class="mb-20" />

      <Faqs />
      <Cta />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "./../partials/PageIllustration.vue";
import HeroHome from "./../partials/HeroHome.vue";
import FeaturesHome from "./../partials/FeaturesHome.vue";

import FeaturesZigzag from "./../partials/FeaturesZigzag.vue";
import Tabs from "./../partials/Tabs.vue";
import Target from "./../partials/Target.vue";
import News from "./../partials/News.vue";
import Newsletter from "./../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";
import Faqs from "./../partials/Faqs.vue";

import Cta from "../partials/Cta.vue";

export default {
  name: "Home",
  components: {
    Header,
    PageIllustration,
    HeroHome,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    Cta,
    Faqs,
    FeaturesZigzag,
    Footer,
  },
};
</script>
