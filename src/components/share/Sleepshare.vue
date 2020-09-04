<template>
  <div class="share-com">
      <!-- 大模糊背景图 -->
      <div class="share-imgcon">
        <img src="https://ss2.meipian.me/users/1824004/a28835dcf44b48659b895f5b880d4554.jpg?meipian-watermark/bucket/ivwen/key/dXNlcnMvMTgyNDAwNC9hMjg4MzVkY2Y0NGI0ODY1OWI4OTVmNWI4ODBkNDU1NC5qcGc=/nickname/5Lid6Zuo/userid/MTgyNDAwNA==/sign/3e19bf1abd65735a3cbce6f717083a20%7cimageView2/2/w/750/h/1400/interlace/0/q/80" alt="" class="share-bigimg">
      </div>
      <div class="share-main">
          <!-- 小背景图 -->
          <div class="share-imgcon2">
            <img src="https://ss2.meipian.me/users/1824004/a28835dcf44b48659b895f5b880d4554.jpg?meipian-watermark/bucket/ivwen/key/dXNlcnMvMTgyNDAwNC9hMjg4MzVkY2Y0NGI0ODY1OWI4OTVmNWI4ODBkNDU1NC5qcGc=/nickname/5Lid6Zuo/userid/MTgyNDAwNA==/sign/3e19bf1abd65735a3cbce6f717083a20%7cimageView2/2/w/750/h/1400/interlace/0/q/80" alt="" class="share-smimg">
            <div class="share-shadow">
              <!-- 淡黑色遮罩层 -->
                <p class="share-title">深度睡眠舒缓</p>
                <div class="share-num">
                    <p>累计冥想时长：138分钟</p>
                    <p>连续冥想天数：3天</p>
                </div>
                <p class="share-dsc">如今的时代，过分的温柔是要吃亏的。如今的时代，过分的温柔是要吃亏的。</p>
            </div>
          </div>
      </div>

      <div class="share-share btn" @click="showShare = true" >分享给朋友</div>
      <div class="share-cancle btn" @click="changecancle">取消</div>

      <!-- <van-cell title="显示分享面板" @click="showShare = true" /> -->
      <van-share-sheet
        v-model="showShare"
        title="选择要分享到的平台"
        :options="options"
        @select="onSelect"
        :overlay="overlay"
      />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props:{
    // sharestatus:Boolean
  },
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微信朋友圈', icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2838847781,3058874148&fm=26&gp=0.jpg' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      overlay:true,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 关闭分享页面 传给父元素
    changecancle(){
      this.$emit('closepop')
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  }
};
</script>
<style lang='scss' scoped>
//vant组件样式无法更改时  前面加::v-deep
::v-deep .van-overlay{
	    background-color: rgba(0,0,0,0);
}
::v-deep .van-share-sheet__options{
  justify-content: space-evenly;
}
//------------------------------------------
.share-com{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: white;
    z-index: 500;
    overflow: hidden;
    .share-imgcon{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index:-5 ;
        .share-bigimg{
            position: absolute;
            top: -5%;
            left: -5%;
            height: 120%;
            width: 120%;
            filter: blur(5px);
            background-size: cover;
             overflow: hidden;
        }
    }
    .share-main{
        width: 303px;
        height: 501px;
        // background: rgba( 0,0,0,0.5);
        position: absolute;
        top: 12%;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        border-radius: 10px;
        z-index: 0;
        .share-imgcon2{
          .share-shadow{
            position: absolute;
            top: 0;
            left: 0;
            width: 303px;
            height: 501px;
            z-index: 0;
            background: rgba($color: black, $alpha:0.3);
            border-radius: 10px;
            // padding: 20px;
          }
          .share-smimg{
              position: absolute;
              top: 0;
              left: 0;
              width: 303px;
              height: 501px;
              z-index: -1;
              border-radius: 10px;
              // opacity: 0.5;
          }
        }
        .share-title{
          // z-index: 100;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            top: 40px;
            margin-left:20px ;
        }
        .share-num{
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            position: absolute;
            top: 180px;
            margin-left:20px ;
            line-height: 24px;
        }
        .share-dsc{
            width: 90%;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 27px;
            position: absolute;
            bottom: 40px;
            left: 20px;
            transform: translate(0, 0);
        }
    }
    .btn{
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius:20px;
      height: 40px;
      width: 303px;
      // background: chocolate;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: white;
      letter-spacing: 1px;
    }
    .share-share{
      background: #30aaff;
      bottom: 120px;
    }
    .share-cancle{
      background: transparent;
      border: 2px solid white;
      bottom: 50px;
    }
}
</style>
