<template>
  <div class="meditation">
    <van-tabs v-model="active" @click="fn" color="#30A8FD" title-active-color="#30A8FD" title-inactive-color="black">
      <van-tab :title="item.title" v-for="item in navBarList" :key="item.title"></van-tab>
    </van-tabs>
    <van-swipe @change="onChange" :loop="false" ref="banner" :show-indicators="false">
      <van-swipe-item v-for="item in navBarList" :key="item.title">
        <div class="main-block">
          <!--          <recommend v-if="item.page===0"></recommend>-->
          <!--          <Relax v-if="item.page===1"></Relax>-->
          <!--          <Focus v-if="item.page===2"></Focus>-->
          <!--          <Habit v-if="item.page===3"></Habit>-->
          <!--          <Sleeping v-if="item.page===4"></Sleeping>-->
          <keep-alive>
            <!-- <component is="Recommend"></component> -->
          </keep-alive>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Recommend from "@/components/MeditationComponents/Recommend";
import Relax from "@/components/MeditationComponents/Relax";
import Focus from "@/components/MeditationComponents/Focus";
import Habit from "@/components/MeditationComponents/Habit";
import Sleeping from "@/components/MeditationComponents/Sleeping";

export default {
  components: {
    Recommend,
    Relax,
    Focus,
    Habit,
    Sleeping
  },
  data() {
    return {
      active: 0,
      navBarList: [
        {
          title: '推荐',
          page: 'Recommend',

        },
        {
          title: '放松',
          page: 'Relax'
        },
        {
          title: '专注',
          page: 'Focus'
        },
        {
          title: '习惯',
          page: 'Habit'
        },
        {
          title: '睡眠',
          page: 'Sleeping'
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
      this.active = index
    },
    fn(i) {
      this.$refs.banner.swipeTo(this.active)
    }
  },
}
</script>

<style lang="scss">
.meditation {
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;

  .van-tab {
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    padding-bottom: 6px;
    font-size: 16px;
    font-weight: 300;
  }

  .van-tab--active {
    font-weight: 400;
    font-size: 19px;
  }

  .van-swipe {
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 10px;
    background-color: #5EC0FE;
  }

  .main-block {
    box-sizing: border-box;
    height: 100%;
    width: 355px;
    background-color: white;
  }
}


</style>