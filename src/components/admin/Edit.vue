<template>
    <div>
    <app-nav></app-nav>
        <div class="container">

            EDIT ID: {{ path }}

            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Titulo</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>


            <div class="input-group mb-3" >
            <div class="input-group-prepend">
                <span class="input-group-text">Introduccion / Descripción</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Imagen Principal</span>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
            </div>

            <div class="mt-5 text-right">
                <button type="button" class="btn btn-outline-dark">Cancelar</button>
                <button type="button" class="btn btn-outline-success">Guardar</button>
            </div>
        </div>
    </div>

</template>

<script>
import Nav from './Nav.vue';

export default {
    data() {
        return {
            path: this.$route.params.id,
            loginStatus: '',
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    created(){
        this.loginStatus = this.$store.state.auth.is_logged;
        if(!this.loginStatus) {
            // redirecciona al login
            this.$router.push({ path: '/admin'})
        }
    },
    components: {
        appNav: Nav
    }
}
</script>