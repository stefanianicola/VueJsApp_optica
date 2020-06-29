import * as types from '../types';

import Vue from 'vue';

const state = {
    footerContent: '',
    footNavInfo: '',
    footNavRedes: ''
};

const getters = {

};

const mutations = {
    [types.PLACE_FOOTER_CONTENT] (state,data) {
        state.footerContent = data;
    },
    [types.PLACE_FOOTERNAV_INFO] (state,data) {
        state.footNavInfo = data;
    },
    [types.PLACE_FOOTERNAV_REDES] (state,data) {
        state.footNavRedes = data;
    }
};

const actions = {
    // actions para traer data desde la API y ejecutar el setting (mutation) que luego guarda la data en variable 'state'
    [types.GET_FOOTER]: ({commit}) => { // metodo para traer los datos de configuracion desde la API 
        Vue.http.get('?data=footer_home') .then(data => {
            // ejecutamos mutation 'placeMainNav' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_FOOTER_CONTENT, data.data.footer_home[0]); 
        });

        // get nav footer: info
        Vue.http.get('?data=footNav_informacion') .then(data => {
            // ejecutamos mutation 'placeMainNav' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_FOOTERNAV_INFO, data.data.footNav_informacion); 
        });

        // get nav footer: redes sociales
        Vue.http.get('?data=footNav_redes') .then(data => {
            // ejecutamos mutation 'placeMainNav' para guardar la data que viene por ajax en la variable global 'state' para poder usarla desde todos los componentes
            commit(types.PLACE_FOOTERNAV_REDES, data.data.footNav_redes); 
        });

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}