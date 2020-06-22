export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // state.carList.find(item => item.iid === payload.iid)
      // 1.查找数组中是否有改商品
      let oldProduct = context.state.carList.find(function (item) {
        return item.iid === payload.iid
      })
      // 2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct);
        resolve('商品数量+1')
      } else {
        payload.count = 1;
        // context.state.carList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加到购物车')
      }
    })
  }
}
