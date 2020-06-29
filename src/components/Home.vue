<template>
    <div>
        <app-banner></app-banner>
        <app-contact-circle></app-contact-circle>
        <app-trayectoria></app-trayectoria>
        <app-especialidades id="especialidades-srcoll"></app-especialidades>
        <app-carrousel id="obras-sociales-srcoll" :mainTitle="obras_socialess_title" :more="true" :items="content.obrasSociales_home" type="obrassociales"></app-carrousel>
        <app-novedades id="novedades-srcoll"></app-novedades>
    </div>
</template>

<script>
import * as types from '../store/types';
import * as text from '../assets/texts'
import Banner from './banners/Homepage.vue';
import ContactCircle from './elements/ContactButton.vue';
import Trayectoria from './int/Trayectoria.vue';
import Especialidades from './int/Especialidades.vue';
import Carrousel from './elements/Carrousel.vue';
import Novedades from './int/Novedades.vue';

    export default {
        data: function () {
            return {
                obras_socialess_title : text.OBRAS_SOCIALES_TITLE
            };
        },
        created () {
            this.$store.dispatch(types.GET_OBRAS_SOCIALES); // 'action' de Vuex para llamar a la API desde store.js
        },
        computed: {
            content () {
                return this.$store.state.obrasSociales.listOfObrasSociales // Recibo la variable 'state' con Vuex desde store.js 
            }
        },
        components: {
            appBanner: Banner,
            appContactCircle: ContactCircle,
            appTrayectoria: Trayectoria,
            appEspecialidades: Especialidades,
            appCarrousel: Carrousel,
            appNovedades: Novedades
        }
    }
</script>

<style lang="scss" scooped>
    @import "../styles/_all.scss";
</style>