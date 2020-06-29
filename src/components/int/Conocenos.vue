<template>
  <div>
    <banner :mainTitle="title" :text="bannerText"  :img="`../../src/assets/home/${img}`"></banner>
    <div class="conocenos">
      <h3>Nuestro Staff profesional</h3>
      <p class="intro">
        Comprometidos en la actualización y capacitación profesional permanente,
        últimas tendencias y vanguardia para brindar un servicio acorde a las necesidades
        de cada paciente.
      </p>
      <div class="row m-0">
        <div class="cardPerson col-12 col-md-6">
          <div class="img1 imgConocenos"></div>
          <div class="description">
            <h4>PROFESOR GUILLERMO SANTIAGO</h4>
            <p
              class="m-0"
            >Óptico Contactólogo -  Optómetra especializado en Baja Visión y Prótesis Oculares.</p>
          </div>
          <div class="body-text">
            <p>Docente de la Universidad Nacional de La Plata y Universidad Nacional de Villa María, a cargo de las cátedras de Baja Visión y Prótesis Oculares / Oculofaciales.</p>
            <p>Fundador y Director técnico del Centro Optico Falconaro desde 1986 bajo un perfil de atención profesional personalizada, conjugando calidad / distinción en Óptica y Contactología especializada y de presión.</p>
          </div>
        </div>
        <div class="cardPerson col-12 col-md-6">
          <div class="img2 imgConocenos"></div>
          <div class="description">
            <h4>GABRIELA NICOLÁS</h4>
            <p class="m-0">Óptica Técnica Especializada en Contactología – Prótesis Oculares (U.B.A.) y Rehabilitación Visual.</p>
          </div>
          <div class="body-text">
            <p>Co-Directora Tecnica del Centro Optico Falconaro.</p>
          </div>
        </div>
      </div>

      <div class="row m-0">
        <div class="cardPerson col-12 col-md-6">
          <div class="img3 imgConocenos"></div>
          <div class="description">
            <h4>Lic. Federico Falconaro Óptico Técnico</h4>
            <p class="m-0">Contactólogo (Universidad de Morón)</p>
          </div>
          <div class="body-text">
            <p>Especializado en Óptica Oftálmica e Instrumental.</p>
          </div>
        </div>
        <div class="cardPerson col-12 col-md-6">
          <div class="img4 imgConocenos"></div>
          <div class="description">
            <h4>MATÍAS FALCONARO</h4>
            <p class="m-0">Técnico Químico ( Ing. Huergo )</p>
          </div>
          <div class="body-text">
            <p>
              Especializado en Polímeros y fabricación de Prótesis Oculares.   Departamento de Ocularistica y desarrollo de Prótesis Oculares.
            </p>
          </div>
        </div>
        <div class="cardPerson col-12 col-md-6">
          <div class="img5 imgConocenos"></div>
          <div class="description">
            <h4>Lucia Lionetti</h4>
            <p class="m-0"></p>
          </div>
          <div class="body-text">
            <p>Administración – manejo de cuentas corrientes y facturacion.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../banners/InternalPage.vue";
import * as text from "../../assets/texts.js";
export default {
  data() {
    return {
      title: text.BANNER_TEXT_CONOCENOS_TITLE,
      bannerText: text.BANNER_TEXT_CONOCENOS,
      img: "trayectoria.jpg"
    };
  },

  components: {
    Banner
  }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.conocenos {
  position: relative;
  padding: 100px 10% 30px;
  background: white;
  h3 {
    text-align: center;
  }
  .intro {
    line-height: 30px;
    text-align: center;
    font-weight: 100;
  }
  .cardPerson {
    width: 100%;
    font-weight: 100;
    padding: 20px 0;
    .imgConocenos {
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      height: 440px;
      &.img1 {
        background-image: url(../../assets/conocenos/Guillermo.jpg);
      }
      &.img2 {
        background-image: url(../../assets/conocenos/Gabriela.jpg);
      }
      &.img3 {
        background-image: url(../../assets/conocenos/federico.jpg);
      }
      &.img4 {
        background-image: url(../../assets/conocenos/Matias.jpg);
      }
      &.img5 {
        background-image: url(../../assets/conocenos/lucha.jpg);
      }
    }

    .description {
      line-height: 25px;
      text-align: center;
      border-bottom: 5px solid $baseBlue;
      padding: 20px 0;
      h4 {
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
      }
      p {
        font-weight: 300;
        color: #6f6f70;
        font-size: 16px;
        line-height: 120%;
      }
    }
    .body-text {
      margin-top: 30px;
      p {
        font-size: 14px;
      }
    }
    @include respond-to(medium) {
      padding: 30px;
    }
  }
}
</style>


