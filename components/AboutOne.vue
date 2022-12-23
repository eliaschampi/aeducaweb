<template>
  <div id="about-one" class="section-padding-t90 section-padding-bottom-200">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">La educación es un regalo para siempre</h2>
        <p class="sub-title font-italic">
          Prepárate hoy, para los desafíos del futuro
        </p>
      </div>

      <!-- Section Title End -->

      <!-- About Wrapper Start -->
      <div class="row">
        <!-- About Image Area Start -->
        <div class="col-xl-7 col-lg-6" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/about/carrion-about.webp" alt="images" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about/carrion-about-2.webp" alt="images" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              dataDepth="1"
              imgSrc="/images/shape-animation/circles.svg"
            />
            <!-- Animation Shape End -->
          </div>
        </div>
        <!-- About Image Area Start -->

        <!-- About Start -->
        <div class="col-xl-5 col-lg-6" data-aos="fade-up">
          <div class="about-content-area about-one">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">
                Construimos un futuro brillante para tus hijos
              </span>
              <h3 class="title">Propuesta educativa</h3>
            </div>
            <!-- Section Title Two End -->
            <p>
              Creemos que cada estudiante merece un futuro exitoso, por ello nos
              esforzamos en entregar una educación basada en preparación
              humanista, científica y artística promoviendo sus fortalezas y su
              creatividad, a través de un plan estratégico con principios y
              valores que nos caracterizan.
            </p>
            <n-link
              to="/#choose-one"
              class="btn btn-primary btn-hover-info mt-4"
            >
              ¿Por qué elegirnos?
            </n-link>
            <n-link to="/faq" class="btn btn-warning mt-4">
              Preguntas frecuentes
            </n-link>
          </div>
        </div>
        <!-- About Start -->
      </div>
      <!-- About Wrapper End -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },
};
</script>