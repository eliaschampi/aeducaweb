<template>
  <div
    class="contact-form-section section-padding-t90-b100"
    :style="{ backgroundColor: '#f8faff' }"
  >
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8">
          <!-- Section Title Start -->
          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="title fz-32">
              Postula aquí y recibe un cupón de descuento
            </h2>
            <p class="sub-title">
              Nuestros asesores educativos se comunicarán contigo.
            </p>
          </div>
          <!-- Section Title End -->
          <OhMyForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    OhMyForm: () => import("~/components/OhMyForm"),
  },
};
</script>