<template>
  <div class="open-vip">
    <MineTitle :title="title" />
    <div class="vip-card">
      <div class="bg">
        <img src="../../assets/images/mine/vipbg.png" alt="">
      </div>
      <div class="card">
        <p><strong>VIP</strong>未开通</p>
        <p class="card-text">会员可解锁全部冥想课程<br/>
        后期添加的冥想课程也将自动解锁</p>
        <img src="../../assets/images/mine/huangguan.png" alt="">
      </div>
    </div>
    <h2 class="package">会员套餐</h2>
    <ul class="price">
      <li
        :class="{'li-active': index === active}"
        v-for="(item,index) in vipPrice"
        :key="index"
        @click="setIndex(index)"
      >
        <h3>{{item.vipTimer}}</h3>
        <div>
          <strong>{{item.hint}}</strong>
          <span>￥{{item.price}}</span>
          <p>{{item.originalPrice}}</p>
        </div>
      </li>
    </ul>
    <div>
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>

    <h2 class="package">VIP专属特权</h2>
    <ul class="privilege">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p class="policy">
      <a href>《会员服务协议》</a>|<a href>《隐私政策》</a>
    </p>
    <div class="openvip-btn" @click="price">立即开通/续费</div>
  </div>
</template>
<script>
import MineTitle from "./MineTitle";

import { Dialog } from "vant";
export default {
  data() {
    return {
      showList: false,
      title: { name: "立即开通会员" },
      message: "",
      tel: "",
      active: 0,
      vipPrice: [
        {
          vipTimer: "月会员",
          price: "50",
          originalPrice: "原价￥58.00",
          hint: "限时特惠",
        },
        {
          vipTimer: "半年会员",
          price: "218",
          originalPrice: "月均￥36.3",
          hint: "立省70元",
        },
        {
          vipTimer: "年费会员",
          price: "328",
          originalPrice: "月均￥27.3",
          hint: "立省248元",
        },
        {
          vipTimer: "永久会员",
          price: "1298",
          originalPrice: "尊享会员",
          hint: "立省248元",
        },
      ],
      chosenCoupon: -1,
      discounts: 0,
      coupons: [
        {
          available: 1,
          condition: "无使用门槛\n最多优惠12元",
          reason: "",
          value: 2000,
          name: "优惠券名称",
          startAt: 1489104000,
          endAt: 1514592000,
          valueDesc: "20",
          unitDesc: "元",
        },
      ],
    };
  },
  computed: {
    openVipPrice() {
      return this.vipPrice[this.active].price - this.discounts;
    },
  },
  components: {
    MineTitle,
  },
  methods: {
    setIndex(i) {
      this.active = i;
    },
    onChange(index) {
      if(index!='-1'){
      this.discounts = this.coupons[index].valueDesc;
      }else{
      this.discounts = 0
      }
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    price() {
      Dialog.confirm({
        title: "开通会员",
        message: "￥" + this.openVipPrice,
      }).then(() => {
          Dialog.alert({
            title: "开通成功"
          }).then(() => {
            // on close
          });
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
<style lang="scss">
.open-vip {
  background: #ffffff;
  padding-bottom: 55px;
  .vip-card {
    width: 100%;
    height: 280px;
    // background: red;
    position: relative;
    .bg{
      img{
        width: 100%;
      }
    }
    .card {
      width: 90%;
      height: 180px;
      background: #ffca7a;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border-radius: 10px;
      padding: 20px;
      img{
        width: 80px;
        height: 60px;
        position: absolute;
        right: 20px;
        bottom: 70px;
      }
      .card-text{
        font-size: 14px;
        line-height: 30px;
        margin-top: 20px;
      }
      p{
        font-size: 20px;
        color:#795533;
        strong{
          margin-right: 20px;
          font-size: 50px;
          font-weight: 800;
          font-style: italic;
        }
      }
    }
  }
  .package {
    width: 100%;
    font-size: 18px;
    margin: 20px 0;
    padding-left: 20px;
  }
  .price {
    width: 375px;
    white-space: nowrap;
    overflow: auto;
    margin-bottom: 20px;
    padding-right: 10px;
    li {
      display: inline-block;
      margin-left: 25px;
      width: 100px;
      height: 130px;
      border-radius: 15px;
      border: 1px solid #f2f2f2;
      overflow: hidden;
      h3 {
        // width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30%;
        background: #f2f2f2;
        font-size: 18px;
        color: #1b2950;
      }
      div {
        width: 100%;
        height: 70%;
        background: #fff;

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        padding: 10px 0;
        strong {
          font-size: 16px;
          font-weight: 100;
          padding: 5px;
          background: #ff5363;
          border-radius: 5px;
          color: #fff;
        }
        span {
          font-size: 30px;
          color: #1b2950;
          font-weight: 800;
        }
        p {
          font-size: 12px;
          color: #b7babf;
        }
      }
    }
    .li-active {
      border: 1px solid #f9d798;

      h3 {
        background: #f9d798;
      }
      div {
        background: #fcf1dd;
      }
    }
  }
  .privilege {
    width: 100%;

    li {
      display: inline-block;
      width: 110px;
      height: 120px;
      border: 1px solid #ccc;
      margin-left: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
  .openvip-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background: #fece79;
    color: #4c331d;
    font-size: 20px;
    font-weight: 800;
    line-height: 55px;
    text-align: center;
  }
  .policy {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    margin-bottom: 10px;
    color: #757575;
  }
}
</style>