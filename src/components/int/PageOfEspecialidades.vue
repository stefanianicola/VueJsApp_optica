<template>
    <component :is="layout">
    </component>
</template>

<script>
import Protesis from './especialidades/Protesis.vue';
import Contactologia from './especialidades/Contactologia.vue';
import Optica from './especialidades/Optica.vue';
import BajaVision from './especialidades/BajaVision.vue';
import Insumos from './especialidades/Insumos.vue';
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
        VueScrollTo.scrollTo('#falco-logo', 0);
    },
    components: {
        Protesis,
        Contactologia,
        Optica,
        BajaVision,
        Insumos
    }
}
</script>

<style scoped>

</style>