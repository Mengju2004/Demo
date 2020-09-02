<template>

  <div>
      <indexhead :title="title"></indexhead>
      <div class="prompt">
          <div>在这里,你可以添加你想要的冥想课程。</div>
          <div style="text-align:center">向左滑动可删除冥想课程。</div>
      </div>
      <div class="add"><span class="spa1">＋</span><span class="spa2">添加课程</span></div>
  </div>
</template>

<script>
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

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
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
