<template>
  <div class="my-accordion">
    <section class="accordion">
      <input type="checkbox" name="collapse" id="handle1" checked="checked" />
      <h2 class="handle">
        <label for="handle1"> ¿Cómo es el proceso de matrícula?</label>
      </h2>
      <div class="content">
        <p>
          El primer requísito es la entrevista con el área psicopedagógica, en
          la entrevista deberán estar presentes el estudiante y sus apoderados.
        </p>
        <p>
          Luego de la entrevista se le entregará una constancia de vacante, la
          cual sirve para el proceso de traslado de la institución anterior.
        </p>
        <p>
          Finalmente se prosigue a registrar la información necesaria al sistema
          y generar el clave de acceso para su plataforma virtual Aeduca.
          También se le entregará su carnet de asistencia
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle2" />
      <h2 class="handle">
        <label for="handle2">
          ¿Las clases se dictan en modalidad presencial?
        </label>
      </h2>
      <div class="content">
        <p>
          En el año 2022 las clases se realizarán en modalidad presencial. No
          obstante, implementaremos las plataformas virtuales tales como el aula
          virtual <b>Aeduca</b>, comunidad de estudiantes. drive del estudiante,
          chat y sistema de asistencia.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle3" />
      <h2 class="handle">
        <label for="handle3">¿Qué actividades y talleres se realizan?</label>
      </h2>
      <div class="content">
        <p>
          En verano del año 2022 se realizarán talleres de arte, música y
          reforzamiento escolar.
        </p>
        <p>
          Durante el año lectivo se desarrollarán proyectos como: todos leemos,
          debates, concursos de oratoria, deporte, arte y mucho más.
          <br />
          Para mayor informe, aproxímese a las oficinas de la institución.
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle4" />
      <h2 class="handle">
        <label for="handle4">¿Qué cursos o áreas desarrollan?</label>
      </h2>
      <div class="content">
        <p>
          Todas las áreas curriculares que norma el ministerio de educación.
          Tambien dictamos cursos extracurriculares como, ingles, robotica y
          cursos exclusivos de Academia preuniversitaria
        </p>
      </div>
    </section>
    <section class="accordion">
      <input type="checkbox" name="collapse2" id="handle5" />
      <h2 class="handle">
        <label for="handle5">¿Cuanto es el costo y las mensualidades?</label>
      </h2>
      <div class="content">
        <p>
          Para ver más detalles a cerca de los costos y mensualidades solicite
          información aquí.
          <br />
          <n-link to="/cupon" class="text-primary">
            <b>Solicitar más información</b>
          </n-link>
        </p>
      </div>
    </section>
  </div>
</template>