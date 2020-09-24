import { createStore } from "vuex";
import ax from "axios";
import router from "./../router";

export default createStore({
  state: {
    apiUrl: "http://localhost:5000",
    products: Array,
    cart: [],
    confirmed: Object,
    ui: {
      showCart: false,
    },
  },
  mutations: {
    toggleCart(state) {
      state.ui.showCart = !state.ui.showCart;
    },
    updateProducts(state, data) {
      state.products = data;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    orderConfirmed(state, confirm) {
      state.confirmed = confirm.data;
    },
    emptyCart(state) {
      state.cart = [];

      // Route to confirmation
      router.push("/confirmation");
    },
  },
  actions: {
    async fetchProducts(ctx) {
      try {
        let resp = await ax.get(`${ctx.state.apiUrl}/products`);
        console.log("get data from db", resp);
        ctx.commit("updateProducts", resp.data.products);
      } catch (err) {
        console.error(err);
      }
    },
    async sendOrder(ctx) {
      let data = await ax.post(`${ctx.state.apiUrl}/orders`, {
        items: ctx.state.cart,
      });
      console.log("data from db", data);
      // Show order has been successful
      ctx.commit("orderConfirmed", data);

      // Empty cart
      ctx.commit("emptyCart");

      // toggle Cart
      ctx.commit("toggleCart");
    },
  },
  getters: {
    products: (state) => {
      return state.products;
    },
  },
});
