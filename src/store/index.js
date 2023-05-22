import Vue from "vue";
import Vuex from "vuex";
import userService from "../service/userService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterVariant: {
      country: null,
      score: null,
    },
    users: [],
    isLoadUsers: false,
  },
  getters: {
    filtredUsers({ users, filterVariant }) {
      let temp = [...users];

      if (filterVariant.country) {
        temp = temp.filter((item) => {
          if (!item.country) return true;
          return item.country.toLowerCase() === filterVariant.country;
        });
      }

      if (filterVariant.score) {
        temp = temp.filter((item) => {
          if (!item.score) return true;
          const variantScore = filterVariant.score.split(" ")[1];
          const operatoinType = filterVariant.score.split(" ")[0];
          switch (operatoinType) {
            case ">":
              return item.score > variantScore;
            case "<":
              return item.score < variantScore;
            default:
              break;
          }
        });
      }
      return temp;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoadUsers(state, status) {
      state.isLoadUsers = status;
    },
    setCountryVariant({ filterVariant }, country) {
      filterVariant.country = country;
    },
    setScoreVariant({ filterVariant }, score) {
      filterVariant.score = score;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await userService();
      commit("setLoadUsers", true);
      commit("setUsers", response);
    },
  },
});
