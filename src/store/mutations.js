import * as types from './types';
export default {
    [types.TOKEN](state, token){
        state.token = token;
    },
    [types.CURRENTUSER](state, user){
        state.currentUser = user;
    },
    [types.PERMISSIONS](state, permit){
        state.permissions = permit;
    },
    [types.ISSUPER](state, flag){
        state.isSuper = flag;
    },
    

};
