<template>
<!-- 选项栏 -->
  <div class="option">
    <div class="option_1">
      <img src="../../assets/indeximg/icon_06@3x.png" alt="">
      <p class="p1">最近练习</p>
    </div>
    <div class="option_2">
      <img src="../../assets/indeximg/icon_07@3x.png" alt="">
      <p class="p2">自定义课程</p>
    </div>
    <div class="option_3">
      <img src="../../assets/indeximg/icon_08@3x.png" alt="">
      <p class="p3">我的喜欢</p>
    </div>
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
    .option{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 82px;
        margin-top: 180px;
        // background: pink;
       
        div{
          width: 107px;
          height: 100%;
          background: white;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img{
            width: 28px;
            height: 28px;
            margin-top: 10px;
          }
          p{
            font-size: 12px;
            line-height: 8px;
          }
          .p1{
            color: #61C2BB;
          }
          .p2{
            color: #B775F2;
          }
          .p3{
            color: #FF8A71;
          }
        }
    }
</style>
