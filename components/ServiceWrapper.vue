<template>
  <div class="section-padding-t90 section-padding-bottom">
    <div class="container">
      <SectionTitle
        title="Nuestro escudo, logo y símbolo"
        sub-title=""
        add-class-name="mb-30"
      />
      <!-- About Wrapper Start -->
      <div
        class="
          row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
          icon-box-shape-animation
          mtn-30
        "
      >
        <div
          class="col mt-30"
          data-aos="fade-up"
          v-for="(service, index) in serviceData"
          :key="index"
        >
          <ServiceItem :service="service" addClassName="box-border" />

        </div>

        <ShapeWithAnimation
          addClassName="shape-1"
          data-depth="1"
          imgSrc="/images/shape-animation/video-shape-1.png"
        />
      </div>
      <!-- About Wrapper End -->
    </div>
  </div>
</template>

<script>
import serviceData from "~/data/service.json";

export default {
  components: {
    ServiceItem: () => import("~/components/ServiceItem"),
    SectionTitle: () => import("~/components/SectionTitle"),
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },

  data() {
    return {
      serviceData,
    };
  },
};
</script>