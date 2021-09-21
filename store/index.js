export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedUser(state) {
      return state.auth.user
    },

    getTitle(state){
      return state.title;
    }
  }
  
export const state = () => ({
    title: '',
})

export const mutations = {
  updtTitle(state, newTitle) {
      state.title = newTitle;
  },
}