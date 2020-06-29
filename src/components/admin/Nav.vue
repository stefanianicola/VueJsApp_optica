<template>
    <nav class="mb-4 navbar navbar-expand-lg navbar-dark cyan">
        <a class="navbar-brand font-bold" href="#">Admin</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSuapportedContent-4">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="'/admin'" class="nav-link"><a>Editar</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/admin/create'" class="nav-link"><a>Crear</a></router-link>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> {{userData.username.email}} </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                        <!-- <a class="dropdown-item" href="#">My account</a> -->
                        <a class="dropdown-item" @click="logOut">{{ logOutText }}</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase';
import * as types from '../../store/types';
import * as text from '../../assets/texts';
export default {
    data(){
        return {
            logOutText: text.LOGOUT_BUTTON,
        }
    },
    methods: {
        logOut() {
            firebase.auth().signOut().then(() => {
                // action para actualizar estado de usuario al desloguearse
                this.$store.dispatch({
                    type: types.UPDATE_USER_STATUS,
                    user: false
                })

                // blanquear username
                this.$store.dispatch({
                    type: types.UPDATE_USERNAME,
                    user: ''
                })

                // redirecciona al login
                this.$router.push({ path: '/admin'})

            })
        }
    },
    computed: {
        userData () {
            return this.$store.state.auth.username // Recibo la variable 'state' con Vuex desde store.js 
        }
    },
}
</script>

<style scooped>
    .navbar {
        background: #14143C;
    }
</style>