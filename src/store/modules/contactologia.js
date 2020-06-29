import * as types from '../types';

import Vue from 'vue';

const state = {
    listOfTiposDeLentes: '',
};

const getters = {

};

const mutations = {
    [types.PLACE_TIPOS_DE_LENTES](state, data) {
        state.listOfTiposDeLentes = data;
    },
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_TIPOS_DE_LENTES]: ({ commit }) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=tiposDeLentes_contactologia').then(data => {
            // ejecutamos mutation para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_TIPOS_DE_LENTES, data.body);
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}