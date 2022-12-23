<template>
  <div class="contact-form">
    <form class="row mtn-30" @submit.prevent="handleSendMyMail">
      <div class="col-md-6 col-12 mt-30">
        <input
          type="text"
          required
          maxlength="20"
          placeholder="Nombre del estudiante"
          name="sname"
          v-model="contactData.sname"
        />
      </div>
      <div class="col-md-6 col-12 mt-30">
        <input
          type="text"
          required
          maxlength="30"
          placeholder="Apellidos del estudiante"
          name="slastname"
          v-model="contactData.slastname"
        />
      </div>
      <div class="col-md-6 col-12 mt-30">
        <input
          type="text"
          required
          maxlength="45"
          placeholder="Nombre completo del apoderado"
          name="pname"
          v-model="contactData.pname"
        />
      </div>
      <div class="col-md-6 col-12 mt-30">
        <input
          type="text"
          required
          maxlength="20"
          placeholder="Num cel. ejm 99462...."
          name="phone"
          v-model="contactData.phone"
        />
      </div>
      <div class="col-md-6 col-12 mt-30">
        <input
          type="text"
          required
          maxlength="20"
          placeholder="Nivel ejm. Primaria"
          name="level"
          v-model="contactData.level"
        />
      </div>
      <div class="col-md-6 col-12 mt-30">
        <input
          required
          maxlength="10"
          type="text"
          placeholder="Grado ejm. 1ro"
          name="degree"
          v-model="contactData.degree"
        />
      </div>
      <div class="col-12 mt-30">
        <textarea
          name="message"
          maxlength="200"
          placeholder="Mensaje (no es obligatorio)"
          v-model="contactData.message"
        ></textarea>
      </div>
      <div class="col-12 text-center mt-30">
        <button class="btn btn-primary" :disabled="loading">
          {{ loading ? "Enviando.." : "Enviar" }}
        </button>
      </div>
    </form>
    <template v-if="message">
      <div v-if="isError" class="mt-4 alert alert-danger">
        {{ message }}
      </div>
      <div v-else class="mt-4 alert alert-info">
        ¡Felicidades! Ganaste <b>5%</b> de descuento.
        <br />
        Copia y guarda el siguiente código para recibir tu descuento:
        <b>{{ message }}</b>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactData: {
        sname: "",
        slastnane: "",
        pname: "",
        phone: "",
        level: "",
        degree: "",
        message: "",
      },
      messages: [],
      message: "",
      isError: false,
      loading: false,
    };
  },
  methods: {
    async handleSendMyMail() {
      this.messages = [];
      this.message = "";
      this.isError = false;
      this.loading = true;
      try {
        const data = await this.$axios.$post("/mail", {
          data: this.contactData,
        });
        this.message = data.message;
      } catch (error) {
        this.isError = true;
        const err = error.response;
        if (err.status === 422) {
          this.messages = err.data ? err.data.messages : [];
          this.message = "Ingrese correctamente todos los campos";
        } else {
          this.message = err.data.message;
        }
      } finally {
        this.loading = false;
        this.contactData = {
          sname: "",
          slastnane: "",
          pname: "",
          phone: "",
          level: "",
          degree: "",
          message: "",
        };
      }
    },
  },
};
</script>