const mutations = {
    relaxCourse(state, payload) {

        state.relaxCourse = payload.result
    },
    focusCourse(state, payload) {
        state.focusCourse = payload.result
    },
    habitCourse(state, payload) {
        state.habitCourse = payload.result
    },
    sleepingCourse(state, payload) {
        state.sleepCourse = payload.result
    }
}
export default mutations