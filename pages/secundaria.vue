<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Nuestra propuesta educativa"
      backgroundUrl="/images/bg/bg-about.webp"
    />
    <div class="section-padding">
      <div class="container">
        <div class="row">
          <!-- Portfolio Left -->
          <div class="col-lg-4 col-md-6 col-12">
            <div class="work-left work-details" data-aos="fade-up">
              <div class="portfolio-main-info mt-30">
                <img
                  class="level-image"
                  src="/images/about/secundaria.webp"
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
                  <h2 class="title">Carrión Nivel Secundaria</h2>

                  <div class="desc mt-20">
                    <div class="content mb-20" data-aos="fade-up">
                      <p>
                        En el nivel secundaria buscamos consolidar el proceso de
                        formación integral del estudiante, desarrollamos con
                        mayor profundidad la dimensión académica-investigativa,
                        emocional, valorativa y vocacional; de esta manera
                        orientamos el proyecto de vida de nuestros estudiantes.
                      </p>
                    </div>
                    <h6 class="title">
                      Nuestro trabajo educativo se orienta a desarrollar las
                      siguientes habilidades:
                    </h6>
                    <div class="content mb-20" data-aos="fade-up">
                      <ul class="agency-list">
                        <li class="item">
                          <div class="icon">
                            <i class="icofont-bullhorn"></i>
                          </div>
                          <div class="text">
                            Liderazgo y espíritu emprendedor.
                          </div>
                        </li>
                        <li class="item">
                          <div class="icon">
                            <i class="icofont-bullhorn"></i>
                          </div>
                          <div class="text">
                            Desarrollo científico – investigativo
                          </div>
                        </li>
                        <li class="item">
                          <div class="icon">
                            <i class="icofont-bullhorn"></i>
                          </div>
                          <div class="text">
                            Desarrollo vocacional y enfoque preuniversitario
                          </div>
                        </li>
                        <li class="item">
                          <div class="icon">
                            <i class="icofont-bullhorn"></i>
                          </div>
                          <div class="text">
                            <b>Cursos extracurriculares:</b> teatro, diseño,
                            tic, robótica, programación y cursos
                            preuniversitarios
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="work-details-list mt-40">
                      <div class="details-list">
                        <label>Hora De Ingreso</label>
                        <span> 08:00 a.m. </span>
                      </div>

                      <div class="details-list">
                        <label>Estudiantes por Aula</label>
                        <span>20</span>
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

        <!-- Start Thumbnail -->
        <div class="row">
          <div class="col-lg-12">
            <div class="custom-column-thumbnail mt-60" data-aos="fade-up">
              <img
                class="w-100 level-image"
                src="/images/bg/secundaria-bg.webp"
                alt="Agency"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <FeatureOne />
  </div>
</template>
<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Secundaria",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Secundaria",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Colegio Carrión. Descubre nuestra innovadora metodología de enseñanza basada en principios de la vida",
        },
      ],
    };
  },
};
</script>