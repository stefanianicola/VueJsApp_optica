<template>
  <b-container fluid class="trayectoria-wrapper p-0">
    <b-container fluid>
      <b-row>
        <b-col cols="12" lg="6" class="textTray">
          <!--<h2 class="d-none d-sm-none d-lg-block">{{content.trayectoria_homeTitle}}</h2>-->
          <div v-html="content.trayectoria_homeText" class="text"></div>
        </b-col>
        <b-col cols="6" class="d-none d-lg-block imgTray">
          <!--<img
              :src="'src/assets/home/' + content.trayectoria_homeIMG"
              :alt="content.trayectoria_homeTitle"
          />-->
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import * as types from "../../store/types";
export default {
  data: function() {
    return {
      data: {}
    };
  },
  created() {
    this.$store.dispatch(types.GET_TRAYECTORIA); // 'action' de Vuex para llamar a la API desde store.js
  },
  computed: {
    content() {
      return this.$store.state.trayectoria.contentOfTrayectoria; // Recibo la variable 'state' con Vuex desde store.js
    }
  }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.trayectoria-wrapper {
  position: relative;
  border-top: 10px solid $baseBlue;
  background: $white;
  @include respond-to(normal) {
    background: $lightGrey;
    padding-right: 0;
    margin-right: 0;
    padding-bottom: 50px;
    border: none;
  }
  .imgTray {
    background-image: url(../../assets/home/trayectoria.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2 {
    margin: 50px 0 25px 0;
    font-weight: bold;
    color: $baseBlue;
    font-size: $internalTitle;
  }
  .textTray {
    padding: 0 70px;
    .text {
      text-align: center;
      color: $baseBlue;
      font-family: "barlow";
      font-size: 20px;
      letter-spacing: -0.3px;
      line-height: 30px;
      padding-top: 30px;
      @include respond-to(normal) {
        background: $white;
        padding: 35px 25px;
        border-top: 5px solid $baseBlue;
        text-align: left;
        margin: 50px 0;
      }

      p {
        &:first-child {
          font-weight: bold;
        }
      }
    }
  }
}
</style>