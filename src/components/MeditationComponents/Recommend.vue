<template>
  <div class="recommend">
    <van-swipe indicator-color="#FFFFFF">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
    <getting-started title="入门"></getting-started>
    <hot-class title="热门"></hot-class>
    <getting-started title="限时免费"></getting-started>
    <hot-class title="放松" to="1" ></hot-class>
    <hot-class title="专注"></hot-class>
    <hot-class title="习惯"></hot-class>
    <hot-class title="睡眠"></hot-class>
  </div>
</template>

<script>
import GettingStarted from "@/components/MeditationComponents/GettingStarted";
import HotClass from "@/components/MeditationComponents/HotClass";

export default {
  name: "Recommend",
  data() {
    return {
      images: [
        'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=644397205,1235585350&fm=179&app=42&f=JPEG?w=121&h=140&s=32D7A9764E734C8654E7A9FB02009039',
        'https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/20a2b33533fa828b5baaa7dffa1f4134960a5a99.jpg',
        'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=644397205,1235585350&fm=179&app=42&f=JPEG?w=121&h=140&s=32D7A9764E734C8654E7A9FB02009039',
        'https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/20a2b33533fa828b5baaa7dffa1f4134960a5a99.jpg',
      ],
    }
  },
  components: {
    GettingStarted,
    HotClass
  },
  methods:{
  }
}
</script>

<style lang="scss">
.recommend {
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;

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
    width: 346px;
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