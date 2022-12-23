<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Recursos y Documentos"
      backgroundUrl="/images/bg/bg-about.webp"
    />

    <div class="section-padding">
      <div class="container">
        <SectionTitle
          title="Documentos Carrión"
          subTitle="Esta es nuestra carpeta pública de documentos, se íra actualizando conforme agreguemos según requerimientos"
        />

        <table class="table table-hover table-striped table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <div class="d-flex align-items-center cursor-pointer">
                  Nombre del archivo
                </div>
              </th>
              <th scope="col">Descargar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>
                <div class="d-flex align-items-center cursor-pointer">
                  <i
                    class="icofont-file-pdf mr-2 text-primary font-weight-bold"
                  ></i>
                  Boletin Informativo 2022
                </div>
              </td>
              <td>
                <a
                  href="https://drive.google.com/file/d/1DLc8uQWGqyvHGFl_qD2SbRymb_KuQKxO/view?usp=sharing"
                  target="__blank"
                  class="download-btn"
                >
                  Descargar
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">01</th>
              <td>
                <div class="d-flex align-items-center cursor-pointer">
                  <i
                    class="icofont-file-pdf mr-2 text-primary font-weight-bold"
                  ></i>
                  Información de la institución educativa
                </div>
              </td>
              <td>
                <a
                  href="https://drive.google.com/file/d/1-UgCBqrFsQ04IMBPcTYtizk1BmhoUosL/view?usp=sharing"
                  target="__blank"
                  class="download-btn"
                >
                  Descargar
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">02</th>
              <td>
                <div class="d-flex align-items-center cursor-pointer">
                  <i
                    class="icofont-file-pdf mr-2 text-primary font-weight-bold"
                  ></i>
                  Requisitos para matrícula 2022
                </div>
              </td>
              <td>
                <div class="download-btn disabled">Descargar</div>
              </td>
            </tr>
            <tr>
              <th scope="row">03</th>
              <td>
                <div class="d-flex align-items-center cursor-pointer">
                  <i
                    class="icofont-file-pdf mr-2 text-primary font-weight-bold"
                  ></i>
                  Proyectos escolares 2022
                </div>
              </td>
              <td>
                <div class="download-btn disabled">Descargar</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="alert alert-info">
          Nuestra calendarización anual ya esta disponible.
          <n-link to="/calendarizacion" class="alert-link">Revisa aquí</n-link>
        </div>
      </div>
    </div>

    <ValuesSection />

    <CallToActionTwo />
  </div>
</template>
<script>
export default {
  name: "documentos",
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    SectionTitle: () => import("~/components/SectionTitle"),
    ValuesSection: () => import("~/components/ValuesSection"),
    CallToActionTwo: () => import("~/components/CallToActionTwo"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Documentos",
          active: true,
        },
      ],
    };
  },

  head() {
    return {
      title: "Recursos Colegio Carrión",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Colegio Carrión Cusco, Desarrollamos el potencial de nuestros estudiantes",
        },
      ],
    };
  },
};
</script>