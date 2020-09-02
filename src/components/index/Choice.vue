<template>
<!-- 选项栏 -->
  <div class="option">
      <router-link class="option_1 opt" v-for="(item,index) in list" :key="index" :to="item.to" tag="div">
        <img :src="item.img" alt="">
        <p :class="item.class">{{item.cont}}</p>
      </router-link>
      <!-- <div class="option_2 opt" :to="list[1].to">
        <img src="../../assets/indeximg/icon_07@3x.png" alt="">
        <p class="p2">自定义课程</p>
      </div>
      <div class="option_3 opt" :to="list[2].to">
        <img src="../../assets/indeximg/icon_08@3x.png" alt="">
        <p class="p3">我的喜欢</p>
      </div> -->
  </div>
</template>

<script>
import recent from '../../assets/indeximg/icon_06@3x.png'
import custom from '../../assets/indeximg/icon_07@3x.png'
import mylike from '../../assets/indeximg/icon_08@3x.png'
export default {
  data() {
    return {
        list:[
          {
            img:recent,
            to:'/recent',
            cont:'最近练习',
            class:'p1'
          },
          {
            img:custom,
            to:'/custom',
            cont:'自定义课程',
            class:'p2'
          },
          {
            img:mylike,
            to:'/mylike',
            cont:'我的喜欢',
            class:'p3'
          }
        ]
    };
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
        margin-top: 200px;
        // background: pink;
       
        .opt{
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
            margin-top: 3px;
          }
          p{
            font-size: 12px;
            line-height: 8px;
            margin-top: 10px;
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
