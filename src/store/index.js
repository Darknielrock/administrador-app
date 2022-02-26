import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './userLogin'
import snackbarModule from './snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isDarkTheme: false
  },
  getters:{
    isLoading: state => state.isLoading,
    isDarkTheme: state => state.isDarkTheme
  },
  mutations: {
    changeLoadingStatus (state, isLoading) {
      if (typeof isLoading !== 'boolean') {
        isLoading = false
      }
      state.isLoading = isLoading
    },
    changeTheme (state, isDarkTheme) {
      if (typeof isDarkTheme !== 'boolean') {
        alert(typeof isDarkTheme)
        isDarkTheme = false
      }
      state.isDarkTheme = isDarkTheme
    }
  },
  actions: {
    changeLoadingStatus (context, isLoading) {
      context.commit('changeLoadingStatus', isLoading)
    },
    changeTheme (context, isDarkTheme) {
      context.commit('changeTheme', isDarkTheme)
    }
  },
  modules: {
    loginModule,
    snackbarModule
  }
})
