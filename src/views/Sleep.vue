<template>

  <div class="sleep">
    <!-- 头部 -->
    <header class="sleep-head">
        睡眠
    </header>
    <!-- 列表部分 -->
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh"> -->
      <ul class="sleep-ul">
          <li v-for="(item, index) in 10" :key="index"  @click="sleepdetail">
            <!-- <img src="../img/img_14_极速看图.png" alt=""> -->
            <!-- v-show判断哪个 -->
            <span class="sleep-vip sleep-litag">VIP</span>
            <span class="sleep-free sleep-litag">限免</span>
            <div class="sleep-litext">
              <p class="sleep-title">睡眠故事</p>
              <p class="sleep-time">8<span>课时</span></p>
            </div>
          </li>
      </ul>
       <!-- </van-pull-refresh> -->
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sleeplist:[{

      }],
    }
  },
  methods:{
    sleepdetail(){
      // this.$router.push('/sleepdetail'+id)
      this.$router.push('/sleepdetail')
      // this.$router.push('/detail')
    },
  }
}
</script>

<style scoped lang="scss">
      *{
        padding: 0;
        margin: 0;
      }
    .sleep{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .sleep-head{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFEFE;
        width: 375px;
        height: 44px;
        background: #292929;
        // position: fixed;
        // top: 0;
        // left: 0;
      }
      .sleep-ul{
       position: absolute;
        padding-bottom:14px;
        top: 44px;
        left: 0;
        right: 0;
        // bottom 需要更改
        bottom: 55px;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        background:#191919;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly; 
        // .refresh{
        //   position: absolute;
        //   width: 100%;
        //   padding-bottom:14px;
        //   top: 44px;
        //   left: 0;
        //   right: 0;
        //   // bottom 需要更改
        //   bottom: 55px;
        //   overflow: auto;
        //   &::-webkit-scrollbar {
        //       display: none;
        //   }
        //   background:#191919;
        //   overflow: auto;
        //   display: flex;
        //   flex-wrap: wrap;
        //   justify-content: space-evenly;
        //   .van-pull-refresh__track{
        //     width: 100%;
        //     height: 500px;
        //   }
        // }
        li{
          width: 167px;
          height: 223px;
          // background: violet;
          background: url(../assets/sleepimg/sleepimg1.png);
          background-size: 167px 223px;
          border-radius: 5px;
          margin-top:14px;
          position: relative;
          img{
            width: 167px;
            height: 223px;
          }
          .sleep-litag{
            width: 29px;
            height: 16px;
            border-radius: 8px;
            position: absolute;
            top: 15px;
            right: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-family: PingFang SC;
            font-weight: 500;
          }
          .sleep-vip{
            color: #984705;
            background: linear-gradient(90deg, #FEBE3A, #F99F12);
          }
          .sleep-free{      
            background: linear-gradient(90deg, #5EC0FE, #3A9EF2);
            color: #145D93;
          }
          .sleep-litext{
            position: absolute;
            bottom: 0;
            height: 60px;
            width: 100%;
            opacity: 0.8;
            border-radius: 0 0 5px 5px;
            font-size: 16px;
            // background: crimson;   
            display: flex;
            flex-direction: column;           
            align-items: center;
            justify-content: space-evenly;
            .sleep-title{
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .sleep-time{
              margin-top: -8px;
              font-size: 11px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
              span{
                margin-left: 5px;
              }
            }
          }

        }
      }
    }
</style>