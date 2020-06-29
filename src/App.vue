<template>
  <div class="main-content">
    <app-spinner v-if="config.showSpinner"></app-spinner>
    <div v-else>
      {{adminSkin}}
      <app-header v-if="!config.adminSkin" :is_scrolleable="config.globalConfig.scrolling"></app-header>
      <router-view></router-view>
      <footer v-if="!config.adminSkin">
        <app-footer></app-footer>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/elements/Spinner.vue";
import * as types from "./store/types";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSpinner: Spinner
  },
  created() {
    var self = this;
    this.$store.dispatch(types.GET_CONFIG).then(() => {
      // 'action' de Vuex para llamar a la API desde store.js
      setTimeout(function() {
        self.$store.dispatch({
          type: types.START_SPINNER,
          status: false
        });
      }, 2000);
    });
    self.$store.dispatch(types.GET_ADMIN_SKIN, false);
  },
  computed: {
    config() {
      return this.$store.state.configuration; // Recibo la variable 'state' con Vuex desde store.js
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_all.scss";
@import "./styles/general.scss";
.modal-open {
  background-color: $black;
  .main-content {
    opacity: 0.4;
  }
}
</style>
