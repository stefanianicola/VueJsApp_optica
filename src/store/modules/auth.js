import * as types from '../types';

const state = {
    is_logged: false,
    username: '',
    ready: false
};

const getters = {

};

const mutations = {
    [types.SET_USER_STATUS] (state,is_logged) {
        state.is_logged = is_logged.user;
    },
    [types.SET_USERNAME] (state,username) {
        state.username = username;
    },
    [types.SET_READY] (state,ready) {
        state.ready = status.ready;
    }
};

const actions = {
    [types.UPDATE_USER_STATUS]: ({commit}, payload) => { 
        commit(types.SET_USER_STATUS, payload); 
    },
    [types.UPDATE_USERNAME]: ({commit}, payload) => { 
        commit(types.SET_USERNAME, payload); 
    },
    [types.UPDATE_READY]: ({commit}, payload) => { 
        commit(types.SET_READY, payload); 
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}