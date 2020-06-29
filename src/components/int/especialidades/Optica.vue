<template>
  <div class="optica">
    <banner
      :mainTitle="title"
      :img="`../../src/assets/especialidades/optica/${img}`"
      :text="text"
      :titleText="titleText"
    ></banner>
    <div class="armazones container-fluid">
      <h3 class="titleSection">Armazones</h3>
      <div class="row m-0">
        <div
          class="col-12 col-md-2 armazon"
          v-for="armazon in data.listOfArmazones.armazones_Optica"
          :key="armazon.id"
        >
          <img
            :src="`../../src/assets/especialidades/optica/armazones/${armazon.armOptica_photo}`"
            :alt="armazon.armOptica_title"
          />
        </div>
      </div>
    </div>

    <div class="marcas">
      <app-carrousel :items="data.listOfMarcas.marcas_Optica" :more="false" type="marcasarmazones"></app-carrousel>
    </div>
    <div class="typeCristales">
      <h3>Cristales</h3>
      <div class="row m-0">
        <div class="imgCristales col-12 col-md-6">
          <div class="row m-0">
            <div
              class="col-12 col-md-4 w-img"
              v-for="cristal in data.listOfCristales.cristales_Optica"
              :key="cristal.id"
            >
              <img
                :src="`../../src/assets/especialidades/optica/cristales/${cristal.crtOptica_photo}`"
                :alt="cristal.crtOptica_title"
              />
            </div>
          </div>
        </div>

        <div class="features col-12 col-md-6">
          <div class="features-individual">
            <h4>Multifocales</h4>
            <p>Nos permiten ver en diferentes distancias (lejos, intermedia y cerca), utilizando un solo anteojo.</p>
          </div>
          <div class="features-individual">
            <h4>Ocupacionales</h4>
            <p>Son utilizados principalmente en oficinas donde prevalece la lectura en distancia intermedia y cerca.</p>
          </div>
          <div class="features-individual">
            <h4>Polarizados</h4>
            <p>Las lentes polarizadas brindan una visión nítida, con mayor contraste y sin reflejos.</p>
          </div>
          <div class="features-individual">
            <h4>Altos índices</h4>
            <p>Estos cristales nos permiten fabricar lentes más estéticas, delgadas y resistentes, debido a su alto índice de refracción.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../banners/InternalPage.vue";
import * as text from "../../../assets/texts.js";
import * as types from "../../../store/types";
import Carrousel from "../../elements/Carrousel.vue";
export default {
  data() {
    return {
      title: text.TITULO_BANNER_OPTICA,
      img: "banner-optica.jpg",
      imgMob: "banner-opticaMob.jpg",
      text: text.BANNER_TEXT_OPTICA,
      titleText: text.BANNER_TITLE_TEXT_OPTICA
    };
  },
  created() {
    this.$store.dispatch(types.GET_OPTICA); // 'action' de Vuex para llamar a la API desde store.js
  },
  computed: {
    data() {
      return this.$store.state.optica;
    }
  },
  components: {
    Banner,
    appCarrousel: Carrousel
  }
};
</script>

<style lang="scss" scooped>
@import "../../../styles/_all.scss";
.optica {
  position: relative;
  background-color: $white;
  z-index: 0;
  .titleSection {
    text-align: center;
    color: $baseBlue;
    font-weight: 600;
    font-size: 30px;
    padding: 20px;
    padding-bottom: 0;
  }
  .armazones {
    position: relative;
    background-color: $white;
    padding: 0 20px;
    .armazon {
      background-color: $white;
      img {
        width: 100%;
        transform: scale(0.9);
        background: #fff;
        &:hover {
          transform: scale(1);
        }
      }
    }
    @include respond-to(medium) {
      padding: 0 50px;
    }
  }
  .marcas {
    position: relative;
    background-color: $white;
    h3 {
      padding: 40px 0;
      text-align: center;
      font-weight: 600;
    }
    .vueperslides {
      .vueperslides__arrow {
        background-color: $lightGrey;
        border-radius: 100%;
        &.vueperslides__arrow--next {
          right: -3em;
        }
      }
      svg {
        width: 30px;
        padding: 10px;
      }
      .vueperslide {
        background-size: 50%;
        background-size: 70%;
        background-repeat: no-repeat;
        &.vueperslide--active {
          &.vueperslide--visible {
            background-size: 100%;
          }
        }
      }
    }
  }
  .typeCristales {
    position: relative;
    background-color: $white;
    margin-top: -10px;
    h3 {
      text-align: center;
      padding: 30px 0;
      font-weight: 600;
    }
    .typeCristales {
      position: relative;
      background-color: $white;
      margin-top: -10px;
      h3 {
        text-align: center;
        padding: 30px 0;
      }
    }
    .imgCristales {
      .w-img {
        padding: 30px;
        img {
          width: 100%;
        }
      }
    }
    .features {
      text-align: center;
      background-color: $baseBlue;
      color: $white;
      font-weight: 100;
      padding: 30px 20px;
      .features-individual {
         @include respond-to(normal) {
           margin: 50px 0 50px 0;
         }
      }
    }
  }
}
</style>