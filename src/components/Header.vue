<template>
  <header class="header-page">
    <b-navbar fluid toggleable="lg" class="container-fluid">
      <router-link
        to="/"
        v-scroll-to="'#falco-logo'"
        id="falco-logo"
        tag="b-navbar-brand"
        class="m-0"
      >
        <a @click="resetActivate">
          <img src="../assets/home/logo.svg" alt="Centro Optico Falconaro" />
        </a>
      </router-link>

      <b-navbar-toggle v-if="!isMenuOpen" target="nav-collapse" @click="isMenuOpen = !isMenuOpen">
        Menu
        <i class="fas fa-align-left"></i>
      </b-navbar-toggle>

      <b-navbar-toggle v-if="isMenuOpen"  target="nav-collapse" @click="isMenuOpen = !isMenuOpen">
        Cerrar
        <img src="../assets/home/-_cerrar.svg" alt="">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-lg-auto" v-if="is_scrolleable">
          <div
            v-for="(link, index) in content.header.mainNav"
            :key="link.id"
            @click="activate(index)"
            :class="{ active : active_el == index, 'd-none' : index == 2 }">
            <b-nav-item
              v-if="link.is_scrolleable == '1'"
              to="/"
              v-scroll-to="{el:link.scrollUrl, offset: -90}"
              @click="isMenuOpen = !isMenuOpen"
            >{{link.name}}</b-nav-item>
            <b-nav-item
              v-else
              v-scroll-to="{el:'#falco-logo', offset: -10}"
              :to="link.url"
              @click="isMenuOpen = !isMenuOpen"
            >{{link.name}}</b-nav-item>
          </div>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item
            :v-for="link in content.header.mainNav"
            :key="link.id"
            :to="link.url"
            active-class="active"
            exact
          >{{link.name}}</b-nav-item>
        </b-navbar-nav>
        <div class="d-lg-none foot-nav">
          <div class="d-block d-lg-none col-12 wrap-address w-mob">
            <p class="contact" v-html="contentFooter.foot_homeLogoImg"></p>
            <p class="contact" v-html="contentFooter.foot_homeAdxdress"></p>
            <p class="contact" v-html="contentFooter.foot_homeCity"></p>
            <p class="contact phone" v-html="contentFooter.foot_homePhone"></p>
          </div>

          <div class="wrapper-redes col-12 col-md-11 offset-md-1 ml-0">
            <p class="col-12 hour pl-0 ml-0" v-html="contentFooter.foot_homeHours"></p>
          </div>

          <ul class="col-12 col-md-3 redes d-flex flex-row" :class="{menuIsOpen : isMenuOpen}">
            <p class="redTitle">{{seguinosTitle}}</p>
            <li v-for="item in content.footer.footNavRedes" :key="item.id">
              <a :href="item.redesFN_url" target="_blank">
                <img :src="'/src/assets/home/' + item.redesFN_imgDsk" alt="Redes sociales Centro Optico Falconaro" />
              </a>
            </li>
          </ul>

        </div>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import * as types from "../store/types";
import * as text from "../assets/texts";
export default {
  data() {
    return {
      active_el: -1,
      seguinosTitle: text.TITULO_SEGUINOS,
      isMenuOpen: false
    };
  },
  props: {
    is_scrolleable: Boolean
  },
  methods: {
    activate: function(el) {
      this.active_el = el;
    },
    resetActivate() {
      this.active_el = -1; // -1 es un numero inexistente en el array del nav main menu para simular deseleccionar todos los items
    }
  },
  created() {
    this.$store.dispatch(types.GET_MAIN_NAV); // 'action' de Vuex para llamar a la API desde store.js
    this.$store.dispatch(types.GET_FOOTER);
  },
  computed: {
    content() {
      return this.$store.state; // Recibo la variable 'state' con Vuex desde store.js
    },
    contentFooter() {
      return this.$store.state.footer.footerContent; // Recibo la variable 'state' con Vuex desde store.js
    }
  }
};
</script>


<style lang="scss" scooped>
@import "../styles/_all.scss";
.header-page {
  position: fixed;
  width: 100%;
  background: $white;
  z-index: $highest;
  box-shadow: 0px 5px 10px #0000001a;
  .navbar {
    height: 100px;
    &.navbar-light .navbar-nav .nav-link {
      color: $baseBlue;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 28px;
      padding: 0;
      line-height: 40px;
      @include respond-to(normal) {
        font-size: 0.9em;
        padding: 8px;
        line-height: 0;
      }
    }
    &.navbar-light .navbar-nav .active .nav-link {
      color: $black;
    }
    .navbar-brand {
      img {
        width: 200px;
        height: auto;
        @include respond-to(normal) {
          width: 300px;
        }
      }
    }
    .navbar-toggler {
      color: $baseBlue;
      border: none;
      .fas {
        padding-left: 5px;
      }
      img {
        width: 25px;
      }
    }
    .collapse {
      position: absolute;
      top: 100px;
      background-color: $lightGrey;
      width: 100%;
      height: calc(100vh - 100px);
      left: 0;
      .navbar-nav {
        padding: 30px 0;
        border-bottom: 5px solid $baseBlue;
        margin: 0 30px;
        @include respond-to(medium) {
          padding: 40px 0;
        }
        @include respond-to(normal) {
          margin: 0;
          border: none;
        }
      }
      @include respond-to(normal) {
        position: relative;
        background-color: #fff;
        width: 100%;
        font-size: 15px;
        top: 0;
        height: inherit;
      }
      .foot-nav {
        position: relative;
        height: calc(100vh - 325px);
        padding: 30px 15px;
        font-size: 16px;
        color: $sky;
        font-weight: 100;
        @include respond-to(medium) {
          padding: 50px 15px;
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
          }
        }
      }
    }
    .redes {
      list-style: none;
      position: absolute;
      bottom: 0;
      left: 30px;
      padding: 20px 0;
      margin-bottom: 0;
      color: $baseBlue;
      opacity: 0;
      transition: opacity .5s ease-in;
      &.menuIsOpen {
        opacity: 1;
      }
      .redTitle {
        font-size: 20px;
        font-weight: 600;
        text-align: left;
        padding-top: 10px;
      }
      li {
        padding-left: 10px;
      }
    }
    @include respond-to(normal) {
      max-width: 960px;
    }
  }
}
</style>