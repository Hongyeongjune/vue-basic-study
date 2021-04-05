import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getCounter: function (state) {
            return state.counter;
        }
    },
    mutations: {
        addCounter: function (state) {
            console.log(state.counter);
            return state.counter++;
        },
        changeCounter: function (state, payload) {
            state.counter = payload;
        },
        subCounter: function (state) {
            return state.counter--;
        }
    },
    actions: {
        subCounter: function (context) {
            return context.commit('subCounter')
        }
    }
})