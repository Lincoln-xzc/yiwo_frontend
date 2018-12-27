import 'es6-promise/auto';
import Vuex from 'vuex';
import Vue from 'vue';
import actions from './action';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    token: null,
    permissions: null,
    currentUser: {},
    isSuper:false,
    flag:true

};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
