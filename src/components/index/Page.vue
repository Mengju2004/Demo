<template>
<!-- 首页所有内容组件都在这 -->
  <div class="page">
    <div style="padding-top: 1px;">
            <greet></greet>
            <choice></choice>
            <recommend></recommend>
            <experience></experience>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import greet from './Greet'
import choice from './Choice'
import recommend from './Recommend'
import experience from './Experience'
export default {
  data() {
    return {};
  },

  components: {
    greet,
    choice,
    recommend,
    experience
  },

  computed: {},

  mounted() {
        this.$nextTick(() => {
        // 创建实例，第一个参数是操作的元素， 第二个是传递的参数
        // http://ustbhuangyi.github.io/better-scroll/doc/api-specific.html
        let bScroll = new BScroll('.page', {
          // 滚动部分允许点击
          click: true,
          // 允许上拉加载
          pullUpLoad: true
        })
        // 上拉加载，监听pullingUp方法
        bScroll.on('pullingUp', () => {
          // this.index++
          // 告诉bScroll已经加载完了，可以下一次加载了
          bScroll.finishPullUp()
        })
      })
  },

  methods: {

 
  }
};
</script>
<style lang='scss' scoped>
.page{

    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0px;
    overflow: hidden;
}

</style>
