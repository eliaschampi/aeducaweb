<template>
  <div class="section-padding-t90-b100">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle
        title="Ubícanos en nuestras sedes"
        sub-title="Oficina Principal Carrión: Av la cultura 1542 frente a la UNSAAC."
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
                src="/images/svg/linea/ubi1.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Sede San jeronimo</h4>
              <span class="info-text">
                Calle El Eden - Urb. Tingo <br />
                Frente a Maestro.
              </span>
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info" data-vivus-hover>
            <div class="icon">
              <img
                class="svgInject"
                src="/images/svg/linea/ubi2.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Sede Progreso</h4>
              <span class="info-text">
                Av Perú G8 - Wanchaq <br />
                Al lado del Mercado Ttio
              </span>
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info" data-vivus-hover>
            <div class="icon">
              <img
                class="svgInject"
                src="/images/svg/linea/ubi3.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Sede Sicuani</h4>
              <span class="info-text">
                Jr. José Olaya 206 <br />
                Detrás del hospital
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
