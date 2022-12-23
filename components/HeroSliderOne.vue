<template>
  <div class="intro-slider">
    <swiper :options="swiperOptions">
      <swiper-slide
        class="swiper-slide"
        v-for="(banner, index) in sliderData"
        :key="index"
      >
        <div
          class="intro-section overlay bg-cover"
          :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
        >
          <div class="container">
            <div class="row row-cols-lg-1 row-cols-1">
              <div class="col align-self-center">
                <div
                  class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"
                >
                  <component :is="banner.tag" class="title">
                    {{ banner.heading }}
                  </component>
                  <div class="desc">
                    <h5>{{ banner.text }}</h5>
                  </div>
                  <n-link to="/cupon" class="btn btn-primary btn-hover-info">
                    Matrículas 2022
                  </n-link>
                  <n-link
                    to="/#about-one"
                    class="btn btn-outline-warning btn-hover-warning"
                  >
                    Saber mas
                  </n-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- pagination class -->
    <div class="home-slider-prev swiper-button-prev main-slider-nav">
      <i class="icofont-rounded-left"></i>
    </div>
    <div class="home-slider-next swiper-button-next main-slider-nav">
      <i class="icofont-rounded-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        navigation: {
          nextEl: ".home-slider-next",
          prevEl: ".home-slider-prev",
        },
      },

      sliderData: [
        {
          id: 1,
          heading: "Institución Educativa Carrión Cusco",
          tag: "h1",
          text: "Somos una comunidad educativa con estrategias y valores pensados para tu futuro",
          bgImgSrc: "/images/hero-image/hero-1.webp",
        },
        {
          id: 2,
          heading: "Colegio Carrión Cusco",
          tag: "div",
          text: "Prepárate en Colegio Carrión para los desafios de mañana",
          bgImgSrc: "/images/hero-image/hero-2.webp",
        },
      ],
    };
  },
};
</script>