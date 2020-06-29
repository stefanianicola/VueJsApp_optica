import * as types from '../types';

import Vue from 'vue';

const state = {
    listOfArmazones: '',
    listOfCristales: '',
    listOfMarcas: '',
};

const getters = {

};

const mutations = {
    [types.PLACE_ARMAZONES](state, data) {
        state.listOfArmazones = data;
    },
    [types.PLACE_CRISTALES](state, data) {
        state.listOfCristales = data;
    },
    [types.PLACE_MARCAS](state, data) {
        state.listOfMarcas = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_OPTICA]: ({ commit }) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=armazones_Optica').then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_ARMAZONES, data.body);
        });
        Vue.http.get('?data=cristales_Optica').then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_CRISTALES, data.body);
        });
        Vue.http.get('?data=marcas_Optica').then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_MARCAS, data.body);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}