<template>
  <div class="homeNov">
    <h2 class="m-0">Novedades</h2>
    <div class=" p-0">
      <ul class="row d-md-flex justify-content-md-center m-0">
        <card
          v-for="novedad in list.listOfNovedades"
          v-bind:key="novedad.index"
          :link="`/novedades/${novedad.homeLayout}`"
          :novedad="novedad"
        ></card>
      </ul>
    </div>
    <!-- <button type="button" class="btn">VER MÁS</button> -->
  </div>
</template>

<script>
import Card from "../elements/CardOfNovedades.vue";
import * as types from "../../store/types";

export default {
  data: function() {
    return {};
  },
  created() {
    this.$store.dispatch(types.GET_LIST_NOVEDADES); // 'action' de Vuex para llamar a la API desde store.js
  },
  computed: {
    list() {
      return this.$store.state.novedades.listOfNovedades; // Recibo la variable 'state' con Vuex desde store.js
    }
  },
  components: {
    card: Card
  }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.homeNov {
  background-color: $baseBlue;
  margin-top: -1px;
  text-align: center;
  padding-bottom: 30px;
  h2 {
    font-size: 30px;
    padding-top: 50px;
    text-align: center;
    font-family: barlow;
    font-weight: 500;
    text-transform: uppercase;
    color: $white;
    padding: 40px 0;
  }
  ul {
    padding: 0;
    list-style: none;
    display: contents;
  }
  .btn {
    background-color: $sky;
    color: $white;
    font-size: 16px;
    padding: 10px 30px;
    margin: 60px auto;
    border-radius: 5px;
    &:hover {
      border: 1px solid $white;
      background-color: $baseBlue;
    }
  }
}
</style>
