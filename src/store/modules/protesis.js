import * as types from '../types';

import Vue from 'vue';

const state = {
    listOfProductsProtesis: '',
};

const getters = {

};

const mutations = {
    [types.PLACE_PRODUCTS_PROTESIS](state, data) {
        state.listOfProductsProtesis = data;
    },
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_PRODUCTS_PROTESIS]: ({ commit }) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=productos_protOculares').then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_PRODUCTS_PROTESIS, data.body);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}