<template>
  <div class="section-padding-top success-section-padding-bottom-180">
    <div class="container">
      <div class="row">
        <!-- Success Image Start -->
        <div class="col-lg-6">
          <div class="about-image-area right-0 skill-image-area">
            <div class="about-image js-tilt">
              <img src="/images/skill/aeduca-1.webp" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/skill/aeduca-2.webp" alt="image" />
            </div>
            <!-- Animation Shape Start -->

            <ShapeWithAnimation
              addClassName="shape-1"
              dataDepth="1"
              imgSrc="/images/shape-animation/video-shape-1.png"
            />
            <!-- Animation Shape End -->
          </div>
        </div>
        <!-- Success Image End -->

        <!-- Success Content Start -->
        <div class="offset-lg-1 col-lg-5" data-aos="fade-up">
          <div class="success-content">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">Aula virtual <b>Aeduca 3.0</b></span>
              <h3 class="title">
                Características de Aeduca
              </h3>
            </div>
            <!-- Section Title Two End -->

            <div class="progress-bar--one">
              <!-- Start Single Progress Charts -->
              <div class="progress-charts">
                <h6 class="heading">Comunidad de interacción (Publicaciones)</h6>
                <div class="progress">
                  <div
                    class="progress-bar gradient-1"
                    role="progressbar"
                    style="width: 97%; visibility: visible"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="percent-label">100%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="progress-charts">
                <h6 class="heading">Examen virtual completo y avanzado.</h6>
                <div class="progress">
                  <div
                    class="progress-bar gradient-2"
                    role="progressbar"
                    style="width: 97%; visibility: visible"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="percent-label">100%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="progress-charts">
                <h6 class="heading">
                  Gestiona tus archivos con aeduca drive
                </h6>
                <div class="progress">
                  <div
                    class="progress-bar gradient-3"
                    role="progressbar"
                    style="width: 97%; visibility: visible"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="percent-label">100%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->

              <!-- Start Single Progress Charts -->
              <div class="progress-charts">
                <h6 class="heading">Sesiones, asistencia, chat y mucho más</h6>
                <div class="progress">
                  <div
                    class="progress-bar gradient-4"
                    role="progressbar"
                    style="width: 97%; visibility: visible"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="percent-label">100%</span>
                  </div>
                </div>
              </div>
              <!-- End Single Progress Charts -->
            </div>
          </div>
        </div>
        <!-- Success Content End -->
      </div>
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

