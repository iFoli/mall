export default {
  carLength(state) {
    return state.carList.length
  },
  carList(state) {
    return state.carList
  },
  cartCount(state, getters) {
    return getters.carList.length
  }
}
