<template>
<!-- 为你推荐 -->
  <div class="recommend">
      <div class="foryou">为你推荐</div>
      <van-card
        currency=""
        price="7 课时 · 14877人练习"
        desc="0基础小白必备!适合零技术用户正确练习冥想,感受与心灵的第一次对话"
        title="7天基础冥想训练"
        :thumb="urlimg"
        v-for="(item, index) in 2" :key="index"
        >
            <template #tags>
                <van-tag class="tag" plain type="danger">免费</van-tag>
            </template>
        </van-card>
                <!-- thumb="https://img.yzcdn.cn/vant/ipad.jpeg" -->
  </div>
</template>

<script>
import imggg  from '../../assets/indeximg/img_01.png'
export default {
  data() {
    return {
        urlimg: imggg
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.recommend{
    margin-top: 30px;
    top: 475px;
    width: 362px;
    .foryou{
        font-size: 16px;
        color: #253862;
        margin-left: 16px;
    }
    .van-card{
        background: #fafafa;
        margin-bottom: 20px;
        width: 311px;
        height: 112px;
        margin-left: 51px;
        margin-right: 13px;
        .van-card__thumb{
            position: absolute;
            margin-left: -54px;
            background: white;
            width: 68px;
            height: 91px;
            
        }
        .van-card__content{
            margin-left: 25px;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .van-card__title{
            width: 109px;
            height: 16px;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #253862;
        }
    
        .van-card__desc{
            width: 230px;
            height: 28px;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #C3C7CC;
            line-height: 16px;
            overflow: visible; 
            white-space: pre-wrap; 
            text-overflow:none;
            margin-top: 10px;
        }
        .van-card__bottom{
            margin-top:20px;
        }
        .van-card__price-integer{
            width: 115px;
            height: 11px;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #49BBFD;
        }
        .tag{
              width: 29px;
              height: 16px;
              text-align: center;
              background: #7CF8B4;
              position: absolute;
              right: -48px;
              top:19px;  
              border-radius: 7px 0 0 7px;
              font-size: 9px;
        }
    }
}
</style>
