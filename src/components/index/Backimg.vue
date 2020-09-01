<template>
<!-- 内容外面的盒子套了张背景图 -->
  <div class="backimg">
      <page></page>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import page from './Page'
export default {
  data() {
    return {};
  },

  components: {
    page,
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>

<style lang='scss' scoped>
  .backimg{
        // padding-top: 67px;
    background: url('../../assets/indeximg/img_01.png');
    background-size: 100% 459px;
    background-repeat:no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
     overflow: auto;
  }
</style>
