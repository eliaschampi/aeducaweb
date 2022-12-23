<template>
  <div
    class="page-title-section section-padding-top bg-cover"
    data-overlay="0.6"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="page-title">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
    <div class="page-breadcrumb position-static">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              v-for="item in items"
              :key="item.text"
              class="breadcrumb-item"
              :class="{ active: item.active }"
            >
              {{ item.text }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "title", "backgroundUrl"],
};
</script>