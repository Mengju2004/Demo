<template>
  <div class="start">
    <p class="section-title">{{ title }}</p>
    <div class="start-list">
      <div class="start-item" v-for="(item,index) in courseList " :key="index" >
        <div class="fee-label vip" v-if="item.price===2">VIP</div>
        <div class="fee-label free" v-else>免费</div>
        <img
            :src=item.imgUrl alt="">
        <p class="class-title">{{item.className}}</p>
        <p class="class-hour">{{item.classTime}}课时</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GettingStarted",
  props: {
    title: String,
    courseList: Array
  },

}
</script>

<style scoped lang="scss">
.start {
  width: 100%;

  .start-list {
    padding-bottom: 5px;
    height: 100%;
    display: flex;
    overflow-x: scroll;
    //overscroll-behavior: contain;

    &::-webkit-scrollbar {
      display: none;
    }

    .start-item {
      width: 109px;
      height: 204px;
      background: #FFFFFF;
      box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin-right: 10px;
      position: relative;


      .fee-label {
        display: block;
        width: 29px;
        height: 16px;
        border-radius: 8px;
        position: absolute;
        text-align: center;
        line-height: 16px;
        top: 14px;
        right: 14px;
      }

      .vip {
        font-size: 7px;
        background: #FBA10B;
        font-weight: 500;
        color: #984806;
      }

      .free {
        font-size: 10px;
        font-weight: 500;
        color: #013300;
        background: linear-gradient(90deg, #77F5AF, #2DCA73);
      }

      img {
        width: 109px;
        height: 145px;
        border-radius: 5px 5px 0px 0px;
      }

      .class-title {
        margin-top: 6px;
        padding: 0 10px;
        width: 100%;
        font-size: 11px;
        font-weight: bold;
        color: #1A264F;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .class-hour {
        display: block;
        padding: 0 10px;
        width: 100%;
        font-size: 10px;
        color: #5EC0FE;
        margin-top: 10px;
      }
    }
  }
}
</style>