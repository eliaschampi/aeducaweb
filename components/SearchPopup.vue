<template>
  <div class="main-search-active" id="search-popup">
    <div class="sidebar-search-icon">
      <button
        class="search-close"
        @click="toggleClass('removeClass', 'search-popup-open')"
      >
        <i class="icofont-ui-close"></i>
      </button>
    </div>
    <div class="sidebar-search-input">
      <form>
        <div class="form-search">
          <input
            id="search"
            class="input-text"
            value=""
            placeholder=""
            type="search"
          />
          <button>
            <i class="icofont-ui-search"></i>
          </button>
        </div>
      </form>
      <p class="form-description">¿Que vamos a buscar hoy?</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>