
let state = {
    carts:[]
}

let mutations = {
    addCart:(state , cart) => {
        console.log('cart vuex')
        console.log(state)
        console.log(cart)
        state.carts.push(cart)
    }
}

let getters = {
    cartLength(state) {
        return state.carts.length;
    }
}

export default {
    state,
    getters,
    mutations
}