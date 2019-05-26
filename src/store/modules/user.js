
let state = {
    user:{name:'1234'}
}

let mutations = {
    changeUser:(state , ployload) => {
        console.log(state)
        console.log(ployload)
        state.user = ployload
    }
}

export default {
    state:state,
    mutations:mutations
}