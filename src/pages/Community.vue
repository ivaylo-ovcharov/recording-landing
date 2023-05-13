<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-slate-900">
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
      <CommunityHero />
    </main>
    <Stats />
    <ComunityBenefits />
    <Cta />
    <!-- Site footer -->
    <Footer />
  </div>
</template>
  
  <script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import BlogList from "./../partials/BlogList.vue";
import CommunityHero from "./../partials/CommunityHero.vue";

import Footer from "./../partials/Footer.vue";
import Stats from "./../partials/Stats.vue";
import Cta from "./../partials/Cta.vue";

import Newsletter from "./../partials/Newsletter.vue";
import WistiaPlayer from "./../partials/WistiaPlayer.vue";
import ComunityBenefits from "./../partials/ComunityBenefits.vue";

export default {
  name: "Blog",
  components: {
    Header,
    PageIllustration,
    BlogList,
    Footer,
    Stats,
    Cta,
    Newsletter,
    CommunityHero,
    WistiaPlayer,
    ComunityBenefits,
  },
};
</script>
  