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

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative mt-40">
        <div class="mb-8">
          <h2 class="h2 mb-4">General Policy for ivodev.com</h2>
        </div>
        <ul class="-my-4">
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">Introduction</h4>
            <p class="text-lg text-body">
              Welcome to ivodev.com. This document outlines our policies
              regarding the collection, use, and disclosure of personal data
              when you use our services and the choices you have associated with
              that data.
            </p>
          </li>
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">
              Collection and Use of Personal Data
            </h4>
            <p class="text-lg text-body">
              While using our service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to: email address,
              first name and last name, phone number, address, cookies, and
              usage data. We use your data to provide and improve our services.
              By using the service, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </li>
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">Cookies</h4>
            <p class="text-lg text-body">
              We use cookies and similar tracking technologies to track the
              activity on our service and hold certain information. Cookies are
              files with a small amount of data which may include an anonymous
              unique identifier. You have the option to either accept or refuse
              these cookies and know when a cookie is being sent to your device.
            </p>
          </li>
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">Use of Data</h4>
            <p class="text-lg text-body">
              We use the collected data for various purposes: To provide and
              maintain our service To notify you about changes to our service To
              provide customer support To gather analysis or valuable
              information so that we can improve our service To monitor the
              usage of our service To detect, prevent and address technical
              issues Security of Data The security of your data is important to
              us but remember that no method of transmission over the Internet,
              or method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal data,
              we cannot guarantee its absolute security.
            </p>
          </li>
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">
              Changes to This Privacy Policy
            </h4>
            <p class="text-lg text-body">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </li>
          <li class="py-4">
            <h4 class="text-xl font-medium mb-2">Contact Us</h4>
            <p class="text-lg text-body mb-4">
              If you have any questions about this Privacy Policy, please
              contact us: By email: favormake@gmail.com
            </p>
            <p class="text-lg text-body">
              This privacy policy was last updated on 16.05.2023.
            </p>
          </li>
        </ul>
      </div>
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
