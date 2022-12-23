<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Preguntas frecuentes"
      backgroundUrl="/images/bg/breadcrumb-bg.webp"
    />

    <FaqOne :style="{ backgroundColor: '#fff' }" />

    <CallToActionTwo />

    <ValuesSection />
  </div>
</template>
<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    FaqOne: () => import("~/components/FaqOne"),
    ValuesSection: () => import("~/components/ValuesSection"),
    CallToActionTwo: () => import("~/components/CallToActionTwo"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Preguntas frecuentes",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Preguntas frecuentes",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Colegio Carrión es una institución educativa de prestigio en la ciudad de cusco",
        },
      ],
    };
  },
};
</script>