<template>
  <div class="recommend">
    <van-swipe indicator-color="#FFFFFF" autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
    <getting-started title="入门" :courseList="startCourse"></getting-started>
    <column-item :column-course="hotCourse" title="热门"></column-item>
    <getting-started title="限时免费" :courseList="limitTimeCourse"></getting-started>
    <column-item :columnCourse="item.data"
                 :title="item.title"
                 :to="item.to"
                 @Recommend="Med"
                 v-for="item in sectionList"
                 :key="item.to"
    ></column-item>
  </div>
</template>

<script>
import GettingStarted from "@/components/MeditationComponents/GettingStarted";
import ColumnItem from "@/components/MeditationComponents/ColumnItem";
import axios from 'axios'

export default {
  name: "Recommend",
  data() {
    return {
      images: [],
      startCourse: [],
      limitTimeCourse: [],
      hotCourse: [],
    }
  },
  components: {
    ColumnItem,
    GettingStarted,
  },
  computed: {
    sectionList() {
      return [
        {
          title: '放松',
          data: this.$store.state.relaxCourse.slice(0, 2),
          to: 1
        }, {
          title: '专注',
          data: this.$store.state.focusCourse.slice(0, 2),
          to: 2
        }, {
          title: '习惯',
          data: this.$store.state.habitCourse.slice(0, 2),
          to: 3
        }, {
          title: '睡眠',
          data: this.$store.state.sleepCourse.slice(0, 2),
          to: 4
        }
      ]
    }
  },
  methods: {
    Med(val) {
      this.$emit('Meditation', val)
    },
    async getImages() {
      this.images = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/banner').then(data => data.data.result.list);
    },
    async getStartedCourse() {
      this.startCourse = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/start').then(data => data.data.result.list)
    },
    async getLimitTimeCourse() {
      this.limitTimeCourse = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/limit').then(data => data.data.result.list)
    },
    async getHotCourse() {
      this.hotCourse = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/hot').then(data => data.data.result.list)
    },
    async getRelaxCourse() {
      const result = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/relax').then(data => data.data.result.list);
      this.$store.commit('relaxCourse', {result})
    },
    async getFocusCourse() {
      const result = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/focus').then(data => data.data.result.list);
      this.$store.commit('focusCourse', {result})
    },
    async getHabitCourse() {
      const result = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/habit').then(data => data.data.result.list)
      this.$store.commit('habitCourse', {result})
    },
    async getSleepCourse() {
      const result = await axios.get('https://www.fastmock.site/mock/04f036f2da6e297714889b73c9cf3746/demo/sleep').then(data => data.data.result.list)
      this.$store.commit('sleepingCourse', {result})
    }
  },
  created() {
    this.getImages();
    this.getStartedCourse();
    this.getLimitTimeCourse();
    this.getHotCourse();
    this.getRelaxCourse();
    this.getFocusCourse();
    this.getHabitCourse();
    this.getSleepCourse()
  },
}
</script>

<style lang="scss">
.recommend {
  flex-direction: column;
  height: 100%;
  overflow: auto;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  .section-title {
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    height: 43px;
    line-height: 43px;
    position: relative;

    .more {
      position: absolute;
      right: 0;
      height: 8px;
      font-size: 8px;
      font-weight: 500;
      color: #C4C8CD;
    }
  }

  .van-swipe__indicator {

  }

  .van-swipe__indicator--active {
    width: 10px;
    height: 5px;
    border-radius: 4px;
  }


  .van-swipe {
    width: 100%;
    height: 151px;
    border-radius: 5px;
    margin-bottom: 17px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>