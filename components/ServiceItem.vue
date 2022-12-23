<template>
  <div class="icon-box text-center" :class="addClassName">
    <div class="icon logus">
      <img class="svgInject" :src="service.iconSrc" :alt="service.title" />
    </div>
    <div class="content">
      <h3 class="title">{{ service.title }}</h3>
      <div class="desc">
        <p>{{ service.text }}</p>
      </div>
      <button class="btn text-primary">Descargar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["service", "addClassName"],
};
</script>