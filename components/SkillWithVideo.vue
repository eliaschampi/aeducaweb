<template>
  <div id="choose-one" class="section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div class="skill-with-video-content">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">
                Razones para unirte a <b>Carrión</b>
              </span>
              <h3 class="title">Contamos con:</h3>
            </div>
            <!-- Section Title Two End -->

            <!-- Agency List Start -->
            <ul class="agency-list">
              <li class="item">
                <div class="icon">
                  <i class="icofont-ui-check"></i>
                </div>
                <div class="text">
                  Plana de docentes comprometidos con nuestra institución.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-ui-check"></i>
                </div>
                <div class="text">
                  Local amplio con espació para hacer deporte, sala de cómputo,
                  biblioteca, laboratorio y servicios implementados.
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-ui-check"></i>
                </div>
                <div class="text">
                  Contamos con la mejor plataforma virtual educativa: Aeduca 3.0
                </div>
              </li>
              <li class="item">
                <div class="icon">
                  <i class="icofont-ui-check"></i>
                </div>
                <div class="text">
                  Promovemos los talentos y creatividad de nuestros educandos, a
                  traves de un plan estratégico
                </div>
              </li>
            </ul>
            <!-- Agency List End -->
            <n-link to="/about/#video-about" class="btn btn-primary">
              Saber más
            </n-link>
          </div>
        </div>

        <div class="offset-xl-1 col-xl-6 col-lg-6 col-12">
          <div class="video-popup-area">
            <div class="skill-video">
              <div @click="ohMyVideoIsShowing(0)">
                <img
                  class="image"
                  src="/images/video/skill-video.webp"
                  alt="image"
                />
                <div class="play-icon video-popup">
                  <i class="icofont-ui-play"></i>
                </div>
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
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/video-shape-1.png"
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
