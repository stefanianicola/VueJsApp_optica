<template>
  <div class="protesis">
    <banner
      :mainTitle="title"
      :img="`../../src/assets/especialidades/protesis/${img}`"
      :text="text"
    ></banner>

    <div class="products">
      <h3 class="titleSection">Productos</h3>
      <b-row>
        <b-col cols="12" class="col-md-4" v-for="product in productsProtesis" :key="product.id">
          <div
            class="productos-protesis-img-wrapper"
            :style="'background-image: url(../../src/assets/especialidades/protesis/productos/' + product.prodOculares_photoDsk +');' "
          ></div>
          <h4>{{product.prodOculares_title}}</h4>
          <div v-html="product.prodOculares_descripcion"></div>
        </b-col>
      </b-row>
    </div>

    <div class="row w-prot">
      <div class="col-12 col-md-6 img imgProt"></div>
      <div class="col-12 col-md-6 textProt">
        <h3>¿Qué es una protesis?</h3>
        <p>
          La prótesis ocular es el reemplazo estético del ojo, por la falta total o parcial del mismo.
          Se fabrican con material acrílico antialérgico que garantiza un porte cómodo y el efecto estético deseado.
          Tras la operación, el cirujano colocará un conformador ocular que evitará la retracción de los tejidos y
          aproximadamente, después de 4 ó 6 semanas, el estado de la cavidad será óptimo para comenzar el estudio de la
          adaptación protésica.
        </p>
      </div>
    </div>
    <div class="row w-prot">
      <div class="col-12 d-block d-md-none img imgProt1"></div>
      <div class="col-12 col-md-6 textProt">
        <h3>Como se realizan</h3>
        <p>
          Se fabrican bajo prescripción de un óptico u oftalmólogo y según el tipo de operación,
          y tras el alta médica, se elige un tipo u otro de prótesis.
          Son elaboradas individualmente y reproducidas fielmente con las características del ojo sano:
          volumen, forma, color y otros detalles. El color del iris es realizado de forma artesanal, copiando
          cada una de las zonas, aureola, estroma y limbo esclerocorneal. La parte interna de la prótesis “copia” la
          zona de la cavidad, consiguiendo mayor movilidad.
        </p>
      </div>
      <div class="d-none d-md-block col-md-6 img imgProt1"></div>
    </div>
    <div class="row w-prot">
      <div class="col-12 col-md-6 img imgProt2"></div>
      <div class="col-12 col-md-6 textProt">
        <h3>Adaptación y aprendizaje</h3>
        <p>
          El procedimiento para la adaptación de una prótesis ocular es diferente en caso de pacientes portadores,
          o recién intervenidos. Éstos últimos se van a enfrentar a un proceso nuevo, donde el trato, la comunicación
          ocularista- paciente y la dedicación son primordiales.
        </p>
        <div class="w-modal">
          <button class="btnVer" @click="$bvModal.show('bv-modal-protesis')">VER MAS</button>
          <div>
            <b-modal size="lg" id="bv-modal-protesis" hide-backdrop  hide-footer>
              <template v-slot:modal-title>Adaptación y aprendizaje</template>
              <div class="d-block text-center">
                <p>
                  El procedimiento para la adaptación de una prótesis ocular es diferente en caso de pacientes portadores, o recién intervenidos. Éstos últimos se van a enfrentar a un proceso nuevo, donde el trato, la comunicación ocularista- paciente y la dedicación son primordiales.
                  Pacientes portadores: en la primera visita seleccionamos la nueva forma, muestras de color y esclera, en un plazo de tres semanas, nos pondremos en contacto con el paciente para entregarle la definitiva.
                </p>
                <p>
                  Pacientes recién intervenidos: en una primera visita realizamos anamnesis, evaluamos los tejidos y procedemos a la retirada del conformador.
                  Procedimiento y tiempos que debemos respetar en pacientes recién intervenidos
                  Si la cavidad se encuentra en buen estado, vamos a intentar dejarle una prótesis, lo más parecida posible a su ojo sano. Seleccionamos diámetro de iris, pupila, muestra de esclera, vascularización y muestras de color para ir elaborando de manera personalizada la prótesis que próximamente adaptaremos.
                  En la primera visita no realizamos la prótesis definitiva, debido a que luego de la intervención la conjuntiva adopta una serie de cambios, que serán tenidos en cuenta en los pasos siguientes. Pasadas tres semanas desde la primera visita, acude a revisión, el ocularista evalúa la superficie conjuntival, la adaptación y si lo ve conveniente se fabrica la prótesis definitiva.
                  En un plazo de dos semanas nos pondremos en contacto con el paciente para hacerle entrega de la prótesis, que en un principio, será la definitiva.
                  En Centro Óptico Falconaro seguimos el siguiente protocolo: controlar al paciente al mes de entregar la prótesis ocular y realizar controles cada 6 meses.
                </p>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <div class="row w-prot">
      <div class="col-12 d-block d-md-none img imgProt3"></div>
      <div class="col-12 col-md-6 textProt">
        <h3>Profesionales</h3>
        <p>
          Nuestro equipo profesional está conformado por Profesionales Ocularistas en permanente capacitación,
          actualización profesional y desarrollo tecnológico en la adaptación/fabricación de prótesis oculares.
        </p>
      </div>
      <div class="d-none d-md-block col-md-6 img imgProt3"></div>
    </div>
  </div>
</template>

<script>
import Banner from "../../banners/InternalPage.vue";
import * as text from "../../../assets/texts.js";
import * as types from "../../../store/types";
export default {
  data() {
    return {
      title: text.TITULO_BANNER_PROTESIS,
      img: "banner-prot.jpg",
      text: text.BANNER_TEXT_PROTESIS
    };
  },
  computed: {
    productsProtesis() {
      return this.$store.state.protesis.listOfProductsProtesis
        .productos_protOculares; // Recibo la variable 'state' con Vuex desde store.js
    }
  },
  created() {
    this.$store.dispatch(types.GET_PRODUCTS_PROTESIS); // 'action' de Vuex para llamar a la API desde store.js
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scooped>
@import "../../../styles/_all.scss";
.modal-open {
  font-weight: 100;
}
.protesis {
  position: relative;
  background-color: $white;
  z-index: 0;
  .titleSection {
    position: relative;
    background-color: $white;
    text-align: center;
    color: $baseBlue;
    font-weight: 600;
    font-size: 30px;
    padding: 30px;
    padding-top: 50px;
  }
  .w-prot {
    margin: -10px 0 0 0;
    .img {
      height: 250px;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      &.imgProt {
        background-image: url(../../../assets/especialidades/protesis/imgProt1.jpg);
        height: 250px;
        @include respond-to(medium) {
          height: auto;
        }
      }
      &.imgProt1 {
        background-image: url(../../../assets/especialidades/protesis/imgProt2.png);
        height: 250px;
        @include respond-to(medium) {
          height: auto;
        }
      }
      &.imgProt2 {
        background-image: url(../../../assets/especialidades/protesis/imgProt3.jpg);
        height: 250px;
        @include respond-to(medium) {
          height: auto;
        }
      }
      &.imgProt3 {
        background-image: url(../../../assets/especialidades/protesis/imgProt4.jpg);
        height: 250px;
        @include respond-to(medium) {
          height: auto;
        }
      }
    }
    .textProt {
      position: relative;
      background-color: $grey;
      color: $baseBlue;
      padding: 20px;
      h3 {
        font-weight: 600;
        padding-bottom: 10px;
        padding-top: 40px;
      }
      p {
        font-weight: 100;
        color: $black;
      }
      .btnVer {
        position: absolute;
        right: 10px;
        bottom: 10px;
        border: 1px solid $baseBlue;
        background-color: $grey;
        color: $baseBlue;
        border-radius: 5px;
        margin-bottom: 10px;
        &:hover {
          background-color: $baseBlue;
          border: 1px solid $white;
          color: $white;
        }
        @include respond-to(medium) {
          right: 50px;
        }
      }
      @include respond-to(medium) {
        padding: 0 50px 0 50px;
      }
    }
    @include respond-to(medium) {
      height: 380px;
    }
    @include respond-to(normal) {
      height: 300px;
    }
  }
  .products {
    position: relative;
    background: white;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 30px;
    .productos-protesis-img-wrapper {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 300px;
    }
    h4 {
      font-size: 20px;
      padding: 20px 0;
      text-align: center;
      margin: 0;
    }
    p {
      font-weight: 100;
      padding-bottom: 20px;
      color: #6f6f70;
      font-size: 16px;
    }
  }
}
</style>