<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="¿Quienes somos?"
      backgroundUrl="/images/bg/bg-about-2.webp"
    />

    <AboutTwo class="section-padding-top about-section-padding-bottom-200" />

    <CallToActionVideo />

    <AboutFour :style="{ backgroundColor: '#F3F7FC' }" />

    <ValuesSection />

    <TestimonialSectionOne :style="{ backgroundColor: '#F3F7FC' }" />
  </div>
</template>

<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    AboutTwo: () => import("~/components/AboutTwo"),
    CallToActionVideo: () => import("~/components/CallToActionVideo"),
    AboutFour: () => import("~/components/AboutFour"),
    TestimonialSectionOne: () => import("~/components/TestimonialSectionOne"),
    ValuesSection: () => import("~/components/ValuesSection"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Acerca de nosotros",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Carrión Cusco",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Somos una institución educativa con estrategias y valores pensados para tu futuro",
        },
      ],
    };
  },
};
</script>


