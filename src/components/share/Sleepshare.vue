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
          </div>
          <p class="share-title">深度睡眠舒缓</p>
          <div class="share-num">
              <p>累计冥想时长：138分钟</p>
              <p>连续冥想天数：3天</p>
          </div>
          <p class="share-dsc">如今的时代，过分的温柔是要吃亏的。</p>
      </div>

      <div class="share-share btn">分享给朋友</div>
      <div class="cancle btn">取消</div>
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
.share-com{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 500;
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
            // filter: blur(10px);
            background-size: cover;
        }
    }
    .share-main{
        width: 300px;
        height: 500px;
        // background: white;
        .share-smimg{
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 500px;
            z-index: -1;
        }
        color: white;
    }
}
</style>
