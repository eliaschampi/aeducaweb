<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Sé parte de la Familia Carrión"
      backgroundUrl="/images/bg/bg-about.webp"
    />

    <ContactForm />

    <CallToActionOne :style="{ backgroundColor: '#F3F7FC' }" />

    <!--Google Map Area Start-->
    <div class="google-map-area section-padding-bottom" v-pre>
      <div class="container">
        <div class="contact-map-area">
          <iframe
            class="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1153.2108917554237!2d-71.90074132607127!3d-13.540276901835398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3da9efd4aa8c9e38!2sColegio%20Carri%C3%B3n!5e0!3m2!1ses!2spe!4v1640207642841!5m2!1ses!2spe"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    CallToActionOne: () => import("~/components/CallToActionOne"),
    ContactForm: () => import("~/components/ContactForm"),
  },

  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Matrículas 2022",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Contáctanos",
      meta: [
  
        {
          hid: "description",
          name: "description",
          content:
            "Sé parte de la familia Carrión, Nacimos para triunfar",
        },
      ],
    };
  },
};
</script>


