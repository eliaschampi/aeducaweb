<template>
  <nav class="site-main-menu">
    <ul>
      <li>
        <n-link to="/">Inicio</n-link>
      </li>
      <li class="has-submenu">
        <a href="#">Nosotros</a>
        <ul class="sub-menu">
          <li>
            <n-link to="/about">¿Quienes somos?</n-link>
          </li>
          <li>
            <n-link to="/primaria">Primaria</n-link>
          </li>
          <li>
            <n-link to="/secundaria">Secundaria</n-link>
          </li>
          <li>
            <n-link to="/academia">Academia</n-link>
          </li>
          <li>
            <n-link to="/psicologia">Dpto. de Psicología</n-link>
          </li>
          <li>
            <n-link to="/eventos">Eventos y talleres</n-link>
          </li>
          <li>
            <n-link to="/familia">Familia</n-link>
          </li>
        </ul>
      </li>

      <li class="has-submenu">
        <a href="#">Matrículas 2022</a>
        <ul class="sub-menu">
          <li>
            <n-link to="/cupon"> Postula aquí </n-link>
          </li>
          <li>
            <n-link to="/faq"> Preguntas frecuentes </n-link>
          </li>

          <li>
            <n-link to="/calendarizacion">Calendario</n-link>
          </li>
        </ul>
      </li>

      <li class="has-submenu">
        <a href="#">Vida escolar</a>
        <ul class="sub-menu">
          <li>
            <a href="https://www.aula.carrioneduca.edu.pe" target="_blank">
              Aula virtual Aeduca
            </a>
          </li>
          <li>
            <n-link to="/under">Comunidad</n-link>
          </li>
          <li>
            <n-link to="/under">Biblioteca</n-link>
          </li>
        </ul>
      </li>
      <li class="has-submenu">
        <a href="#">Recursos</a>
        <ul class="sub-menu">
          <li>
            <n-link to="/documentos"> Recursos y Documentos </n-link>
          </li>
          <li>
            <n-link to="/insignia"> Insignia </n-link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1DLc8uQWGqyvHGFl_qD2SbRymb_KuQKxO/view?usp=sharing"
              target="__blank"
            >
              Boletin informativo
            </a>
          </li>
          <li>
            <a href="https://www.admin.carrioneduca.edu.pe" target="_blank">
              Sistema administrativo
            </a>
          </li>
        </ul>
      </li>
      <li>
        <n-link to="/under">Noticias</n-link>
      </li>
    </ul>
  </nav>
</template>