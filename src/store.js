import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: null,
        loggedInUser: {},
    },

    mutations: {
        ADD_TOKEN(state, newToken) {
            state.token = newToken;
            // console.log("Token changed..");
        },
        CHANGE_USER(state, newUser) {
            state.loggedInUser = newUser
        }
    },

    actions: {
        addTokenToState({ commit }, newToken) {
            // console.log(context.state);
            commit("ADD_TOKEN", newToken);
        },
        // addTokenToState({ commit }, newToken) {
        //     return new Promise((resolve, reject) => {
        //         try {
        //             commit("ADD_TOKEN", newToken)
        //             resolve();
        //         } catch (error) {
        //             reject();
        //         }
        //     })
        // }
        changeUser({ commit }, newUser) {
            commit("CHANGE_USER", newUser)
        }
    },

    getters: {
        getToken(state) {
            return state.token;
        },
        getLoggedInUser(state) {
            return state.loggedInUser;
        }
    },
});
