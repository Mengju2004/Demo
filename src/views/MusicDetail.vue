<template>
   <div class="musicdetail">
       <div class="arrow" @click="Backoff"> &#8595;</div>
       <p class="play" @click="playfn">
         <img src="../assets/images/icon_@3x.png" alt="">
       </p>
       <div></div>
       <div class="Popup" @click="show = true" v-if="timing">
         {{timing}}
           <!-- {{timing}}==""?{{timing}}:{{minute}} -->
        </div>
         <div class="Popup" @click="show = true" v-if="minute">
         {{minute}}
           <!-- {{timing}}==""?{{timing}}:{{minute}} -->
        </div>
       <van-action-sheet v-model="show" :actions="actions" @select="onSelect"  
       cancel-text="取消"  @cancel="onCancel"/>
   </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '15分钟后' },  { name: '30分钟后' },
      { name: '45分钟后' }, { name: '60分钟后' },
        { name: '75分钟后' }, { name: '90分钟后' },
      ],
      timing:'定时器',
      minute:'',
    };
  },
  methods:{
    Backoff(){
      this.$router.go(-1);
    },
    playfn(){

    },
     onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
      this.timing="";
      this.minute=item.name;
    },
      onCancel() {
      Toast('取消');
      if(this.timing!=''){
        this.minute=''
      }
    },
  },
};
</script>
<style scoped lang="scss">
.musicdetail{
  // width:100%;
  // height:100%;
 // background-image:url(../assets/indeximg/img_01.png);
 background-color: blueviolet;
  // background-size:auto;
  // background-repeat: no-repeat;
   position: absolute;
   top:0;
   left:0;
   right:0;
   bottom: 0;
  //background-color: #00ffff;
  z-index:100;
  .arrow{
    width:12px;
    height:15px;
    font-size:15px;
    font-weight:900;
    text-align: center;
    border-bottom:1px solid black;
    margin:10px 5px;
  }
  .play{
    width:20px;
    height:20px;
    background-color: blue;
    position: absolute;
    bottom:120px;
    left:50%;
    transform: translateX(-50%);
    img{
      width:100%;
      height:100%;
    }
  }
  .Popup{
    position: absolute;
     position: absolute;
        bottom:50px;
        left: 50%;
         transform: translateX(-50%);
         //  .van-cell__value
  }
  }
</style>