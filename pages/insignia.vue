<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Nuestra Insignia"
      backgroundUrl="/images/bg/classroom.webp"
    />

    <ServiceWrapper />

    <ValuesSection />
  </div>
</template>

<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    ServiceWrapper: () => import("~/components/ServiceWrapper"),
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
          text: "Insignia",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Insignia",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Sé parte del mejor colegio Carrión, estudia en Carrión. Primaria, Secundaria y Academia. Inicia tu futuro ahora ¡Separa tu matrícula ahora!",
        },
      ],
    };
  },
};
</script>


