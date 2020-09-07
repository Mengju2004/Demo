<template>
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <!-- <div class="music"> -->
   
     <div class="MusicPicture">
       <!-- <img src="../assets/images/img_40.png" alt=""> -->
     </div>
     <div class="MusicPicturetop" @click="translate" >
        <div class="MusicList">
           <div class="MusicListleft">
           <img src="../assets/images/img_40.png" alt="">
           </div>
           <div class="Playkey">
             <div class="Playkeyleft">
               <p>
                <span class="Playkeyname">最近收听</span>
                <span class="FreeAdmission">免费</span>
               </p>
                <p class="describe">大自然白噪音</p>
             </div>
             <div class="triangle"  @click="PlayOrNot(Playback)" v-if="Playback"></div>
             <div class="Locationline"></div>
           </div>
        </div>
     </div>
     <div class="MusicPictureBottom">
        <div class="MusicList" v-for="item in 10" @click="translate" :key="item">
           <div class="MusicListleft">
             <img src="../assets/images/img_40.png" alt="">
           </div>
           <div class="Playkey">
             <div class="Playkeyleft">
               <p>
                <span class="Playkeyname">雨打树叶</span>
                <!-- <span class="FreeAdmission">免费</span> -->
                <img src="../assets/images/1.png" v-if="ifPicture" alt="">
                <img src="../assets/images/img_46.png" v-if="ifPicture===false" alt="">
               </p>
                <p class="describe">大自然白噪音</p>
             </div>
             <div class="triangle"  @click="PlayOrNot(Playback)" v-if="Playback"></div>
              <div class="suspend" @click="PlayOrNot(Playback)" v-if="Playback===false"></div>
             <div class="Locationline"></div>
           </div>
        </div>
     </div>
  <!-- </div> -->
   </van-pull-refresh>
</template>

<script>
import { Toast } from 'vant';
import BScroll from 'better-scroll'
export default {
data() {
  return {
    ifPicture:true,
    Playback:true,
     isLoading: false,
      tiaozhuan:[{
         path:'detail',
        component: () =>
        import ("@/views/MusicDetail"),
        name:'detail'
     }],
  }
},
 beforeUpdate() {
   musicscrollfn()
 },
 methods: {
   translate(){ 
      this.$router.push('/musicdetail')
     },
   PlayOrNot(Play){
     this.Playback=!Play;
   },
   onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        // this.count++;
      }, 1000);
    },
    musicscrollfn(){
      this.$nextTick(()=>{
      //下拉刷新
      let musicscroll=new BScroll('.van-pull-refresh',{
        eventPassthrough:'horizontal',
        click: true,
        pullUpLoad: true
      })
      //监听上拉刷新
         openappscroll.on('pullingUp',()=>{
           openappscroll.finishPullUp()
         })
      })
    }
  },
}
</script>

<style scoped lang="scss">
// @import '../assets/images'
.van-pull-refresh{
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:50px ;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
 // align-items: center;
  background-color:#fff;
 // margin-bottom:50px;
.MusicPicture{
  width: 375px;
  height: 217px;
  //background-color: aqua;
  background-image:url("../assets/images/img_40.png");
  background-size:100%;
}
.MusicPicturetop{
  width:70%;
  height:65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius:10%/50%;
  overflow: hidden;
  background-color:#fcf6f6;
  position: relative;
  top:-25px;
  left:50%;
  transform:translateX(-50%);
  .MusicList{
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    .MusicListleft{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: blue;
    margin-left:25px;
    overflow: hidden;
    img{
      width:100%;
      height:100%;
    }
    }
    .Playkey{
      flex:1;
      height:100%;
      display: flex;
      justify-content:space-around;
      align-items: center;
     .Playkeyleft{
       height:100%;
       flex:1;
       margin-left:5px;
       display: flex;
       flex-direction: column;
       justify-content:center;
        p{
          display: flex;
          align-items: center;
          margin:0px;
          margin-bottom:5px;
          .Playkeyname{
          font-size:10px;
          color:#C5C5C9;
          margin-right:10px;
          }
          .FreeAdmission{
             font-size:12px;
             color: #004907;
         }
       }
       .describe{
          font-size:16px;
          color:#263663;
          margin:0px;
       }
     }
     .triangle{
      justify-self:end;
       width:20px;
       height:20px;
       margin-right:20px;
       background-color: blue;
     }
       .suspend{
        justify-self:end;
       width:20px;
       height:20px;
       margin-right:20px;
       background-color: red;
       }
    }
  }
}
.MusicPictureBottom{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .MusicList{
    width:100%;
    height:100px;
    display:flex;
    align-items: center;
    .MusicListleft{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-left:25px;
    overflow: hidden;
    img{
      width:100%;
      height:100%;
    }
    }
    .Playkey{
      flex:1;
      height:100%;
      display: flex;
      justify-content:space-around;
      align-items: center;
       position: relative;
     .Playkeyleft{
       height:100%;
       flex:1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-left:12px;
        p{
          margin-bottom:5px;
         display: flex;
         align-items: center;
          .Playkeyname{
          font-size:16px;
          color:#263663;
          margin-right:10px;
          }
          .FreeAdmission{
          font-size:10px;
          color: #004907;
         }
         img{
           width:32px;
           height:18px;
         }
       }
       .describe{
          font-size:12px;
          color:#C5C5C9;
          margin:0px;
       }
     }
     .triangle{
      justify-self:end;
       width:20px;
       height:20px;
       margin-right:20px;
       background-color: blue;
     }
       .suspend{
          justify-self:end;
       width:20px;
       height:20px;
       margin-right:20px;
       background-color: red;
       }
     .Locationline{
       position:absolute;
       right:0;
       bottom:0;
       border-bottom:1px solid #aaa;
       width:92%;
       height:0px;
     }
    }
  }
}
}
</style>