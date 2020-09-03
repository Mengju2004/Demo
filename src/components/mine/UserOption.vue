<template>
  <div>
    <div class="mine-list">
      <van-cell
        v-for="(item,index) in mineList1"
        :key="index"
        :title="item.title"
        is-link
        :icon="item.icon"
      />
    </div>
    <div class="mine-list">
      <van-cell
        v-for="(item,index) in mineList2"
        :key="index"
        :title="item.title"
        is-link
        :icon="item.icon"
      />
    </div>
    <div class="mine-list">
      <van-cell
        v-for="(item,index) in mineList3"
        :key="index"
        :title="item.title"
        is-link
        :icon="item.icon"
      />
    </div>
  </div>
</template>
<script>
// 引入本地图标
import Wode from "../../assets/images/mine/wode.png";
import aixing from "../../assets/images/mine/aixing.png";
import bofang from "../../assets/images/mine/bofang.png";
import hongbao from "../../assets/images/mine/hongbao.png";
import huangguan from "../../assets/images/mine/huangguan.png";
import qianbao from "../../assets/images/mine/qianbao.png";
import qizi from "../../assets/images/mine/qizi.png";
import shezhi from "../../assets/images/mine/shezhi.png";
import xiaoxi from "../../assets/images/mine/xiaoxi.png";
import xing from "../../assets/images/mine/xing.png";

export default {
  data() {
    return {
      mineList1: [
        {
          title: "开通会员",
          icon: Wode,
        },
        {
          title: "我的卡卷",
          icon: qianbao,
        },
        {
          title: "邀请有理",
          icon: hongbao,
        },
      ],
      mineList2: [
        {
          title: "关于易冥想",
          icon: qizi,
        },
        {
          title: "冥想入门指南",
          icon: bofang,
        },
        {
          title: "链接Apple 健康",
          icon: aixing,
        },
        {
          title: "加入冥想交流群",
          icon: xiaoxi,
        },
      ],
      mineList3: [
        {
          title: "意见反馈",
          icon: xing,
        },
        {
          title: "设置",
          icon: shezhi,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.mine-list {
  margin-bottom: 11px;
}
</style>