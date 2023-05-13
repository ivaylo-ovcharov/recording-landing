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

      <HeroFeatures />
      <Stats />
      <FeaturesZigzag />
      <FeaturesBlocks />
      <CaseStudies />
      <Cta />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroFeatures from "../partials/HeroFeatures.vue";
import Stats from "../partials/Stats.vue";
import FeaturesZigzag from "../partials/FeaturesZigzag.vue";
import FeaturesBlocks from "../partials/FeaturesBlocks.vue";
import CaseStudies from "../partials/CaseStudies.vue";
import Cta from "../partials/Cta.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Features",
  components: {
    Header,
    PageIllustration,
    HeroFeatures,
    Stats,
    FeaturesZigzag,
    FeaturesBlocks,
    CaseStudies,
    Cta,
    Footer,
  },
};
</script>
