<template>
<!-- 首页招呼栏 -->
  <div class="greet">
      <p class="p1">早上好</p>
      <p class="p2">相信我,上天会厚待那些勇敢的丶坚强的丶多情的人。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
    .greet{
        width: 285px;
        margin-left: 31px;
        margin-right: 60px;
        .p1{
            font-size: 33px;
            color: #C4C6CC;
            margin-top: 67px;
        }
        .p2{
          font-size: 14px;
          color: white;
          margin-top: 30px;
        }
    }
</style>
