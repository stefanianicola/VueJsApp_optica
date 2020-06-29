<template>
  <div>
    <banner :mainTitle="title" :img="`../../src/assets/especialidades/contactologia/${img}`" :text="text"></banner>
    <div class="lentes">
      <div class="howDo row m-0">
        <div class="howDoImg col-12 col-md-6"></div>
        <div class="col-12 col-md-6 textHowDo">
          <h3>Como adaptamos</h3>
          <p>
            Disponemos de gabinetes de adaptación de lentes de contacto
            con equipamiento e instrumental de alta precisión
            (Biomicroscopios – Autokeratometros - Videoqueratografia) herramientas
            diagnósticas computarizadas que garantizan una adaptación totalmente personalizada
            a la necesidad de cada caso clínico.
          </p>
        </div>
      </div>
      <div class="typeOfLent">
        <h3>Tipos de Lentes</h3>
        <b-row>
          <b-col cols="12" class="col-md-4" v-for="tipo in tiposDeLentes" :key="tipo.id">
            <div class="tipo-lente-img-wrapper" :style="'background-image: url(../../src/assets/especialidades/contactologia/tiposDeLentes/' + tipo.tLentes_photoDsk +');' "></div>
            <h4>{{tipo.tLentes_title}}</h4>
            <p class="text-type">{{tipo.tLentes_description}}</p>
          </b-col>
        </b-row>
      </div>
      <div class="products">
        <h3>Nuestros productos</h3>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc1.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc2.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc3.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc4.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc5.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc6.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc7.png" alt />
        </div>
        <div class="col-6 col-md-3 float-left">
          <img src="../../../assets/especialidades/contactologia/productos/produc8.png" alt />
        </div>
      </div>
      <div class="avoidProblems row m-0">
        <div class="avoidImg col-12 col-md-6"></div>
        <div class="w-text col-12 col-md-6">
          <h3>Como evitar problemas en el uso</h3>
          <p>
            Quienes usan lentes de contacto sin una adaptación y control
            de un contactólogo corren el riesgo de sufrir complicaciones en su
            uso como ser abrasiones corneales, irritación ocular, etc. Muchas de estas
            complicaciones se evitan, si se siguen las indicaciones para el uso e higiene
            del profesional responsable.
          </p>
        </div>
      </div>
      <div class="care">
        <h3>Cuidados a tener en el uso de lentes de contacto:</h3>
        <div class="w-textCare">
          <p>
            <strong>
              En general, si usa una solución para lentes de contacto multiusos, reemplace el estuche de sus
              pupilentes por lo menos cada tres meses o según lo indique su oculista. Si está usando una solución para
              lentes de contacto con peróxido de hidrógeno (agua oxigenada), siempre utilice el estuche nuevo que viene
              con cada caja y siga todas las instrucciones que se incluyen en o adentro del empaque.
            </strong>
          </p>
          <p>- Limpie y desinfecte los lentes siguiendo las instrucciones de la etiqueta del producto.</p>
          <p>- Quítese siempre los lentes de contacto antes de nadar.</p>
          <p>
            - Siempre elimine toda la solución utilizada después de cada uso y llene el estuche de sus
            lentes de contacto con solución nueva.
          </p>
          <p>
            - No exponga los lentes de contacto a ningún tipo de agua (incluyendo lagos, ríos, mar,
            destilada, de la canilla y soluciones salinas caseras) porque puede ser una fuente de
            microorganismos que podrían causar infecciones oculares graves Nunca se lleve los lentes de
            contacto a la boca ni use saliva en ellos. La saliva no es estéril.
          </p>
          <p>
            - Nunca transfiera soluciones para lentes de contacto a envases de bolsillo más pequeños. Estos
            envases no son estériles, y una solución no estéril puede dañar sus ojos.
          </p>
          <p>
            - No se acueste con los lentes de contacto puestos, a menos que su oculista los haya prescrito para
            usarlos así. Cualesquier lentes de contacto usados durante la noche aumentan el riesgo de infección.
            Usar lentes de contacto para dormir puede sofocar la córnea al reducir la cantidad de oxígeno que recibe
            el ojo. También pueden causar un daño microscópico a la superficie de la córnea, haciéndola más susceptible
            a las infecciones.
          </p>
          <p>
            - Nunca desatienda los síntomas de infección o irritación de los ojos que puedan estar relacionados con
            el incorrecto uso de lentes de contacto. Si presenta cualquiera de estos síntomas no se automedique, quítese
            inmediatamente los lentes de contacto y no se los vuelva a poner. Acuda a su oculista de inmediato. Guarde
            los lentes de contacto, porque podrían ayudar a su oculista a determinar el origen de los síntomas.
          </p>
          <p>- Lavarse bien las manos antes de tener contacto con las lentes de contacto.</p>
          <p>
            - Reemplace frecuentemente el estuche donde guarda los lentes y manténgalos en perfectas condiciones de
            higiene. De no ser así, pueden ser un reservorio de microrganismos que pueden afectar su ojo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../banners/InternalPage.vue";
import * as text from "../../../assets/texts.js";
import * as types from '../../../store/types';
export default {
  data() {
    return {
      title: text.TITULO_BANNER_CONTACTOLOGIA,
      img: "banner-contactologia.jpg",
      text: text.BANNER_TEXT_CONTACTOLOGIA
    };
  },
  computed: {
      tiposDeLentes () {
          return this.$store.state.contactologia.listOfTiposDeLentes.tiposDeLentes_contactologia // Recibo la variable 'state' con Vuex desde store.js 
      }
  },
  created () {
      this.$store.dispatch(types.GET_TIPOS_DE_LENTES); // 'action' de Vuex para llamar a la API desde store.js
  },
  components: {
    Banner
  }
};
</script>


<style lang="scss" scooped>
@import "../../../styles/_all.scss";
.lentes {
  position: relative;
  h3 {
    color: $baseBlue;
    font-weight: 600;
    font-size: 30px;
    padding: 30px;
    padding-top: 50px;
  }
  .howDo {
    background-color: $lightGrey;
    margin-top: -1px;
    
    .howDoImg {
      background-image: url(../../../assets/especialidades/contactologia/adaptamos.jpg);
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      width: 100%;
      height: 350px;
      background-size: cover;
      @include respond-to(medium) {
        height: auto;
      }
      @include respond-to(normal) {
        background-position-y: initial;
      }
    }
    .textHowDo {
      padding: 40px 20px;
      font-weight: 100;
      p {
        padding: 20px;
      }
    }
  }
  .typeOfLent {
    text-align: center;
    background-color: $white;
    margin-top: -1px;
    padding-bottom: 30px;
    padding-left: 10%;
    padding-right: 10%;
    h4 {
      font-size: 20px;
      padding: 20px 0;
      text-align: center;
      margin: 0;
    }
    .text-type {
      font-weight: 100;
      padding-bottom: 20px;
      color: #6f6f70;
      font-size: 16px;
    }
  }
  .products {
    height: auto;
    background-color: $white;
    text-align: center;
    margin-top: -1px;
    padding-bottom: 20px;
    overflow: hidden;
    h3 {
      padding: 20px;
    }
    img {
      width: 100%;
    }
  }
  .avoidProblems {
    background-color: $baseBlue;
    color: $white;
    font-weight: 100;
    overflow: hidden;
    .w-text {
      padding: 30px 60px;
      h3 {
        color: $white;
        padding: 0;
        padding-top: 20px;
        font-size: 25px;
      }
      p {
        padding-top: 30px;
      }
      @include respond-to(medium) {
        padding: 50px 60px;
      }
      @include respond-to(normal) {
        padding: 70px 60px;
      }
    }
    .avoidImg {
      background-image: url(../../../assets/especialidades/contactologia/problemas1.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      width: 100%;
      height: 350px;
      @include respond-to(medium) {
        height: auto;
      }
    }
    @include respond-to(medium) {
      height: 350px;
    }
    @include respond-to(normal) {
      height: 400px;
    }
  }
  .care {
    background-image: url(../../../assets/especialidades/contactologia/fondo-text.jpg);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    padding: 30px;
    font-weight: 100;
    h3 {
      font-size: 25px;
    }
    .w-textCare {
      padding: 30px;
      @include respond-to(medium) {
        padding: 30px 30px 30px 400px;
      }
    }
  }
  .tipo-lente-img-wrapper {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
  }
}
</style>