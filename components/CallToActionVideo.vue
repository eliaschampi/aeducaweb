<template>
  <div
    id="video-about"
    class="video-section section-padding"
    data-overlay="0.7"
    :style="{ backgroundImage: `url('/images/bg/children.webp')` }"
  >
    <div class="container text-center">
      <!-- Section Title Start -->
      <div class="section-title color-light text-center" data-aos="fade-up">
        <h2 class="title">Video institucional</h2>
      </div>
      <div
        class="play-btn icon video-popup"
        style="cursor: pointer"
        @click="ohMyVideoIsShowing(0)"
      >
        <i class="icofont-ui-play"></i>
      </div>
      <!-- Section Title End -->
    </div>
    <client-only>
      <LightBox
        ref="lightbox"
        :show-light-box="false"
        :media="videos"
        :key="lbKey"
        @onOpened="onLightboxOpened()"
        @onClosed="onLightboxClosed()"
      ></LightBox>
    </client-only>
    <!-- Animation Shape Start -->
    <ShapeWithAnimation
      addClassName="shape-1"
      data-depth="1"
      imgSrc="/images/shape-animation/newsletter-shape.png"
    />
    <!-- Animation Shape End -->
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("~/components/ShapeWithAnimation"),
  },

  data() {
    return {
      lbKey: 0,
      lbOpen: false,
      videos: [
        {
          type: "youtube",
          thumb: "https://img.youtube.com/vi/QxLRW723DTA/hqdefault.jpg",
          id: "QxLRW723DTA",
          caption: "Carrión Cusco", // Optional
        },
      ],
    };
  },
  methods: {
    ohMyVideoIsShowing(index) {
      this.$refs.lightbox.showImage(index);
    },
    onLightboxOpened() {
      this.lbOpen = true;
    },
    onLightboxClosed() {
      if (!this.lbOpen) return;
      this.lbOpen = false;
      this.lbKey++;
    },
  },
};
</script>