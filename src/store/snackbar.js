// class Snackbar {
//   visible = false
//   timeout = 5000
//   x = 'right'
//   y = 'bottom'
//   mode = ''
//   text = ''
// }

const state = {
  snackbar: { visible: false, timeout: 5000, x: 'right', y: 'bottom', mode: '', text: '' }
}

const getters = {
  snackbar: (state) => {
    return state.snackbar
  }
}

const actions = {
  configureSnackbar (context, snackbar = null) {
    context.commit('configureSnackbar', snackbar)
  },
  showMessage (context, text) {
    context.commit('showMessage', text)
  },
  hideMessage (context) {
    context.commit('hideMessage')
  }
}

const mutations = {
  configureSnackbar (state, snackbar) {
    if (snackbar === null) {
      state.snackbar = { visible: false, timeout: 5000, x: 'right', y: 'bottom', mode: '', text: '' }
    } else {
      state.snackbar = snackbar
    }
  },
  showMessage (state, text) {
    state.snackbar.text = text
    state.snackbar.visible = true
  },
  hideMessage (state) {
    state.snackbar.visible = false
  }
}

export default {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
