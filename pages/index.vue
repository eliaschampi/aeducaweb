<template>
  <div>
    <HeroSliderOne />

    <div class="newcupon">
      <div class="text">
        ¡Bienvenidos al sitio web de nuestra institución! Las matriculas para el
        año 2022 ya han empezado.
        <n-link to="/cupon" class="text-warning info">
          Inscríbete aquí y gana un gran cupon de descuento
        </n-link>
      </div>
    </div>

    <AboutOne :style="{ backgroundColor: '#F3F7FC' }" />

    <SkillWithVideo />

    <PortfolioGallery :style="{ backgroundColor: '#F3F7FC' }" />

    <FeatureOne />

    <CallToActionThree :style="{ backgroundColor: '#F3F7FC' }" />

    <SuccessStory />

    <CallToActionOne :style="{ backgroundColor: '#F3F7FC' }" />

    <ContactSectionTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeroSliderOne: () => import("~/components/HeroSliderOne"),
    AboutOne: () => import("~/components/AboutOne"),
    SkillWithVideo: () => import("~/components/SkillWithVideo"),
    FeatureOne: () => import("~/components/FeatureOne"),
    PortfolioGallery: () => import("~/components/PortfolioGallery"),
    SuccessStory: () => import("~/components/SuccessStory"),
    ContactSectionTwo: () => import("~/components/ContactSectionTwo"),
    CallToActionOne: () => import("~/components/CallToActionOne"),
    CallToActionThree: () => import("~/components/CallToActionThree"),
  },

  head() {
    return {
      title: "Matrículas abiertas 2022 Institución Educativa", //dejo a proposito sin tilde para facilitar la busqueda
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Sé parte de la mejor institución educativa, estudia en Colegio Carrión Cusco. Primaria, Secundaria y Academia. Inicia tu futuro ahora",
        },
      ],
    };
  },
};
</script>


