<template>
    <b-container fluid class="especialidades-wrapper">
        <h2 class="section-title">Especialidades</h2>
        <b-row class="wrapp-list">
            <div class="col-12 d-md-flex p-0">
                <card v-for="especialidad in list.listOfEspecialidades" v-bind:key="especialidad.index" :link="`/especialidades/${especialidad.listOfEspecialidades_homeLayout}`" :especialidad="especialidad"></card>
            </div>
        </b-row>
    </b-container>

</template>

<script>
import Card from '../elements/CardOfEspecialidades.vue';
import * as types from '../../store/types';

    export default {
        data: function(){
            return {
            }
        },
        created () {
            this.$store.dispatch(types.GET_LIST_ESPECIALIDADES); // 'action' de Vuex para llamar a la API desde store.js
        },
        computed: {
            list () {
                return this.$store.state.especialidades.listOfEspecialidades // Recibo la variable 'state' con Vuex desde store.js 
            }
        },
        components: {
            card : Card
        }
    }
</script>

<style lang="scss" scooped>
    @import "../../styles/_all.scss";
    .especialidades-wrapper {
        background: $white;
        padding: 50px 0;
        margin-top: -1px;
        .section-title{
            margin-top: 0;
        }
        .wrapp-list {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>