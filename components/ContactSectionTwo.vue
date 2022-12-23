<template>
  <div
    class="section-padding contact-section fix bg-cover"
    data-overlay="0.7"
    :style="{ backgroundImage: `url('/images/bg/contact.webp')` }"
  >
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1 align-items-center">
        <div class="col">
          <!-- Contact Information -->
          <div class="contact-Information mr-xl-7">
            <!-- Section Title Two Start -->
            <div class="section-title-two color-light">
              <span class="sub-title"> Inicia tu pre-inscripción </span>
              <h3 class="title">Se parte de la familia Carrión</h3>
            </div>
            <!-- Section Title Two End -->

            <!-- Contact Info Item Start -->
            <div class="contact-data" data-vivus-hover>
              <div class="text-light">
                El Plan de Estudios que ofrecemos permite a nuestros estudiantes
                convertirse en personas capacitadas para la vida y con un
                elevado nivel académico y de calidad. Esto contribuye a
                fortalecer en ellos su competencia comunicativa para afrontar
                sus estudios universitarios y su inserción en el actual mundo
                laboral empresarial globalizado.
              </div>
            </div>

            <!-- Contact Info Item End -->
          </div>
          <!-- Contact Information -->
        </div>

        <div class="col">
          <!-- Contact Form Start -->
          <div class="contact-form-area box-shadow">
            <!-- Section Title Start -->
            <div class="section-title text-center mb-3">
              <h2 class="title fz-28">
                Postula aquí y recibe un cupón de descuento
              </h2>
            </div>
            <!-- Section Title End -->
            <OhMyForm />

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/contact-shape.png"
            />
          </div>
          <!-- Contact Form End -->
        </div>
      </div>
    </div>

    <!-- Animation Shape Start -->
    <ShapeWithAnimation
      addClassName="shape-1"
      data-depth="1"
      imgSrc="/images/shape-animation/newsletter-shape.png"
    />
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
    OhMyForm: () => import("~/components/OhMyForm"),
  },
};
</script>