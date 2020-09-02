<template>
  <div class="music">
     <div class="MusicPicture">
       <!-- <img src="../assets/imges/img_40.png" alt=""> -->
     </div>
       <div class="MusicPicturetop" @click="translate">
        <div class="MusicList">
           <div class="MusicListleft">
           <img src="../assets/images/img_40.png" alt="">
           </div>
           <div class="Playkey">
             <div class="Playkeyleft">
               <p>
                <span class="Playkeyname">最近收听</span>
                <!-- <span class="FreeAdmission">免费</span> -->
               </p>
                <p class="describe">大自然白噪音</p>
             </div>
             <div class="triangle"></div>
             <div class="Locationline"></div>
           </div>
        </div>
     </div>
     <div class="MusicPictureBottom">
        <div class="MusicList" v-for="item in 10">
           <div class="MusicListleft">
             <img src="../assets/images/img_40.png" alt="">
           </div>
           <div class="Playkey">
             <div class="Playkeyleft">
               <p>
                <span class="Playkeyname">雨打树叶</span>
                <!-- <span class="FreeAdmission">免费</span> -->
                <img src="../assets/images/1.png" alt="">
               </p>
                <p class="describe">大自然白噪音</p>
             </div>
             <div class="triangle"></div>
             <div class="Locationline"></div>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    
  }
},
 methods: {
   translate(){
    
   },
 },
}
</script>

<style scoped lang="scss">
// @import '../assets/imges'
.music{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#fff;
  margin-bottom:50px;
}
.MusicPicture{
  width: 375px;
  height: 217px;
  //background-color: aqua;
  background-image:url("../assets/imges/img_40.png");
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
</style>