<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Nuestra propuesta educativa"
      backgroundUrl="/images/bg/breadcrumb-bg.webp"
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
                  src="/images/about/main.webp"
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
                  <h2 class="title">Carrión Nivel Primaria</h2>

                  <div class="desc mt-20">
                    <div class="content mb-20" data-aos="fade-up">
                      <p>
                        Este nivel tiene como propósito educar integralmente a
                        niños y niñas, y promueve la comunicación en todas las
                        áreas, el manejo operacional del conocimiento, el
                        desarrollo espíritual, personal, físico, afectivo,
                        social, vocacional y artístico, el pensamiento lógico,
                        la creatividad, la adquisición de habilidades necesarias
                        para el despliegue de potencialidades, así como la
                        comprensión de los hechos cercanos al ambiente natural y
                        social de los estudiantes.
                      </p>
                    </div>
                    <h6 class="title">Metodología de enseñanza</h6>
                    <div class="content mb-20" data-aos="fade-up">
                      <p>
                        Usamos la Metodología VAK, que busca el desarrollo de
                        las inteligencias múltiples, aprovechando el periodo
                        sensitivo, es decir el periodo que tiene el niño para
                        aprender sin mayor esfuerzo, la misma que en la niñez es
                        muy alta y va bajando su nivel conforme los niños van
                        creciendo. De esta manera le damos los instrumentos para
                        enfrentar el futuro mundo estudiantil.
                      </p>
                    </div>
                    <div class="work-details-list mt-40">
                      <div class="details-list">
                        <label>Edad mínima</label>
                        <span
                          >1° de Primaria: 06 años cumplidos al 31 de marzo de
                          2022.</span
                        >
                      </div>

                      <div class="details-list">
                        <label>Estudiantes por Aula</label>
                        <span>20</span>
                      </div>

                      <div class="details-list">
                        <label>Hora de ingreso</label>
                        <span> 08.00 a.m. </span>
                      </div>

                      <div class="details-list">
                        <label>Cursos extracurriculares</label>
                        <span> Robotica educativa, wedo, lego </span>
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
                src="/images/bg/primaria-bg.webp"
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
    FeatureOne: () => import("~/components/FeatureOne"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Primaria",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Carrión Primaria",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "En Colegio Carrión Cusco brindamos una educación de calidad",
        },
      ],
    };
  },
};
</script>