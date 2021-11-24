import { createStore } from "vuex"

export default createStore({
    state: {
        counter: '25:00',
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