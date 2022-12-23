<template>
  <div class="cta-section section-padding-250">
    <div class="container text-center icon-up-down-animation">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-34">
          Tenemos la mejor plataforma virtual educativa: <b>Aeduca 3.0</b>
        </h2>
        <p class="sub-title">
          AEDUCA Es una aula virtual moderna, funcional e interactiva para los
          estudiantes, docentes y apoderados. Posee características únicas como
          chat en tiempo real. publicaciónes, comentarios, reacciones, drive, un
          sistema de examen avanzado, control de asistencias y mucho más.
        </p>
      </div>
      <!-- Section Title End -->
      <a
        href="https://www.aula.carrioneduca.edu.pe"
        target="__blank"
        class="btn btn-primary btn-hover-info"
      >
        Aula virtual Aeduca
      </a>

      <!-- Icon Animation Start -->
      <div
        class="shape"
        v-for="(shape, index) in shapeData"
        :key="index"
        :class="shape.className"
      >
        <span>
          <img :src="shape.imgSrc" alt="icon" />
        </span>
      </div>
      <!-- Icon Animation End -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shapeData: [
        {
          imgSrc: "/images/icon-animation/icon-1.png",
          className: "shape-1",
        },
        {
          imgSrc: "/images/icon-animation/icon-2.png",
          className: "shape-2",
        },
        {
          imgSrc: "/images/icon-animation/icon-3.png",
          className: "shape-3",
        },
        {
          imgSrc: "/images/icon-animation/icon-4.png",
          className: "shape-4",
        },
        {
          imgSrc: "/images/icon-animation/icon-5.png",
          className: "shape-5",
        },
        {
          imgSrc: "/images/icon-animation/icon-6.png",
          className: "shape-6",
        },
        {
          imgSrc: "/images/icon-animation/icon-7.png",
          className: "shape-7",
        },
        {
          imgSrc: "/images/icon-animation/icon-8.png",
          className: "shape-8",
        },
        {
          imgSrc: "/images/icon-animation/icon-9.png",
          className: "shape-9",
        },
      ],
    };
  },
};
</script>