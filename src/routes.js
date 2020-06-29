import Home from './components/Home.vue';

/* De esta forma se generan los componentes cuando son llamados por la url -- SOLO CON WEBPACK */
const Conocenos = resolve => { 
    require.ensure(['./components/int/Conocenos.vue'], () => {
        resolve(require('./components/int/Conocenos.vue'));
    });
};

const Insumos = resolve => { 
    require.ensure(['./components/int/Insumos.vue'], () => {
        resolve(require('./components/int/Insumos.vue'));
    });
};

const PageOfEspecialidades = resolve => { 
    require.ensure(['./components/int/PageOfEspecialidades.vue'], () => {
        resolve(require('./components/int/PageOfEspecialidades.vue'));
    });
};

const PageOfNovedades = resolve => { 
    require.ensure([ './components/int/PageOfNovedades.vue'], () => {
        resolve(require( './components/int/PageOfNovedades.vue'));
    });
};

const AuthPage = resolve => { 
    require.ensure([ './components/AuthPage.vue'], () => {
        resolve(require( './components/AuthPage.vue'));
    });
};

const EditPost = resolve => { 
    require.ensure([ './components/admin/Edit.vue'], () => {
        resolve(require( './components/admin/Edit.vue'));
    });
};

const CreatePost = resolve => { 
    require.ensure([ './components/admin/Create.vue'], () => {
        resolve(require( './components/admin/Create.vue'));
    });
};

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/conocenos',
        component: Conocenos
    },
    {
        path: '/insumos',
        component: Insumos
    },
    {
        path: '/especialidades/:id',
        component: PageOfEspecialidades
    },
    {
        path: '/novedades/:id',
        component: PageOfNovedades
    },
    {
        path: '/admin',
        props: { adminSkin: true },
        name: 'admin',
        component: AuthPage
    },
    {
        path: '/admin/edit/:id',
        props: { adminSkin: true },
        name: 'edit',
        component: EditPost
    },
    {
        path: '/admin/create',
        props: { adminSkin: true },
        name: 'create',
        component: CreatePost
    },
    {
        path: '*', redirect: '/'
    }
];