<template>
  <div class="container-fluid foot">
    <div class="wrapper-foot">
      <div class="col-12 wrap-list d-flex p-0">
        <div class="d-none d-md-block col-md-3 offset-md-1 p-0">
          <img src="../assets/home/LOGO2.svg" alt="Centro Optico Falconaro" />
          <div class="wrap-address w-dsk pl-0">
            <p class="contact" v-html="contentFooter.foot_homeLogoImg"></p>
            <p class="contact" v-html="contentFooter.foot_homeAddress"></p>
            <p class="contact" v-html="contentFooter.foot_homeCity"></p>
            <p class="contact phone" v-html="contentFooter.foot_homePhone"></p>
          </div>
        </div>
        <!-- <div class="d-none d-md-block col-md-6" v-for="item in content.footer_home" :key="item.id">
            <img :src="'/src/assets/home/' + item.foot_homeLogoImgDsk" alt="image slot">
        </div>-->
        <div class="col-6 col-md-2 offset-md-4 info">
          <p>
            <strong>{{especialidadesTitle}}</strong>
          </p>
          <ul>
            <li v-for="especialidad in especialidades.listOfEspecialidades" :key="especialidad.id">
              <router-link
                :to="`/especialidades/${especialidad.listOfEspecialidades_homeLayout}`"
                :especialidad="especialidad.listOfEspecialidades_homeTitle"
                v-scroll-to="{el: '#falco-logo', duration: 300}"
              >
                <a>{{especialidad.listOfEspecialidades_homeTitle}}</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-2 info">
          <p>
            <strong>{{infoTitle}}</strong>
          </p>
          <ul>
            <li>
              <router-link to="conocenos" v-scroll-to="{el: '#falco-logo', duration: 300}">
                <a>Conocenos</a>
              </router-link>
            </li>
            <li>
              <router-link to="/" v-scroll-to="{el: '#obras-sociales-srcoll', offset: -90, duration: 300}">
                <a>Obras Sociales</a>
              </router-link>
            </li>
            <router-link to="/admin" tag="li">
              <a>{{adminTitle}}</a>
            </router-link>
          </ul>
        </div>
      </div>

      <div class="d-block d-md-none col-12 wrap-address w-mob">
        <p class="contact" v-html="contentFooter.foot_homeLogoImg"></p>
        <p class="contact" v-html="contentFooter.foot_homeAddress"></p>
        <p class="contact" v-html="contentFooter.foot_homeCity"></p>
        <p class="contact phone" v-html="contentFooter.foot_homePhone"></p>
      </div>

      <div class="wrapper-redes col-12 col-md-11 offset-md-1">
        <p class="col-12 hour pl-0 ml-0" v-html="contentFooter.foot_homeHours"></p>
        <ul class="col-12 col-md-3 redes d-flex flex-row">
          <p class="redTitle">{{seguinosTitle}}</p>
          <li v-for="item in content.footNavRedes" :key="item.id">
            <a :href="item.redesFN_url" target="_blank">
              <img :src="'/src/assets/home/' + item.redesFN_imgDsk" alt="Redes sociales Centro Optico Falconaro" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import * as text from "../assets/texts";
export default {
  data: function() {
    return {
      especialidadesTitle: text.TITULO_ESPECIALIDADES,
      infoTitle: text.TITULO_INFORMACION,
      adminTitle: text.TITULO_ADMIN,
      seguinosTitle: text.TITULO_SEGUINOS
    };
  },
  created() {
    this.$store.dispatch(types.GET_FOOTER); // 'action' de Vuex para llamar a la API desde store.js
    this.$store.dispatch(types.GET_LIST_ESPECIALIDADES); // 'action' de Vuex para llamar a la API desde store.js
  },
  computed: {
    especialidades() {
      return this.$store.state.especialidades.listOfEspecialidades; // Recibo la variable 'state' con Vuex desde store.js
    },
    content() {
      return this.$store.state.footer; // Recibo la variable 'state' con Vuex desde store.js
    },
    contentFooter() {
      return this.$store.state.footer.footerContent; // Recibo la variable 'state' con Vuex desde store.js
    }
  }
};
</script>

<style lang="scss" scooped>
@import "../styles/_all.scss";
.foot {
  background-color: $lightGrey;
  position: relative;
  .wrapper-foot {
    padding-top: 30px;
    padding-bottom: 20px;
    color: $baseBlue;
    .wrap-list {
      padding-bottom: 20px;
      @include respond-to(medium) {
        margin-top: 30px;
      }
      img {
        width: 250px;
        height: auto;
      }
      .info {
        ul {
          list-style: none;
          padding-left: 0;
          line-height: 30px;
          li {
            a {
              color: $baseBlue;
              text-decoration: none;
            }
          }
        }
      }
    }
    .wrap-address {
      .contact {
        padding: 0;
        margin: 0;
      }
      &.w-dsk {
        padding: 20px 0;
      }
      &.w-mob {
        padding-bottom: 20px;
      }
    }
    .wrapper-redes {
      .hour {
        margin-left: 15px;
        @include respond-to(medium) {
          //margin-left: 100px;
        }
      }
      @include respond-to(medium) {
        padding: 0;
      }
    }
    .redes {
      list-style: none;
      padding-left: 0;
      padding-top: 20px;
      margin-bottom: 0;
      @include respond-to(medium) {
        padding-top: 50px;
        img {
          width: 30px;
        }
      }
      .redTitle {
        font-size: 20px;
        font-weight: 600;
        text-align: left;
        padding-top: 10px;
        @include respond-to(medium) {
          font-size: 16px;
        }
      }
      li {
        
        padding-left: 10px;
      }
      @include respond-to(medium) {
        position: absolute;
        transform: translateX(260%);
        bottom: 0;
        margin: 10px;
      }
    }
  }
}
</style>