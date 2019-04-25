import actions from './actions.js';
import mutations from './mutations.js';


const state = {
    auth: null,
    userInfo: {},
    messageForm:{
        msg:''
    },
    msgKu:[]
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}