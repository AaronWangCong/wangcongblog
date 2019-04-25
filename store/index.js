import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import common from './common'
// home
import userLogin from './userLogin'
import tinymce from './tinymce'


const store = () => new Vuex.Store({
    modules: {
        userLogin,
        common,
        tinymce
    }
})
export default store;
