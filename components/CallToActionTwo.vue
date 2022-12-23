<template>
  <div
    class="section-padding-t110-b120 newsletter-section bg-cover"
    data-overlay="0.7"
    :style="{ backgroundImage: `url('/images/bg/newsletter.webp')` }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="cta-content text-center">
            <div class="section-title text-center color-light">
              <h2 class="title">¿Aun tienes mas dudas?</h2>
              <p class="sub-title">
                Envianos un mensaje para que podamos comunicarnos contigo
              </p>
            </div>
            <n-link
              to="/cupon"
              class="btn btn-primary  mt-6"
            >
              Contáctanos
            </n-link>
          </div>
        </div>
      </div>
    </div>

    <ShapeWithAnimation
      add-class-name="shape-1"
      data-depth="1"
      img-src="/images/shape-animation/newsletter-shape.png"
    />
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("~/components/SectionTitle"),
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },
};
</script>