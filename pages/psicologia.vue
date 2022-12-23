<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Nuestra propuesta educativa"
      backgroundUrl="/images/bg/books.webp"
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
                  src="/images/svg/linea/psicopedagogia.svg"
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
                  <h2 class="title">Departamento de Psicología</h2>

                  <div class="desc mt-20">
                    <div class="content mb-20" data-aos="fade-up">
                      <p>
                        En nuestra <strong>institución educativa</strong>, en
                        cada una de nuestras sedes el departamento de Psicología
                        está conformado por un staff de profesionales orientados
                        a optimizar los procesos de aprendizaje y de desarrollo
                        personal al interior del colegio, dinamizándolos y
                        haciéndolos más eficaces; asimismo, previene posibles
                        situaciones de conflicto en la escuela y en la familia.
                        <br />
                        Los psicólogos le brindan a usted y su familia
                        orientación y consejería individuales y/o grupales
                        mediante técnicas y estrategias propias de su profesión.
                      </p>
                    </div>
                    <h6 class="title">Las actividades que desarrollan son:</h6>
                    <div class="content mb-20" data-aos="fade-up">
                      <ul>
                        <li>Evaluación psicológica</li>
                        <li>Encuentro de familias</li>
                        <li>Curso taller de Valores y Liderazgo</li>
                        <li>
                          Charla con padres y estudiantes con bajo rendimiento
                        </li>
                        <li>Actividades de prevención de bullying</li>
                      </ul>
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
  </div>
</template>
<script>
export default {
  name: "psicopedagogia",
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
          text: "Psicología",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Psicopedagogia",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "En el Colegio Carrión preparamos a nuestros alumnos para ser protagonistas de su propio aprendizaje.",
        },
      ],
    };
  },
};
</script>