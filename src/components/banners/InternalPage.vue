<template>
  <div v-if="config.globalConfig.parallax" class="internalBanner">
    <div class="banner-header">
      <div class="wrapperLinks" :class="{isNovedades : isNov}">
        <router-link to="/" class="backLink">
          <i class="fas fa-chevron-left"></i>VOLVER
        </router-link>
        <h1 v-if="!isNov">{{mainTitle}}</h1>
        <h4 v-if="isNov">Novedades</h4>
      </div>
    </div>
    <parallax :fixed="true" :class="{isNovedades : isNov}">
      <div v-if="isNov" class="text-banner">{{mainTitle}}</div>
      <img :src="img" :alt="mainTitle" />
    </parallax>
    <div class="trayEsp" v-if="text">
      <h3>{{titleText}}</h3>
      <p v-html="text"></p>
    </div>
  </div>
</template>

<script>
/* https://madewithvuejs.com/vue-parallax */
import Parallax from "vue-parallaxy";

export default {
  props: {
    mainTitle: String,
    img: String,
    item: Object,
    text: String,
    titleText: String,
    type: String
  },
  data() {
    return {};
  },
  computed: {
    config() {
      return this.$store.state.configuration; // Recibo la variable 'state.configuration ' con Vuex desde store.js
    },
    isNov() {
      return this.type == "nov" ? true : false;
    }
  },
  components: {
    Parallax
  }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.internalBanner {
  padding-top: 100px;
  h1,
  h4 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
  .banner-header {
    height: 110px;
    background: white;
    position: fixed;
    width: 100%;
    .wrapperLinks {
      padding-top: 20px;
      h1,
      h4 {
        font-weight: 600;
        padding-left: 20px;
      }
      .backLink {
        padding-top: 120px;
        padding-left: 20px;
        color: $baseBlue;
        text-decoration: none;
        i {
          padding-right: 5px;
        }
      }
      &.isNovedades {
        @include respond-to(medium) {
          width: 100%;
        }
      }
      @include respond-to(medium) {
        width: 50%;
        display: block;
        float: left;
        background: #ebebf0;
        padding: 30px 0 0 15%;
        height: 110px;
      }
    }
  }
  .Masthead {
    min-height: inherit;
    .Masthead__image.is-fixed>img {
      margin-top: 150px;
    }
  }
  .isNovedades {
    &.Masthead {
      max-height: 400px;
      min-height: inherit;
    }
    .text-banner {
      width: 100%;
      max-height: 250px;
      height: auto;
      position: absolute;
      top: 0;
      background: $sky;
      margin-top: 210px;
      color: white;
      padding: 20px;
      font-size: 30px;
      font-weight: bold;
      @include respond-to(medium) {
        width: 30%;
        min-height: 290px;
        padding: 50px;
      }
    }
  }
  .trayEsp {
    position: relative;
    background-color: $baseBlue;
    color: $white;
    padding: 30px;
    line-height: 30px;
    font-weight: 100;
    @include respond-to(medium) {
      padding-left: 300px;
    }
    @include respond-to(normal) {
      padding-left: 400px;
    }
  }
}
</style>