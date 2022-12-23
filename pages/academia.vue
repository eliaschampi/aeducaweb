<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Academia Preuniversitaria Pareto"
      backgroundUrl="/images/bg/pareto.jpg"
    />

    <div class="section-padding-t90-b100">
      <div class="container">
        <!-- Section Title Start -->
        <div class="section-title text-center">
          <h2 class="title fz-32">
            Logra tu vacante con nuestro sistema exponencial
          </h2>
        </div>

        <div class="row">
          <!-- Portfolio Left -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="work-left work-details" data-aos="fade-up">
              <div class="portfolio-main-info mt-30">
                <img
                  class="level-image"
                  src="/images/svg/linea/academia.svg"
                  alt="katerina y elias"
                />
              </div>
            </div>
          </div>

          <!-- Work Right -->
          <div class="col-lg-7 col-md-6 offset-lg-1 col-12">
            <div class="work-left work-details mt-30">
              <div class="work-main-info">
                <div class="work-content">
                  <div class="desc">
                    <div class="content" data-aos="fade-up">
                      <p>
                        Somos una academia preuniversitaria con sistema
                        exponencial, docentes capacitados y exigencia efectiva
                        que garantiza el éxito de nuestros estudiantes.
                      </p>
                      <div class="subtitle text-info">Modalidad</div>
                      <ul>
                        <li>Primera oportunidad</li>
                        <li>Ordinario</li>
                        <li>Reforzamiento Escolar (Primaria y secundaria)</li>
                      </ul>
                      <div class="subtitle text-info">Beneficios</div>
                      <ul>
                        <li>
                          Plataforma Aeduca (Examen semanal, entrega de
                          evidencias y asistencia)
                        </li>
                        <li>Entrega de libros</li>
                        <li>Entrega de separatas</li>
                        <li>Seminarios</li>
                      </ul>
                    </div>
                    <div class="work-details-list mt-40">
                      <div class="details-list">
                        <label>Inicio de clases</label>
                        <span> 03 de enero 2022 </span>
                      </div>

                      <div class="details-list">
                        <label>Matrículas</label>
                        <span> S/ 550</span>
                      </div>

                      <div class="details-list">
                        <label>Horarios</label>
                        <span>
                          Mañanas 7a.m. – 1p.m. <br />
                          Tardes: 3p.m. – 7p.m
                        </span>
                      </div>

                      <div class="details-list">
                        <label>Facebook</label>
                        <br />
                        <a
                          href="https://www.facebook.com/Academia-Pareto-100125198904377"
                          target="__blank"
                          class="text-primary font-weight-medium"
                        >
                          Academia pareto
                        </a>
                      </div>
                    </div>

                    <div class="work-btn mt-4">
                      <n-link to="/cupon" class="btn btn-primary">
                        Comienza aquí
                      </n-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  <BrandLogoCarousel />
   BrandLogoCarousel: () => import("~/components/BrandLogoCarousel"),
    -->

    <div
      class="section-padding"
      :style="{ backgroundColor: '#F3F7FC' }"
      data-aos="fade-up"
    >
      <div class="container academia-gallery">
        <div class="section-title text-center">
          <h2 class="title fz-32">Nuestro equipo de docentes</h2>
        </div>
        <div class="d-flex flex-row flex-wrap justify-content-center">
          <div class="d-flex flex-column">
            <img src="/images/team/aca1.webp" class="img-fluid rotate-1" />

            <img src="/images/team/aca4.webp" class="img-fluid rotate-2" />
          </div>

          <div class="d-flex flex-column">
            <img src="/images/team/aca2.webp" class="img-fluid rotate-3" />

            <img
              src="/images/team/aca5.webp"
              class="img-fluid scale rotate-4"
            />
          </div>

          <div class="d-flex flex-column">
            <img
              src="/images/team/aca3.webp"
              class="img-fluid scale mb-2 rotate-5"
            />
            <img src="/images/team/aca6.webp" class="img-fluid rotate-6" />
          </div>

          <div class="d-flex flex-column">
            <img
              src="/images/team/aca7.webp"
              class="img-fluid m-1 p-1 rotate-7"
            />
            <img
              src="/images/team/aca8.webp"
              class="img-fluid image m-1 p-1 rotate-8"
            />
          </div>
        </div>
      </div>
    </div>

    <CallToActionTwo />
  </div>
</template>

<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    CallToActionTwo: () => import("~/components/CallToActionTwo"),
    ServiceWrapper: () => import("~/components/ServiceWrapper"),
  },

  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Academia",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Academia Preuniversitaria Pareto",
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


