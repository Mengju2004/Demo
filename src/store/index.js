import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from "@/store/state";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
})
