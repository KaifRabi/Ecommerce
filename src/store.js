import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        cart : [],
        itemSearched: '',
        isDiscount: false,
        totalPrice: 0
    },
    getters: {

    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
            state.totalPrice += product.price;
        },
        searchData(state, data) {
            state.itemSearched = data
        },
        isDiscount(state, data) {
            state.isDiscount = data
        },
        emptyCart(state) {
            state.cart = []
            state.totalPrice = 0
        }
    },
    actions: {
        addToCart({commit}, productId){
            commit('ADD_TO_CART', productId)
        },
        searchData({commit}, itemSearched){
            commit('SEARCH_DATA', itemSearched)
        },
        isDiscount({commit}, isDiscount){
            commit('IS_DISCOUNT', isDiscount)
        },
        emptyCart({commit}){
            commit('EMPTY_CART')
        }
    }
})
