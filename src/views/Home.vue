<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar route v-model="active" active-color="#5F73D5" inactive-color="#C8CBD3" :border="false" z-index="99"
                :safe-area-inset-bottom="true" :placeholder="true" v-bind:class="{ activebgcolor: isActive==1}">
      <van-tabbar-item v-for="(item,index) in tabBarList" :key="index" :to="item.to" @click="changebarindex(index)" >
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.icon.active : item.icon.inactive"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  icon01active,
  icon01inactive,
  icon02active,
  icon02inactive,
  icon03active,
  icon03inactive,
  icon04active,
  icon4inactive,
  icon05active,
  icon05inactive
} from "../../public/icons/tabBarVar";


export default {
  data() {
    return {
      active: 0,
      isActive:null,
      tabBarList: [
        {
          name: '首页',
          to: '/index',
          icon: {
            active: icon01active,
            inactive: icon01inactive,
          }
        },
        {
          name: '睡眠',
          to: '/sleep',
          icon: {
            active: icon02active,
            inactive: icon02inactive,
          }
        },
        {
          name: '冥想',
          to: '/med',
          icon: {
            active: icon03active,
            inactive: icon03inactive,
          }
        },
        {
          name: '音乐',
          to: '/music',
          icon: {
            active: icon04active,
            inactive: icon4inactive,
          }
        },
        {
          name: '我的',
          to: '/mine',
          icon: {
            active: icon05active,
            inactive: icon05inactive,
          }
        }
      ]
    }
  },
  methods:{
    changebarindex(index){
      this.isActive=index
    }
  }
}
</script>

<style  lang="scss" scoped>
::v-deep .van-tabbar__placeholder{
  background:white
}
::v-deep .activebgcolor{
  background: #292929;
}
::v-deep .van-tabbar--fixed{
  background-color: transparent;
}

  
.home {
  height: 100%;
 

  .van-tabbar-item {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    font-weight: bold;
    img {
      width: 17.33px;
      height: 17.33px;
      
    }
  }
}

</style>