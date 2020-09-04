<template>

  <div>
      <indexhead :title="title"></indexhead>
      <div class="custom_tolerance">
            <div>
                  <div class="prompt">
                      <div>在这里,你可以添加你想要的冥想课程。</div>
                      <div style="text-align:center">向左滑动可删除冥想课程。</div>
                  </div>
                  <div class="add">
                      <span class="spa1">＋</span><span class="spa2">添加课程</span>
                  </div>
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
      title:'自定义课程'
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
        let bScroll = new BScroll('.custom_tolerance', {
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
.custom_tolerance{
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0px;
    overflow: hidden;
}
  .prompt{
    width: 300px;
    margin: 100px auto;
    font-size: 16px;
  }
  .add{
    font-size: 16px;
    width: 150px;
    height:40px;
    line-height: 40px;
    text-align: center;
    color: skyblue;
    border: 1px solid skyblue;
    border-radius: 100px;
    margin: 0 auto;
    .spa1{
      display: inline-block;
    	transform:scale(2.5);
      margin-right: 10px;
    }
  }
  
</style>
