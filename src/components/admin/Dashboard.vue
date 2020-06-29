<template>

    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-lg-4 mb-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Últimos avances en lentes de contacto</h5>
                        <p class="card-text">La contactología se encuentra en constante cambio debido al avance científico y tecnológico, que permite brindar a los pacientes nuevas alternativas...</p>
                        <a href="http://www.google.com" target="_blank" class="btn btn-secondary">Ver</a>
                        <router-link :to="'/admin/edit/1'" class="btn btn-primary"><a>Editar</a></router-link>
                        <a href="#" class="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import * as types from '../../store/types';
    export default {
        created(){
            this.$store.dispatch(types.GET_ADMIN_SKIN, true);
        },    
    }

</script>
