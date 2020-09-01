<template>
<!-- 首页最后一块内容 -->
  <div class="experience">
      <div class="p1">正在和你一起冥想的伙伴</div>
      <div class="p2">98640</div>
      <div class="p3">
        立即体验全部课程
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
    .experience{
        background:url('../../assets/indeximg/img_02.jpg');
        background-size: 100% 100%;
        top: 756px;
        width: 350px;
        height: 182px;
        margin-left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .p1{
            color: white;
            font-size: 16px;
            margin-top: 10px;
        }
        .p2{
            color: white;
            font-size: 32px;
             margin-top: 10px;
        }
        .p3{
            width: 250px;
            height: 35px;
            background: orange;
            margin-top: 10px;
            font-size: 16px;
            text-align: center;
            border-radius: 30px;
            line-height: 35px;
        }
    }
</style>
