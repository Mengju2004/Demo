<template>
  <div>
        <indexhead :title="title"></indexhead>
        <div class="recent_tolerance">
            <div class="cont"> 
                <van-empty description="最近没有练习的内容" />
            </div>
        </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import indexhead from '../public/Head'
export default {
  data() {
    return {
      title:'最近练习'
    };
  },

  components: {
    indexhead,
  },

  computed: {},

mounted() {
        this.$nextTick(() => {
        // 创建实例，第一个参数是操作的元素， 第二个是传递的参数
        // http://ustbhuangyi.github.io/better-scroll/doc/api-specific.html
        let bScroll = new BScroll('.recent_tolerance', {
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

  methods: {}
};
</script>
<style lang='scss' scoped>
.recent_tolerance{
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0px;
    overflow: hidden;
}</style>
