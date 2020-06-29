<template>
    <div v-if="config.globalConfig.parallax">
        <parallax :fixed="true">
            <b-carousel id="carousel-mob" style="text-shadow: 0px 0px 2px #000" fade indicators class="bannerHome d-block d-sm-block d-md-none" fluid>
                <b-carousel-slide v-for="slide in content.slideHome" :key="slide.slide_id" caption :img-alt="slide.slide_text" :img-src="'/dist/' + slide.slide_imgMob"></b-carousel-slide>
            </b-carousel>
            <b-carousel id="carousel-dsk" style="text-shadow: 0px 0px 2px #000" fade indicators class="bannerHome d-none d-sm-none d-md-block">
                <b-carousel-slide v-for="slide in content.slideHome" :key="slide.slide_id" caption :img-alt="slide.slide_text" :img-src="'./dist/' + slide.slide_imgDsk"></b-carousel-slide>
            </b-carousel>
        </parallax>
    </div>
</template>

<script>
/* https://madewithvuejs.com/vue-parallax */
import Parallax from "vue-parallaxy";
import * as types from "../../store/types";

export default {
    data() {
        return {};
    },
    created() {
        this.$store.dispatch(types.GET_CONFIG); // 'action' de Vuex para llamar a la API desde store.js
        this.$store.dispatch(types.GET_SLIDE_HOME); // 'action' de Vuex para llamar a la API desde store.js
    },
    computed: {
        config() {
            return this.$store.state.configuration; // Recibo la variable 'state.configuration ' con Vuex desde store.js
        },
        content() {
            return this.$store.state.banners.slideHome; // Recibo la variable 'state.banners.slideHom' con Vuex desde store.js
        }
    },
    components: {
        Parallax
    }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.Masthead__image.is-parallax {
    //top: 100px;
    .bannerHome {
        margin-top: 100px;
        position: relative;
        height: 80vh;
        .carousel-inner {
            height: 80vh;
        }
        .carousel-indicators {
            li {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: $white;
                opacity: .5;
                margin: 0 15px;
                &.active {
                    opacity: 1;
                }
            }
        }
    }
}
</style>