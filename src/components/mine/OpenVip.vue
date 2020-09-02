<template>
  <div class="open-vip">
    <MineTitle :title="title" />
    <div class="vip-card">
      <div></div>
      <div class="card"></div>
    </div>
    <h2 class="package">会员套餐</h2>
    <ul class="price">
      <li :class="{'li-active': index === active}" 
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
        <van-cell title="抵扣卷" is-link value="暂无" />
  </div>
</template>
<script>
import MineTitle from "./MineTitle";

export default {
  data() {
    return {
        showList:false,
      title: {
        name: "立即开通会员",
      },
      message: "",
      tel: "",
      active:0,
      vipPrice: [
        {
          vipTimer: "月会员",
          price:'50',
          originalPrice:'原价￥58.00',
          hint:'限时特惠'
        },{
          vipTimer: "半年会员",
          price:'218',
          originalPrice:'月均￥36.3',
          hint:'立省70元'

        },{
          vipTimer: "年费会员",
          price:'328',
          originalPrice:'月均￥27.3',
          hint:'立省248元'

        },{
          vipTimer: "永久会员",
          price:'50',
          originalPrice:'58.00',
           hint:'立省248元'
        },
      ],
    };
  },
  components: {
    MineTitle,
  },
  methods: {
      setIndex(i){
          this.active = i
      }
  },
};
</script>
<style lang="scss">
.open-vip {
    background: #ffffff;
  .vip-card {
    width: 100%;
    height: 280px;
    background: red;
    position: relative;
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
    }
  }
  .package {
    width: 100%;
    font-size: 22px;
    margin: 25px 0;
    padding-left: 25px;
  }
  .price {
    width: 375px;
    white-space: nowrap;
    overflow: auto;
    margin-bottom: 20px;
    li {
      display: inline-block;
      margin-left: 25px;
      width: 100px;
      height: 150px;
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
}
</style>