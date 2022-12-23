<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title Start -->
      <SectionTitle
        title="Nuestros niveles académicos"
        sub-title="Te educamos para la vida y te preparamos para ingresar a la universidad."
        add-class-name="mb-60"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div
          class="col mt-30"
          data-aos="fade-up"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="icon-box level-box text-center" :class="addClassName">
            <div class="icon">
              <img
                class="svgInject"
                :src="feature.iconSrc"
                :alt="feature.title"
              />
            </div>
            <div class="content">
              <h3 class="title">{{ feature.title }}</h3>
              <div class="desc">
                <p>{{ feature.text }}</p>
              </div>
              <n-link :to="feature.route" class="link">Conocer más</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addClassName"],

  components: {
    SectionTitle: () => import("~/components/SectionTitle"),
  },

  data() {
    return {
      features: [
        {
          id: 1,
          title: "Primaria",
          text: "Con un acompañamiento continuo con su tutor de aula y promoviendo su talento y creatividad...",
          iconSrc: "/images/svg/linea/abc.svg",
          route: "/primaria",
        },
        {
          id: 2,
          title: "Secundaria",
          text: "Promovemos un espíritu emprendedor y triunfador, con valores y principios para la vida.",
          iconSrc: "/images/svg/linea/res.svg",
          route: "/secundaria",
        },
        {
          id: 3,
          title: "Academia",
          text: "La efectividad y la exigencia del colegio garantizan el ingreso de nuestros estudiantes a la universidad.",
          iconSrc: "/images/svg/linea/aca.svg",
          route: "/academia",
        },
      ],
    };
  },
};
</script>