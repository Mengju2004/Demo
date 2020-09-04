<template>

  <div class="sleep" v-if="sleepshow==1">
    <!-- 头部 -->
    <header class="sleep-head">
        睡眠
    </header>
    <!-- 列表部分 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh">
          <ul class="sleep-ul">        
              <li v-for="(item, index) in sleeplist" :key="index"  @click="sleepdetail(item.id)" >
                <img :src="item.bgimg" alt="">
                <!-- v-show判断哪个 -->
                <span class="sleep-vip sleep-litag" v-show="item.type==1">VIP</span>
                <span class="sleep-free sleep-litag" v-show="item.type==0">限免</span>
                <div class="sleep-litext">
                  <p class="sleep-title">{{item.title}}</p>
                  <p class="sleep-time">{{item.classtime}}<span>课时</span></p>
                </div>
              </li>
          </ul>
        </van-pull-refresh>
      <!-- 路由过度 -->
      <transition :name="transitionName">
        <router-view class="view" ></router-view>
      </transition>    
  </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios'
export default {
  data() {
    return {
      sleepshow:'1',
      sleeplist:[],
      transitionName:'',
      count: 0,
      isLoading: false,
    }
  },
  watch: {//使用watch 监听$router的变化
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
  	    //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    },
  methods:{
    sleepdetail(id){
      // this.$router.push('/sleepdetail'+id)
      // this.$router.push('/sleepdetail')
      // this.$router.push('/sleep/detail'+id)
      this.$router.push('/sleep/detail/'+id)
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    async getSleepDetail() {
      const result = await axios.get('https://www.fastmock.site/mock/92b2aa5aad657b16fceb340aca7bcd54/yimingxiang/sleeplist').then(data => data.data.result.list)
      this.$store.commit('sleepDetail', {result})
      console.log(result);
      this.sleeplist=result
    }
  },
  mounted(){
    this.getSleepDetail();
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
      // 过度效果css-----------------------------------------------
      .view {
          width: 100%;
          position: absolute;
        }
        .slide-right-enter-active,
        .slide-right-leave-active,
        .slide-left-enter-active,
        .slide-left-leave-active {
          will-change: transform;
          transition: all 300ms;
          position: absolute;
        }
        .slide-right-enter {
          transform: translate3d(100%, 0, 0);
        }
        .slide-right-leave-active {
          transform: translate3d(100%, 0, 0);
        }
        .slide-left-enter {
          transform: translate3d(100%, 0, 0);
        }
        .slide-left-leave-active {
          transform: translate3d(100%, 0, 0);
        }
      // -------------------------------------------------
      .sleep-head{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: 'PingFang SC';
        font-weight: bold;
        color: #FFFEFE;
        width: 375px;
        height: 44px;
        background: #292929;
      }
      // 下拉刷新css
      .refresh{
        position: absolute;
        padding-bottom:14px;
        top: 43px;
        left: 0;
        right: 0;
        // bottom 需要更改
        bottom: 49px;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
        background:#191919;
      }
      .sleep-ul{
        padding-bottom:14px;
        background:#191919;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly; 
        li{
          width: 167px;
          height: 223px;
          border-radius: 5px;
          margin-top:14px;
          position: relative;
          img{
            width: 167px;
            height: 223px;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 5px;

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
            font-family:' PingFang SC';
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
            // opacity: 0.8;
            background: rgba(68,100 ,138, 0.8);
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