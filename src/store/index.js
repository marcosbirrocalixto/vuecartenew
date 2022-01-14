import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'
import auth from './modules/auth'
import myprojects from './modules/myprojects'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies,
        auth,
        myprojects,        
    },
    state,
    mutations   
})

export default store