import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {

    insertarUsuarios(state, usuarios){
      state.users = usuarios;
    }
  },
  actions: {
    async obtenerUsuarios (context) {
      const rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");

      const usuarios = await rawResponse.json()

      context.commit('insertarUsuarios', usuarios)
    },
  },

  modules: {
  },
});
