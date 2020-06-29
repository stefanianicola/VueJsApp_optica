<template>
    <div>
        <div v-for="(page,index) in content.listOfNovedades" :key="index" class="novedades" v-if="page.homeLayout == layout">
            <banner :type="'nov'" :mainTitle="page.title" :img="`../../src/assets/home/novedades/${page.imgDsk}`"></banner>
            <div class="content">
                <div class="body" v-html="page.content"></div>
                <div class="footer text-right">
                    <p>Autor: <strong>{{page.author}}</strong></p>
                    <p>Fecha: <strong>{{page.date}}</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "../banners/InternalPage.vue";
import * as types from "../../store/types";
import VueScrollTo from 'vue-scrollto';
export default {
    data() {
        return {
            layout: this.$route.params.id
        }
    },
    watch: {
        '$route' (to, from) {
            this.layout = to.params.id
        }
    },
    created() {
        this.$store.dispatch(types.GET_LIST_NOVEDADES); // 'action' de Vuex para llamar a la API desde store.js
        VueScrollTo.scrollTo('#falco-logo', 0);
    },
    computed: {
        content() {
            return this.$store.state.novedades.listOfNovedades; // Recibo la variable 'state' con Vuex desde store.js
        }
    },
    components: {
        Banner
    }
}
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.novedades {
    .content {
        background: white;
        margin: 0;
        padding: 20px;
        text-align: justify;
        font-weight: 100;
        @include respond-to(medium) {
            padding: 20px 40px 20px 30%;
        }
        h2, h3 {
            font-size: 20px;
        }
    }
}
</style>