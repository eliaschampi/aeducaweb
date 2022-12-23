<template>
  <div>
    <BreadcrumbOne
      :items="items"
      title="Calendario Anual"
      backgroundUrl="/images/bg/bg-about-2.webp"
    />
    <div class="section-padding">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title fz-32">Nuestro calendario anual 2022</h2>
        </div>

        <div class="alert alert-info">
          El proceso de matrícula ya inició. Estará aperturado durante el ciclo
          vacacional 2022.
          <n-link to="/cupon" class="alert-link"
            >Iniciar mi pre-inscripción</n-link
          >
        </div>
        <div class="alert alert-warning">
          El horaio de atencion en la oficina de San jerónimo es 08:00 a.m hasta
          01:00.pm
        </div>
        <div class="calendar-wrapper">
          <div class="calendar">
            <ol class="day-names">
              <li>Enero</li>
              <li>Febrero</li>
              <li>Marzo</li>
              <li>Abril</li>
              <li>Mayo</li>
              <li>Junio</li>
              <li>Julio</li>
            </ol>
            <ol class="days">
              <li class="event-date">
                <div class="date">03</div>
                <div class="event all-day end">
                  Inicio de Clases
                  <br />
                  Academia
                </div>
              </li>
              <li>
                <div class="date">01</div>
              </li>
              <li class="event-date">
                <div class="date">01</div>
                <div class="event all-day">Enicio de Clases</div>
              </li>
              <li>
                <div class="date">01</div>
              </li>
              <li>
                <div class="date">01</div>
              </li>
              <li>
                <div class="date">01</div>
              </li>
              <li>
                <div class="date">01</div>
              </li>
              <!-- line 02 -->
              <li>
                <div class="date">04</div>
              </li>
              <li>
                <div class="date">02</div>
              </li>
              <li>
                <div class="date">02</div>
              </li>
              <li>
                <div class="date">02</div>
              </li>
              <li>
                <div class="date">02</div>
              </li>
              <li class="event-date">
                <div class="date">02</div>
                <div class="event all-day span-2">Todos leemos</div>
              </li>
              <li>
                <div class="date">02</div>
              </li>
              <!-- line3 -->
              <li>
                <div class="date">05</div>
              </li>
              <li>
                <div class="date">03</div>
              </li>
              <li>
                <div class="date">03</div>
              </li>
              <li>
                <div class="date">03</div>
              </li>
              <li>
                <div class="date">03</div>
              </li>
              <li>
                <div class="date">03</div>
              </li>
              <li>
                <div class="date">03</div>
                <!--   <div class="event">Event Name</div>
              <div class="event">Event Name</div> -->
              </li>
              <!-- line4 -->
              <li>
                <div class="date">06</div>
              </li>
              <li>
                <div class="date">07</div>
                <!--    <div class="event clear">&nbsp;</div>
              <div class="event">Event Name</div> -->
              </li>
              <li>
                <div class="date">04</div>
              </li>
              <li>
                <div class="date">04</div>
              </li>
              <li>
                <div class="date">04</div>
              </li>
              <li>
                <div class="date">04</div>
              </li>
              <li>
                <div class="date">04</div>
              </li>
              <!-- line5 -->
              <li class="event-date">
                <div class="date">28</div>
                <div class="event begin">
                  ¡Vamos Carrión! <br />
                  Peru vs Colombia
                </div>
              </li>
              <li>
                <div class="date">08</div>
              </li>
              <li>
                <div class="date">05</div>
              </li>
              <li>
                <div class="date">05</div>
              </li>
              <li>
                <div class="date">05</div>
              </li>
              <li>
                <div class="date">05</div>
              </li>
              <li>
                <div class="date">05</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <ValuesSection />
  </div>
</template>
<script>
export default {
  name: "calendarizacion",
  components: {
    BreadcrumbOne: () => import("~/components/BreadcrumbOne"),
    ValuesSection: () => import("~/components/ValuesSection"),
  },
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: "/",
        },
        {
          text: "Calendarización",
          active: true,
        },
      ],
    };
  },
  head() {
    return {
      title: "Calendarización",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Institución educativa Carrión Cusco te prepara para triunfar en la vida",
        },
      ],
    };
  },
};
</script>