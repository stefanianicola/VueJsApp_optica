<template>
  <div class="insumos">
    <banner :mainTitle="title" :img="`../../src/assets/home/slider/${img}`"></banner>
    <div class="proximamente">
      <h3>Proximamente</h3>
      <button class="btnBack">VOLVER AL INICIO</button>
    </div>
  </div>
</template>

<script>
import Banner from "../../banners/InternalPage.vue";
import * as text from "../../../assets/texts.js";
export default {
  data() {
    return {
      title: text.TITULO_BANNER_INSUMOS,
      img: "slide1.png"
    };
  },

  components: {
    Banner
  }
};
</script>

<style lang="scss" scooped>
@import "../../../styles/_all.scss";
.insumos {
  position: relative;
  .proximamente {
    text-align: center;
    position: relative;
    color: $white;
    background-color: $baseBlue;
    height: 200px;
    margin-top: -1px;
    .btnBack {
      border: 1px solid $sky;
      background-color: $sky;
      color: $white;
      padding: 10px 20px;
      border-radius: 10px;
      &:hover {
        border: 1px solid $white;
        background-color: $baseBlue;
      }
    }
  }
}
</style>