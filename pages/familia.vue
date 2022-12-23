<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="A cerca de nuestros padres y madres de la institución"
      backgroundUrl="/images/bg/newsletter.webp"
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
                  src="/images/svg/linea/familia.svg"
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
                  <h2 class="title">
                    Asociación de padres de familia - Carrión.
                  </h2>

                  <div class="desc mt-20">
                    <div class="content mb-20" data-aos="fade-up">
                      <p class="text-primary font-weight-bold">
                        La formación de los hijos, además de ser un arte, es
                        también una ciencia que puede y debe aprenderse.
                      </p>
                      <p>
                        Para ejercer la misión natural de primeros educadores,
                        hoy en día es necesario prepararse, pues la formación de
                        los hijos, además de ser un arte, es también una ciencia
                        que puede y debe aprenderse.
                        <br />
                        La formación de padres, pretende ayudar a los padres de
                        familia a esta capacitación. Asi como para ejercer
                        cualquier profesión es necesario estudiar mucho y bien,
                        de igual manera es necesario prepararse para ejercer la
                        paternidad.
                        <br />
                        En el transcurso del año escolar, proponemos en
                        determinadas fechas:
                      </p>
                      <ul>
                        <li>
                          Jornadas semestrales de formación de padres, según la
                          necesidad específica de cada grado.
                        </li>
                        <li>
                          Convivencia padre e hijo para primaria y secundaria
                        </li>
                        <li>Cursos sobre amor matrimonial.</li>
                        <li>
                          Cursos sobre las primeras aprendizajes de los niños.
                        </li>
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

    <ValuesSection :style="{ backgroundColor: '#F3F7FC' }" />
  </div>
</template>
<script>
export default {
  name: "familia",
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    ValuesSection: () => import("~/components/ValuesSection"),
  },

  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Apoderados",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Apoderados",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "En colegio carrión cusco somos una nueva generación de triunfadores",
        },
      ],
    };
  },
};
</script>