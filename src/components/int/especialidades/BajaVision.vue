<template>
  <div class="bajaVision">
    <banner
      :mainTitle="title"
      :img="`../../src/assets/especialidades/baja-vision/${img}`"
      :text="text"
    ></banner>

    <div class="textBajaVision">
      <p>
        La agudeza visual tiene que ser
        <strong>
          igual o inferior a 0.3 (30% de visión) y el campo visual
          igual o menor a 20º
        </strong>. La pérdida afecta a los dos ojos, pero aún queda un resto visual útil.
        La baja visión no es una enfermedad y por tanto
        <strong>no tiene cura</strong>, se trata de un proceso irreversible.
        No obstante gracias a la rehabilitación visual y gafas específicas se puede seguir disfrutando de una
        vida autónoma.
      </p>
      <p>
        La baja visión está causada por diferentes patologías que pueden estar asociadas a
        <strong>
          la edad,
          traumatismos o enfermedades congénitas
        </strong>; es un concepto distinto al de ceguera.
      </p>
      <p
        class="title"
      >Las principales patologías causantes de Baja Visión en los países desarrollados son:</p>
      <p>- Degeneración Macular Asociada a la Edad (DMAE).</p>
      <p>
        - Glaucoma.
        - Retinopatía diabética.
        - Cataratas.
        - Retinosis Pigmentaria.
        - Miopía degenerativa.
        - Desprendimiento de Retina.
      </p>
      <p>
        <strong>Otras en menor medida:</strong> acromatopsias, albinismo, aniridia, colobomas,
        distrofias, hemianopsias, nistagmus, uveítis y otras retinopatías y enfermedades congénitas.
      </p>
      <p class="title">¿Cómo saber si tengo baja visión?</p>
      <p>
        La pérdida de visión produce efectos tales como la
        <strong>
          dificultad en las
          tareas diarias
        </strong>, la pérdida de independencia, la dificultad para encontrar trabajo o mantener el actual
        y dificultades comunicativas.
      </p>
      <p>
        Todo esto puede desencadenar
        <strong>problemas físicos</strong> (accidentes, movilidad reducida…),
        <strong>problemas emocionales</strong> (depresión, ansiedad, baja autoestima, soledad) y
        <strong>problemas sociales</strong>
        (dificultades económicas y relaciones sociales afectadas).
      </p>
    </div>
    <div class="imgs">
      <div class="row m-0">
        <div class="img1 col-12 col-md-6"></div>
        <div class="img2 col-12 col-md-6"></div>
      </div>

      <div class="row m-0">
        <div class="img3 col-12 col-md-6"></div>
        <div class="img4 col-12 col-md-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../banners/InternalPage.vue";
import * as text from "../../../assets/texts.js";
export default {
  data() {
    return {
      title: text.TITULO_BANNER_BAJAVISION,
      text: text.BANNER_TEXT_BAJA_VISION,
      img: "banner-baja-vision.png"
    };
  },

  components: {
    Banner
  }
};
</script>

<style lang="scss" scooped>
@import "../../../styles/_all.scss";
.bajaVision {
  position: relative;
  color: $black;
  font-weight: 100;
  .textBajaVision {
    background-image: url(../../../assets/especialidades/baja-vision/fondoTexto.jpg);
    background-repeat: no-repeat;
    background-size: 200%;
    background-position-x: center;
    background-position-y: center;
    position: relative;
    padding: 20px 20px 20px 0;
    line-height: 30px;
    background-color: $white;
    .title {
      font-weight: 500;
      font-size: 20px;
    }
    p {
      @include respond-to(medium) {
        padding-left: 300px;
        font-size: 16px;
      }
      @include respond-to(normal) {
        padding-left: 400px;
        font-size: 16px;
      }
    }
    @include respond-to(medium) {
      padding: 50px 50px 50px 0;
    }
  }
  .imgs {
    .img1 {
      background-image: url(../../../assets/especialidades/baja-vision/img3.png);
      width: 100%;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      @include respond-to(medium) {
        height: 300px;
        //background-size: cover;
      }
    }
    .img2 {
      background-image: url(../../../assets/especialidades/baja-vision/img2.png);
      width: 100%;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      @include respond-to(medium) {
        height: 300px;
        //background-size: cover;
      }
    }
    .img3 {
      background-image: url(../../../assets/especialidades/baja-vision/img1.jpg);
      width: 100%;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      @include respond-to(medium) {
        height: 300px;
        //background-size: cover;
      }
    }
    .img4 {
      background-image: url(../../../assets/especialidades/baja-vision/img4.jpg);
      width: 100%;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      @include respond-to(medium) {
        height: 300px;
        //background-size: cover;
      }
    }
  }
}
</style>