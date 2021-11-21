import { createStore } from "vuex"

export default createStore({
    state: {
        counter: 0,
        showSettings: false,
    },
    mutations: {
        toggleSettingsVisibility(state) {
            state.showSettings = !state.showSettings
        },
    },
    actions: {

    },
    modules: {

    },
})