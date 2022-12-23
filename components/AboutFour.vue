<template>
  <div class="section-padding-top section-padding-bottom-180">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/about/elegir-1.webp" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about/elegir-2.webp" alt="image" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <span class="sub-title"> Razones para unirte a <b>Carrión</b> </span>
              <h3 class="title">Contamos con:</h3>
            </div>
            <p>
                    <!-- Agency List Start -->
            <ul class="agency-list">
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Plana de docentes comprometidos con nuestra institución.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Local amplio con espació para hacer deporte, sala de cómputo, biblioteca, laboratorio
                  y servicio implementados.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Talleres y cursos extracurriculares
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Exposición de proyectos y arte en la comunidad Aeduca
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Concursos de oratoria, deporte, arte y mucho más.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Acompañamiento permanente de docentes
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Area psicopedagógica especializada.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Plataforma virtual de última generación
                </div>
              </li>
               <li class="item">
                <div class="icon">
                  <i class="icofont-checked"></i>
                </div>
                <div class="text">
                  Control de asistencias, incidencias y atenciones sistematizadas.
                </div>
              </li>
            </ul> 
            </p>
            <n-link to="/cupon" class="btn btn-primary mt-30">
              Comienza aquí
            </n-link>
          </div>
        </div>
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