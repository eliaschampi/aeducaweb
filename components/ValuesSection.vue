<template>
  <div class="section-padding-t90-b100">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle
        title="Nuestros valores institucionales"
        sub-title="Carrión 2022, ¡Nacimos para triunfar!"
        add-class-name="mb-30"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info" data-vivus-hover>
            <div class="icon">
              <img
                class="svgInject"
                src="/images/svg/linea/empatia.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Empatia</h4>
              <span class="info-text">
                Valorizamos la opinión y participación de nuestros estudiante
              </span>
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info" data-vivus-hover>
            <div class="icon">
              <img
                class="svgInject"
                width="100"
                src="/images/svg/linea/coraje.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Coraje</h4>
              <span class="info-text">
                Desafiamos cualquier circunstancia con una mentalidad vencedora.
              </span>
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info" data-vivus-hover>
            <div class="icon">
              <img
                class="svgInject"
                width="100"
                src="/images/svg/linea/integridad.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Integridad</h4>
              <span class="info-text">
                Buscamos coherencia con nuestras ideas, valores y acciones.
              </span>
            </div>
          </div>
        </div>
      </div>

      <shape-with-animation
        add-class-name="shape-1"
        data-depth="4"
        img-src="/images/shape-animation/video-shape-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("~/components/SectionTitle"),
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },
};
</script>
