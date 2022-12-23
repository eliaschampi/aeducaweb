<template>
  <div
    class="faq-section section-padding-top"
    :style="{ backgroundColor: '#f8faff' }"
  >
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1">
        <!-- Faq Content Start -->
        <div class="col mb-30">
          <div class="faq-content">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">Preguntas frecuentes</span>
              <h3 class="title">Aquí respondemos tus dudas mas frecuentes</h3>
            </div>
            <!-- Section Title Two End -->

            <AccordionStyleOne />
          </div>
        </div>
        <!-- Faq Content End -->

        <div class="col pl-xl-12">
          <div class="about-image-area faq-image-area">
            <div class="about-image right-n50 js-tilt">
              <img src="/images/faq/faq-2.webp" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/faq/faq-1.webp" alt="image" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="4"
              imgSrc="/images/shape-animation/foco.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AccordionStyleOne: () => import("~/components/AccordionStyleOne"),
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },
};
</script>