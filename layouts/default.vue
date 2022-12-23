<template>
  <div class="main-container">
    <TheHeader />

    <OffCanvasMobileMenu />

    <SearchPopup />

    <Nuxt />

    <TheFooter />
  </div>
</template>
<script>
export default {
  components: {
    TheHeader: () => import("~/components/TheHeader"),
    OffCanvasMobileMenu: () => import("~/components/OffCanvasMobileMenu"),
    SearchPopup: () => import("~/components/SearchPopup"),
    TheFooter: () => import("~/components/TheFooter"),
  },
};
</script>
