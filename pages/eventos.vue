<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Nuestros eventos, cursos y talleres"
      backgroundUrl="/images/bg/primaria-bg.webp"
    />
    <div class="section-padding timeline">
      <div class="container">
        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>
          <div class="timeline-content">
            <h2>Taller de teatro</h2>
            <div class="date">Enero 2022</div>
            <p>
              Este es un taller para los niños y niñas de nuestra institución.
              Se desarrolla durante el ciclo vacacional del año. Buscamos
              desarrollar su expresión corporal, expresión oral, capacidad de
              memoria y agilidad mental.
            </p>
            <a class="btn btn-success" href="#">Saber más</a>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div
              class="timeline-img-header"
              :style="{
                background: `${bg} url('/images/bg/music.webp')`,
              }"
            >
              <h2>Taller de música</h2>
            </div>
            <div class="date">Enero 2022</div>
            <p>
              Con este taller buscamos para nuestros estudiantes un espacio de
              expresión y desarrollo de sus competencias artísiticas y mejorar
              su concentración.
              <br />
              Con clases de guitarra, violin, quena, piano, canto y mucho más.
              <br />
              <b>Aprovecha este taller durante el ciclo vacaciónal 2022</b>
            </p>
            <a class="btn btn-success" href="#">Saber más</a>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>

          <div class="timeline-content">
            <div class="date">Marzo 2022</div>
            <h2>Inicio de clases</h2>
            <blockquote>
              Luego de dos años nos encontramos muy contentos de recibirlos
              nuevamente. Con su precencia, el colegio vuelve a cobrar vida. Y
              con el fin de que este retorno sea seguro, sus maestros y maestras
              han diseñado actividades que promuevan el restablecemiento y el
              vínculo entre todos los miembros de nuestra comunidad.
            </blockquote>
            <n-link class="btn btn-primary" to="/cupon">Sé parte</n-link>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div
              class="timeline-img-header"
              :style="{
                background: `${bg} url('/images/bg/casas.webp')`,
              }"
            >
              <h2>Proyecto "Casas Carrión"</h2>
            </div>
            <div class="date">Año lectivo 2022</div>
            <p>
              Un aula es una Casa. el cual tiene una bandera, un simbólo y 3
              colores que los representa.
              <br />
              El objetivo principal es construir en nuestros estudiantes un
              espíritu cooperativo entre los miembros de las casas Carrión
            </p>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>
          <div class="timeline-content timeline-card">
            <div
              class="timeline-img-header"
              :style="{
                background: `${bg} url('/images/bg/books.webp')`,
              }"
            >
              <h2>Proyecto "Todos Leemos"</h2>
            </div>
            <div class="date">Año lectivo 2022</div>
            <p>
              Este es un proyecto de participación e integración de la comunidad
              con el objetivo de desarrollar la lectura diaria planificada.
              <br />
              <strong>
                Los resultados de los meses de lectura se evidencian en el
                "FESTIVAL DE CUENTA CUENTOS"; este festival es un concurso
                dividido en "CASAS CARRIÓN", donde según las puntuaciones más
                altas se determina la casa ganadora.
              </strong>
            </p>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>
          <div class="timeline-content timeline-card">
            <div
              class="timeline-img-header"
              :style="{
                background: `${bg} url('/images/bg/deba.webp')`,
              }"
            >
              <h2>Evento "Debafest 2022"</h2>
            </div>
            <div class="date">Octubre 2022</div>
            <p>
              <b>Debafest</b> es un concurso de debate y oratoria que se
              desarrolla cada año. Aquí participan todos los estudiantes del
              nivel primaria y secundaria.
            </p>
          </div>
        </div>

        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-img"></div>

          <div class="timeline-content">
            <div class="date">Octubre 2022</div>
            <h2>Competencias deportivas</h2>
            <p>
              Mediante el curso de educación fisica potenciamos el desarrollo
              del carácter de los deportistas, el liderazgo, el trabajo en
              equipo y el esfuerzo por competir limpiamente. Nuestros equipos
              participan de forma continua en torneos locales y con otras
              instituciones a lo largo de las diferentes etapas de la vida
              escolar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
  },
  data() {
    return {
      bg: "",
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Eventos y talleres",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Eventos y talleres",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Bienvenido a la Institución Educativa Carrión",
        },
      ],
    };
  },
};
</script>


