<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Carrión Cusco"
      backgroundUrl="/images/bg/classroom.webp"
    />
    <div class="section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title fz-32">Aún estamos construyendo esto.</h2>
        </div>
        <div class="under text-center">
          <img src="/images/about/under.webp" alt="i love kath" />
        </div>
      </div>
    </div>
    <Newsletter />
  </div>
</template>
<script>
export default {
  name: "under",
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    Newsletter: () => import("~/components/Newsletter"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Novedades",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Colegio Carrión",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Colegio Carrión. Nacimos para triunfar",
        },
      ],
    };
  },
};
</script>