<template>
  <div class="s-detail">
      <!-- 底部模糊滤镜图片 -->
      <div class="s-detail-fil" >
        <img src="../assets/sleepimg/sleepimg1.png" alt="" class="s-detail-filter">   
      </div>
      <div class="detail-text">
          <p class="sdetail-head">
              <span class="iconfont icon-zuojiantou headicon headarrow"  @click="goback" ></span>
              <span class="icontext">
                  <span class="iconfont icon-xihuan1 headicon headlike" v-show="like==1" @click="likechanke"></span>
                  <span class="iconfont icon-xihuan headicon headlikepink" v-show="like==2" @click="likechanke" ></span>
                  <span class="iconfont icon-fenxiang_2 headicon headshare"  @click="changeshare"></span>
              </span> 
          </p>
          <div class="detail-text-box" >
              <img src="../assets/sleepimg/sleepimg1.png" alt="">
              <div class="detail-messages">
                  <p class="detail-messages-title">助眠脑电波
                      <span class="detail-messages-title-free detail-messages-title-tag">免费</span>
                      <span class="detail-messages-title-vip detail-messages-title-tag">VIP</span>
                      <span class="detail-messages-title-limit detail-messages-title-tag">限免</span>
                  </p>
                  <pre class="detail-messages-num"> 9 课时  ·  3462 人练习</pre>
                  <div class="detail-messages-dsc">通过助眠脑电波音乐，可以让心灵享受品平静、和谐的力量，更加的进入睡眠状态可以让心灵享受品平静、和谐的力量，更加的进入睡眠状态。</div>
              </div>
          </div>
      </div>
      <nav>
          <li v-for="(item, index) in 5" :key="index" @click=changeindex(index)>
              <div class="libox" v-bind:class="{ active: index==isActive}">
                <div class="lismallbox">
                    <span class="lismallbox-num">1</span>
                    <div class="lismallbox-title">
                        <p class="music-title">
                            潜意识催眠
                            <span class="music-title-try">试听</span>
                        </p>
                        <p class="music-time">时长<span class="music-mitime"> 04:56</span></p>
                    </div>
                </div>
                <img src="../assets/sleepimg/play.png" alt="" v-show="playnum==index" class="status-icon">
                <img src="../assets/sleepimg/zanting.png" alt="" v-show="playnum!=index" class="status-icon">
              </div>
          </li>
      </nav>
      <!--不是会员时解锁  -->
      <div class="notvip">
          解锁全部课程
      </div>

      <sshare  v-if="sharestatus" />
  </div>
</template>

<script>
// 引入分享组件
import sshare from '../components/share/Sleepshare'
export default {
    props:{
        // sleeplist:Object
    },
    components:{
        sshare
    },
    data() {
        return {
            isActive:null,
            like:1,
            playnum:null,
            id:'',
            sharestatus:false
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        // 播放列表点击的状态改变
        changeindex(index){
            this.isActive=index
            this.playnum=index
        },
        // 收藏按钮
        likechanke(){
            if(this.like==2){
                this.like=1
            }else if(this.like==1){
                this.like=2
            }
        },
        // 改变分享组件的显示
        changeshare(){
            if(this.sharestatus==false){
                this.sharestatus=true
            }else{
                this.sharestatus=false
            }
        }
    },
    mounted(){
        this.id=this.$route.params.id
    }
}
</script>

<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
}
// .s-detail::before{
//     position: absolute;
//     top: 0;
//     left: 0;
//     content: '';
//     width: 100%;
//     height: 300px;
//     background-image: url(../assets/sleepimg/sleepimg1.png);
//     filter: blur(10px);
//     background-size: cover;
//     z-index: -1;
// }
.s-detail{    
    //--------解锁会员---------
    .notvip{
        position: fixed;
        bottom: 0;
        height: 40px;
        width: 100%;
        background: #58A4F8;
        display: flex;
        left: 50%;
        transform: translate(-50%, 0);
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-family:'PingFang SC';
        font-weight: bold;
        color: #FEFEFF;
        border-radius: 40px 40px 0 0;
    } 
    // --------------------
    // --------模糊滤镜---------
    .s-detail-fil{
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
        z-index: -1;
        overflow: hidden;
        .s-detail-filter{
        width: 130%;
        height: 300px;
        filter: blur(5px);
        background-size: cover;
        position: absolute;
        left: -20px;
        top: -20px;
        // z-index: -5;
        }
    }
    // ---------------------------
    &::-webkit-scrollbar {
        display: none;
    }
    .iconfont{
        font-size: 22px;
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    overflow: auto;
    z-index: 200;
    font-size: 14px;
    width: 100%;
    .detail-text{
        width: 100%;
        // background-image: url(../assets/sleepimg/sleepimg1.png);
        .sdetail-head{
            height: 44px;
            // background: transparent;
            position: fixed;
            top: 0;
            left: 0;
            color: white;
            // font-size: 80px;
            display: block;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            background: transparent;
            .headarrow{
                margin-left: 15px;
            }
            .icontext{
                display: flex;
                height: 44px;
                align-items: center;
                margin-right: 20px;
                .headlike{
                    margin-right: 15px;
                }
                .headlikepink{
                    color: #fe6869;
                    margin-right: 15px;
                }
                // .headshare{
                    // font-size: 26px;
                // }

            }
        }
        .detail-text-box{
            font-family: 'PingFang SC';
            color: white;
            margin-top: 44px;
            height: 150px;
            // background: turquoise;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px 15px 0 15px;
            img{
                height: 95px;
                width: 70px;
                border-radius: 5px;
                border: white 2px solid;
            }
            .detail-messages{
                // background: rosybrown;
                margin-left:15px ;
                // width: 250px;
                .detail-messages-title{
                    font-size: 16px;
                    font-weight: bold;
                    color: white;
                    display: flex;
                    align-items: center;
                    line-height: 24px;
                    // position: relative;
                     .detail-messages-title-tag{
                        width: 29px;
                        height: 16px;
                        border-radius: 8px;
                        // position: absolute;
                        // top: 15px;
                        // right: 17px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 10px;
                        font-family:' PingFang SC';
                        font-weight: 500;
                        margin-left: 5px;
                    }
                    .detail-messages-title-limit{
                        background: linear-gradient(90deg, #5EC0FE, #3A9EF2);
                        color: #145D93;
                    }
                    .detail-messages-title-free{     
                        background: linear-gradient(90deg, #73FFB6, #35C779);       
                        color: #004A08;
                    }
                    .detail-messages-title-vip {
                        color: #984705;
                        background: linear-gradient(90deg, #FEBE3A, #F99F12);
                    }
                }
            }
            .detail-messages-num{
                line-height: 35px;
                font-size: 10px;
                // display: flex;
                // align-items: center;
                .span{
                    display: block;
                    height: 100%;
                    line-height: 35px;
                }
            }
            .detail-messages-dsc{
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1px;
                width: 250px;
            }
        }
    }
    nav{
        background: white;
        // height: 100%;
        width: 100%;
        border-radius:10px 10px 0 0 ;
        li{
           list-style: none;
           height: 100px;
           border-bottom: 1px solid #ebebeb;
           display: flex;
           align-items: center;
            .libox{
                width: 100%;
                border-left:2px #fff solid;
                padding: 16px;
                 display: flex;
                align-items: center;
                justify-content: space-between;
                .lismallbox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 10px;
                    .lismallbox-title{
                        margin-left:30px ;
                        .music-title{
                            margin-bottom: 15px;
                            font-size: 16px;
                            color: #253862;
                            width: 100%;
                            display: flex;
                            align-items: center;

                            // background: chartreuse;
                            .music-title-try{
                                width: 26px;
                                margin-left: 15px;
                                border: 1px solid #81bde6;
                                border-radius:4px ;
                                font-size: 10px;
                                color: #81bde6;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                        .music-time{
                            color:#c2c2c2 ;
                            font-size: 12px;
                        }
                        .lismallbox-num{
                            font-size: 12px;
                            color: #a7a7a7;
                            // margin-left: 55px;
                        }
                    }
                }
                .status-icon{
                    width: 16px;
                    margin-right: 15px;
                }
            }
            .active{
                border-left:2px #2aa1ff solid;
            }
        }
    }
}
</style>