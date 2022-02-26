class UserInfo {
    IdUser = ''
    Name = ''
    UserName = ''
    Imagen = ''
  }
  
  const state = {
    userInfo: new UserInfo()
  }

  const getters = {
    userInfo: (state) => {
      return state.userInfo
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters
  }