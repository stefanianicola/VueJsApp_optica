import * as types from '../types';

import Vue from 'vue';

const state = {
    listOfEspecialidades: '',

};

const getters = {

};

const mutations = {
    [types.PLACE_LIST_ESPECIALIDADES] (state,data) {
        state.listOfEspecialidades = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_LIST_ESPECIALIDADES]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=listOfEspecialidades') .then(data => {
            // ejecutamos mutation 'placeMainNav' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_LIST_ESPECIALIDADES, data.data); 
        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}