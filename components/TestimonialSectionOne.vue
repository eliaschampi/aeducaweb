<template>
  <div class="testimonial-section section-padding-t90 section-padding-bottom">
    <div class="container-fluid">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-32">
          Lo que dicen nuestros clientes de nuestros servicios
        </h2>
        <p class="sub-title font-italic">
          "Creo que es muy importante contar con un circuito de
          retroalimentación donde estas pensando constantemente en lo que has
          hecho y como se podría hacer mejor" Elon Musk
        </p>
      </div>
      <!-- Section Title End -->

      <!--Testimonial Slider Start -->
      <div class="testimonial-slider" data-aos="fade-up">
        <swiper :options="swiperOption">
          <div
            class="swiper-slide"
            v-for="(testimonial, index) in testimonialData"
            :key="index"
          >
            <TestimonialItem :testimonial="testimonial" />
          </div>
        </swiper>
        <div class="swiper-pagination text-center"></div>
      </div>
      <!--Testimonial Slider End -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TestimonialItem: () => import("~/components/TestimonialItem"),
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          1499: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },

      testimonialData: [
        {
          id: 1,
          text: "Carrion es una institución de prestigio, con una amplia trayectoria en la ciudad de Cusco. Su enseñanza es muy buena",
          imgSrc: "/images/testimonial/elias.webp",
          name: "Elias Champi Hancco",
          position: "Ing. Sistemas",
        },
        {
          id: 2,
          text: "Mi familia y yo estamos completamente agradecidos por el gran servicio y la calidad de enseñanza que tiene el colegio Carrión.",
          imgSrc: "/images/testimonial/author-3.png",
          name: "Juan Carlos Mamani Vargas",
          position: "Padre de familia",
        },
        {
          id: 3,
          text: "Mi hijo ingresó a la universidad a la carrera de Ing. Civil gracias a la exigencia del colegio y sus grandes maestros.",
          imgSrc: "/images/testimonial/author-2.png",
          name: "Delia Quispe Cruz",
          position: "Madre de familia",
        },
      ],
    };
  },
};
</script>