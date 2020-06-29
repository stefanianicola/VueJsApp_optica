import * as types from '../types';

import Vue from 'vue';


const state = {
    globalConfig : {},
    showSpinner: true,
    adminSkin: false
};

const getters = {

};

const mutations = {
    [types.PLACE_CONFIG] (state,data) {
        state.globalConfig = data;
    },
    [types.PLACE_SPINNER] (state,data) {
        state.showSpinner = data.status;

    },
    [types.SET_ADMIN_SKIN] (state,data) {
        state.adminSkin = data;

    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_CONFIG]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=globalSettings') .then(data => {
            var self = this;
            var currentData = data.data.globalSettings;
            var newData = {};
            currentData.forEach(function (value, i) {
                newData[i] = JSON.parse(value.value);
            });
            // ejecutamos mutation 'placeConfig' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_CONFIG, newData[0]); 
        });
    },
    [types.START_SPINNER]: ({commit}, status) => { 
        commit(types.PLACE_SPINNER, status); 
    },
    [types.GET_ADMIN_SKIN]: ({commit}, status) => { 
        commit(types.SET_ADMIN_SKIN, status); 
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}