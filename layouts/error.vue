<template>
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <div class="text-center title">404</div>
            </div>

            <div class="contant_box_404">
              <div class="h2 title">Ohh, algo ocurrió aquí</div>
              <p>Parece que la página que buscas no esta disponible</p>
              <n-link class="btn btn-success" to="/"> Estar a salvo </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped>
.page_404 {
  border-top: 6.6rem solid #030E22;
  margin-bottom: 1rem;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;

  .title {
    font-size: 80px;
  }
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #1640a3;
  margin: 20px 0;
  display: inline-block;
}

.contant_box_404 {
  margin-top: -50px;
}
</style>