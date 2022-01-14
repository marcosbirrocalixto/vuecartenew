import axios from 'axios'
import { TOKEN_NAME } from '@/configs/api'

const state = {
    myProjects: {
        data: []
    }
}

const mutations = {
    SET_PROJECTS  (state, projects) {
        state.myProjects
    },

    SET_PROJECT  (state, projects) {
        state.myProjects.ata = project
    }
}

const actions = {

    getMyProjects ({ commit }) {
        const token = localStorage.getItem(TOKEN_NAME)
        if (!token) return

        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando meus projetos...')

        axios.get('auth/getProjetos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }        
        })
        .then(response => {
            console.log(response);
        })
        .finally(() => commit('SET_PRELOADER', false)) 
    }

}

export default {
    state,
    mutations,
    actions
}