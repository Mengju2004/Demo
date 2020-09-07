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
    },
    // 获取睡眠数据
    sleepDetail(state, payload) {
        state.sleepDetaillist = payload.result
    },
    changeMeditationPage(state, payload) {
        state.meditationPage = payload
    }
}
export default mutations