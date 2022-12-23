<template>
  <div
    class="section-padding-t110-b120 newsletter-section bg-cover"
    data-overlay="0.7"
    :style="{ backgroundImage: `url('/images/bg/newsletter.webp')` }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="newsletter-content">
            <SectionTitle
              title="Se parte de la familia Carrión"
              sub-title="¿Estas interesado en nuestra institución?. Dejanos tu correo para informarte de nuestras promociones y descuentos"
              add-class-name="color-light"
            />

            <!-- Newsletter Form Start -->
            <div class="newsletter-form">
              <form>
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  name="mail"
                />
                <button class="btn btn-primary ">
                  Suscribete
                </button>
              </form>
            </div>
            <!-- Newsletter Form End -->
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