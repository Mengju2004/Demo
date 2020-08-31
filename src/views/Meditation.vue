<template>
  <div class="meditation">
    <van-swipe class="my-swipe" indicator-color="white" :show-indicators="false">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>5</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
}
</script>

<style scoped lang="scss">
.meditation {
  position: absolute;
  bottom: 50px;
  top:0;
  left: 0;
  right: 0;
  background-color: navajowhite;
}
</style>