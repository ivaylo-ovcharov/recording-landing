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

      <HeroAbout />
      <Timeline />
      <Clients />
      <CtaAbout />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAbout from "../partials/HeroAbout.vue";
import Timeline from "../partials/Timeline.vue";
import Team from "../partials/Team.vue";
import TestimonialsCarousel from "../partials/TestimonialsCarousel.vue";
import Clients from "../partials/Clients.vue";
import Newsletter from "../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";
import CtaAbout from "../partials/CtaAbout.vue";

export default {
  name: "About",
  components: {
    Header,
    PageIllustration,
    HeroAbout,
    Timeline,
    Team,
    TestimonialsCarousel,
    Clients,
    Newsletter,
    Footer,
    CtaAbout,
  },
};
</script>
