const actions = {
    activePageChange({commit},payload){
        const index = payload
        commit('changeMeditationPage',index)
    }
}
export default actions