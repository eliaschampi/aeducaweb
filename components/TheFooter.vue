<template>
  <div class="footer-section" :style="{ backgroundColor: '#030e22' }">
    <div class="container">
      <!-- Footer Top Widgets Start -->
      <div class="row section-padding pt-0 mtn-30">
        <!-- Footer Widget Start -->
        <div class="col-md-4 col-sm-6 col-12 mt-30">
          <div class="footer-widget">
            <div class="footer-logo">
              <n-link to="/">
                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo" />
              </n-link>
            </div>
            <div class="footer-widget-content">
              <div class="content">
                <p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=+51952329727&text&app_absent=0"
                  >
                    {{ footerData.footerAboutWidget.telephone }}
                  </a>
                </p>
                <p>
                  <a :href="`mailto:${footerData.footerAboutWidget.email}`">
                    {{ footerData.footerAboutWidget.email }}
                  </a>
                </p>
              </div>
              <div class="footer-social-inline">
                <a :href="footerData.footerAboutWidget.ytbUrl" target="_blank">
                  <i class="icofont-youtube-play"></i>
                </a>
                <a :href="footerData.footerAboutWidget.fbUrl" target="_blank">
                  <i class="icofont-facebook"></i>
                </a>
                <a
                  :href="footerData.footerAboutWidget.aeducaUrl"
                  target="_blank"
                  title="Aeduca"
                >
                  <i class="icofont-web"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleOne }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListOne" :key="index">
                  <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleTwo }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListTwo" :key="index">
                  <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleThree }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li
                  v-for="(nav, index) in footerData.navListThree"
                  :key="index"
                >
                  <template v-if="nav.isUrl">
                    <a :href="nav.navUrl" target="_blank">{{ nav.navTitle }}</a>
                  </template>
                  <n-link v-else :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleFour }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListFour" :key="index">
                  <template v-if="nav.isUrl">
                    <a :href="nav.navUrl" target="_blank">{{ nav.navTitle }}</a>
                  </template>
                  <n-link v-else :to="nav.navUrl">{{ nav.navTitle }}</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->
      </div>
      <!-- Footer Top Widgets End -->

      <!-- Footer Copyright Start -->
      <div class="row">
        <div class="col">
          <p class="copyright">
            Copyright &copy; 2022
            <a href="https://www.eliaschampi.com/" target="_blank">Elias</a>.
            Todos los derechos reservados
          </p>
        </div>
      </div>
      <!-- Footer Copyright End -->
    </div>
  </div>
</template>

<script>
import footerData from "~/data/footer.json";

export default {
  data() {
    return {
      footerData,
    };
  },
};
</script>