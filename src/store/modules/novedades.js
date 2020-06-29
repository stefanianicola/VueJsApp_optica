import * as types from '../types';

import Vue from 'vue';

const state = {
    listOfNovedades: '',

};

const getters = {

};

const mutations = {
    [types.PLACE_LIST_NOVEDADES] (state,data) {
        state.listOfNovedades = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_LIST_NOVEDADES]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=listOfNovedades') .then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_LIST_NOVEDADES, data.data); 
        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}