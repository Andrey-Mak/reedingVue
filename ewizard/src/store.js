import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenu: false
    },
    mutations: {
        menuToggle(state, menuState) {
            state.isMenu = (menuState === undefined) ? !state.isMenu : menuState;
        }
    },
    actions: {}
})
