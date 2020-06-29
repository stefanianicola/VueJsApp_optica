<template>
    <div>
        <app-spinner v-if="showSpinner"></app-spinner>

        <div v-else class="simple-login-container">
            <h2>Admin</h2>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input v-model="email" type="text" class="form-control" :placeholder="insertEmail">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input v-model="password" type="password" :placeholder="insertPass" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <button class="btn btn-block btn-login" @click="onSubmit">{{loginText}}</button>
                </div>
            </div>

            <div class="row" v-show="showErrorLogin">
                <div class="col-md-12 form-group">
                    <div class="alert alert-danger" role="alert">
                    {{ errorMessage }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import firebase from 'firebase';
import * as types from '../../store/types';
import * as text from '../../assets/texts';
import Spinner from '../../components/elements/Spinner.vue';
export default {
    data(){
        return {
            email: '',
            password: '',
            showErrorLogin: false,
            errorMessage: '',
            showSpinner: false,
            insertEmail: text.WRITE_EMAIL,
            insertPass: text.WRITE_PASSWORD,
            loginText: text.LOGIN_BUTTON
        }
    },
    methods: {
        onSubmit() {

            this.showSpinner = true;

            // esconder mensaje de error al enviar los datos
            this.showErrorLogin = false;

            // guardar email y contraseña
            const formData = {
                email: this.email,
                password: this.password
            }

            // llamar API de firebase para autentificar enviando mail y contraseña
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                // si el login es correcto, guardar en store el status
                this.$store.dispatch({
                    type: types.UPDATE_USER_STATUS,
                    user: true
                })
            })
            // si fallo la autentificacion, actualizar mensaje de error a mostrar en pantalla
            .catch(error => {
                if(error.code == "auth/invalid-email"){
                    this.errorMessage = text.WRONG_EMAIL;
                } else if (error.code == "auth/wrong-password") {
                    this.errorMessage = text.WRONG_PASSWORD;   
                } else if(error.code == "auth/user-not-found") {
                    this.errorMessage = text.WRONG_EMAIL_NOT_EXIST;
                } else {
                    this.errorMessage = text.WRONG_LOGIN;
                }
                this.showErrorLogin = true;
                }
            ).then(() => {
                this.showSpinner = false;
            });
        }
    },
    created(){
        this.$store.dispatch(types.GET_ADMIN_SKIN, true);
    },
    components: {
        appSpinner: Spinner
    }
}
</script>