import * as types from '../types';

import Vue from 'vue';

const state = {
    slideHome: '',

};

const getters = {

};

const mutations = {
    [types.PLACE_SLIDE_HOME] (state,data) {
        state.slideHome = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_SLIDE_HOME]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=slideHome') .then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_SLIDE_HOME, data.data); 
        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}