<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active" z-index='10' placeholder >
      <van-tabbar-item v-for="(item,index) in tabBarList" :key='index' icon="home-o" :to="item.to">{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          name: '首页',
          to:'/index'
        },
        {
          name: '睡眠',
          to:'/sleep'
        },
        {
          name: '冥想',
          to:'/med'
        },
        {
          name: '音乐',
          to:'/music'
        },
        {
          name: '我的',
          to:'/mine'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>