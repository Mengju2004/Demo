<template>
  <div class="mine">
    <div class="mine-info">
      <div class="info-warp">
        <div class="info-img" @click="setInfo">
          <img src="../assets/images/mine/tx_03.png" alt="">
        </div>
        <h2>未登陆</h2>
        <ul>
          <li>
            <strong>0</strong>
            <p>连续冥想天数</p>
          </li>
          <li>
            <strong>0</strong>
            <p>连续冥想天数</p>
          </li>
          <li>
            <strong>0</strong>
            <p>连续冥想天数</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="take" @click="openVip">
      <div class="take-img">
        <img src="../assets/images/mine/huangguan.png" alt="">
      </div>
      <div class="take-text">
        <span>订阅全部内容</span>
        <p>和9万冥想用户一起练习</p>
      </div>
      <span class="open"></span>
    </div>
    <UserOption/>
  </div>
</template>

<script>

// 引入用户点击我的选项组件
import UserOption from '../components/mine/UserOption'

export default {
 components:{
   UserOption
 },
 methods: {
   setInfo(){
    this.$router.push('/setinfo')
   },
   openVip(){
    this.$router.push('/openvip')

   }
 },
};
</script>

<style scoped lang="scss">
.mine {
  background: #FAFAFA;
  padding-bottom: 50px;
  .mine-info {
    width: 100%;
    height: 164px;
    background: red;
    position: relative;
    background: url('../assets/images/mine/bg.png') no-repeat center;
    background-size: 100%;
    .info-warp {
      width: 346px;
      height: 157px;
      background: #f2f4f6;
      border-radius: 5px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: translateY(107px);
      .info-img {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-30px);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #fff;
        img{
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        margin-top: 47px;
        text-align: center;
        font-size: 18px;
      }
      ul {
        display: flex;
        position: absolute;
        bottom: 20px;
        width: 100%;
        li {
          position: relative;
          text-align: center;
          width: 33.3%;
          strong {
            font-size: 24px;
          }
          p {
            margin-top: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .take {
   
    margin: 110px auto 0;
    width: 349px;
    height: 72px;
    border-radius: 5px;
    background: #f3d8a0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .take-img {
      width: 50px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .take-text {
      font-size: 0;
      width: 250px;
      margin-left: 10px;
      color: #634927;
      span {
        font-size: 15px;
        line-height: 25px;
      }
      p {
        font-size: 14px;
      }
    }
    .open{
      width: 20px;
      height: 20px;
      background: url('../assets/images/mine/jiantou.png') no-repeat center;
      background-size: 100%;
    }
  }
 
}
</style>