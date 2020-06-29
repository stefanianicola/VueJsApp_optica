<template>
<div>
    <app-spinner v-if="!ready"></app-spinner>
    <div v-else>
        <div v-if="logged.auth.is_logged">
            <app-nav></app-nav>
            <app-dashboard></app-dashboard>
        </div>
        <app-login v-else></app-login>
    </div>
</div>

</template>

<script>
import db from '../firebase/init';
import firebase from 'firebase';
import * as types from './../store/types';
import * as text from './../assets/texts';
import Spinner from '../components/elements/Spinner.vue';
import Dashboard from '../components/admin/Dashboard.vue';
import Nav from '../components/admin/Nav.vue';
import Login from '../components/admin/Login.vue';

export default {
    data() {
        return {
            loadingText: text.LOADING,
            ready: false
        }
    },
    methods: {
    },
    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                // si el login es correcto, guardar en store el status
                this.$store.dispatch({
                    type: types.UPDATE_USER_STATUS,
                    user: true
                })
            } 
            this.ready = true;
        })
    },
    created(){
        firebase.auth().onAuthStateChanged( currentUser => {
            if(currentUser){
                // si el login es correcto, guardar en store el username
                this.$store.dispatch({
                    type: types.UPDATE_USERNAME,
                    username: currentUser
                })
            } else {
                // si el login es incorrecto, blanquear username
                this.$store.dispatch({
                    type: types.UPDATE_USERNAME,
                    username: ''
                })
            }
        })
    },
    computed: {
        logged () {
            return this.$store.state // Recibo la variable 'state' con Vuex desde store.js 
        }
    },
    components: {
        appDashboard: Dashboard,
        appNav: Nav,
        appLogin: Login,
        appSpinner: Spinner
    }
}
</script>

<style scooped>
    .simple-login-container{
        width:300px;
        max-width:100%;
        margin:50px auto;
    }
    .simple-login-container h2{
        text-align:center;
        font-size:20px;
    }
    .simple-login-container .btn-login{
        background-color:#14143C;
        color:#fff;
    }

</style>