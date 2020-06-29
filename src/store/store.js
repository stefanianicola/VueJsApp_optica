import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/config';
import header from './modules/header';
import auth from './modules/auth';
import especialidades from './modules/especialidades';
import novedades from './modules/novedades';
import obrasSociales from './modules/obrasSociales';
import footer from './modules/footer';
import banners from './modules/banners';
import trayectoria from './modules/trayectoria';
import optica from './modules/optica';
import contactologia from './modules/contactologia';
import protesis from './modules/protesis';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        configuration,
        header,
        auth,
        especialidades,
        novedades,
        obrasSociales,
        footer,
        banners,
        trayectoria,
        optica,
        contactologia,
        protesis
    }
});