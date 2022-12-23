<template>
  <div class="section-padding" :style="{ backgroundColor: '#f8faff' }">
    <div class="container">
      <div class="row align-items-center mb-30">
        <div class="col-lg-5">
          <!-- Section Title Two Start -->
          <div class="section-title-two">
            <span class="sub-title"
              >Colección de historias "Familia Carrión".</span
            >
            <h3 class="title">Nuestra galería</h3>
          </div>
          <!-- Section Title Two End -->
        </div>
        <div class="col-lg-7">
          <div class="messonry-button text-lg-right text-left">
            <button data-filter="all">
              <span class="filter-text">Todo</span>
            </button>
            <button data-filter=".casa">
              <span class="filter-text">Casa Carrión</span>
            </button>
            <button data-filter=".todosleemos">
              <span class="filter-text">Todos leemos</span>
            </button>
            <button data-filter=".arte">
              <span class="filter-text">Arte y deporte</span>
            </button>
            <button data-filter=".concursos">
              <span class="filter-text">Concursos</span>
            </button>
            <button data-filter=".paseos">
              <span class="filter-text">Paseos</span>
            </button>
          </div>
        </div>
      </div>

      <div
        class="
          row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
          no-gutters
          box
        "
      >
        <div
          class="gallery-item col mix"
          :class="portfolio.category"
          v-for="(portfolio, index) in portfolioData"
          :key="index"
        >
          <div class="single-portfolio" @click="ohMyImageHasOpen(index)">
            <div class="thumbnail">
              <img
                class="img-fluid"
                :src="portfolio.thumb"
                :alt="portfolio.caption"
              />
            </div>
            <div class="content">
              <h5 class="title">
                <p>{{ portfolio.caption }}</p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <LightBox
        ref="mylight"
        :show-caption="true"
        :show-light-box="false"
        :media="portfolioData"
      ></LightBox>
    </client-only>
  </div>
</template>

<script>
import portfolioData from "~/data/portfolios.json";

export default {
  data() {
    return {
      portfolioData,
      mixer: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector(".box");
      this.mixer = new this.mixitup(containerEl);
    });
  },
  methods: {
    ohMyImageHasOpen(index) {
      this.$refs.mylight.showImage(index);
    },
  },
};
</script>