import * as types from '../types';

import Vue from 'vue';

const state = {
    contentOfTrayectoria: '',

};

const getters = {

};

const mutations = {
    [types.PLACE_TRAYECTORIA] (state,data) {
        state.contentOfTrayectoria = data[0];
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_TRAYECTORIA]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=trayectoria_home') .then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_TRAYECTORIA, data.data.trayectoria_home); 

        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}