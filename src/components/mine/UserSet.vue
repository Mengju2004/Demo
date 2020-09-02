<template>
  <div class="userset">
    <MineTitle :title="title" />

    <van-cell title="个人资料" is-link to="/setinfo" class="margin-b"/>
    <div class="margin-b">
      <van-cell title="服务协议" is-link />
      <van-cell title="隐私政策" is-link />
      <van-cell title="账号安全" is-link />
    </div>
    <div class="margin-b">
      <van-cell title="清理缓存" is-link />
      <van-cell title="关于我们" is-link />
    </div>
    <van-button type="primary" size="large" round color="#1989fa" >退出当前账号</van-button>
  </div>
</template>
<script>
import MineTitle from "./MineTitle";
export default {
  data() {
    return {
      title: {
        name: "设置",
      },
    };
  },
  components: {
    MineTitle,
  },
};
</script>
<style lang="scss">
.userset{
  background: #ebedf0;
  .margin-b{
    margin-bottom: 2px;
  }
  button{
    width: 80%;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>