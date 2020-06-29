import * as types from '../types';

import Vue from 'vue';

const state = {
    mainNav: '',
    mainName: '',
    logoImg: ''

};

const getters = {

};

const mutations = {
    [types.PLACE_MAIN_NAV] (state,data) {
        state.mainNav = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_MAIN_NAV]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=mainNav') .then(data => {
            // ejecutamos mutation 'placeMainNav' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_MAIN_NAV, data.data.mainNav); 
        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}