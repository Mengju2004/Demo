<template>
  <div class="s-detail">
      <div class="detail-text">
          <p class="sdetail-head">
              <van-icon name="arrow-left" class="headicon headarrow" @click="goback"/> 
              <span>
                  <van-icon class="headicon headlike" name="like-o" v-show="like==1" @click="likechanke"/>
                  <van-icon name="like" class="headicon headlikepink" v-show="like==2" @click="likechanke"/>
                  <van-icon class="headicon headshare" name="share" />
              </span> 
          </p>
          <div class="detail-text-box" >
              <img src="../assets/sleepimg/sleepimg1.png" alt="">
              <div>
                  <p>助眠脑电波<span>限免</span></p>
                  <p>9<span>课时</span>·<span>3462</span>人练习</p>
                  <p>通过助眠脑电波音乐，可以让心灵享受品平静、和谐的力量，更加的进入睡眠状态，</p>
              </div>
          </div>
      </div>
      <nav>
          <li v-for="(item, index) in 10" :key="index" @click=changeindex(index)>
              <div class="libox" v-bind:class="{ active: index==isActive}">
                <div class="lismallbox">
                    <span>1</span>
                    <div>
                        <p class="musci-title">潜意识催眠<span>试听</span></p>
                        <p class="musci-time">时长<span>04:56</span></p>
                    </div>
                </div>
                <span>播放按钮</span>
              </div>
          </li>
      </nav>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive:null,
            like:2
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        changeindex(index){
            this.isActive=index
        },
        likechanke(){
            if(this.like==2){
                this.like=1
            }else if(this.like==1){
                this.like=2
            }
        }


    }
}
</script>

<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
}
.s-detail{        
    &::-webkit-scrollbar {
        display: none;
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: gray;
    overflow: auto;
    z-index: 88;
    font-size: 14px;
    width: 100%;
    .detail-text{
        width: 100%;
        // background-image: url(../assets/sleepimg/sleepimg1.png);
        .sdetail-head{
            height: 44px;
            background: transparent;
            position: fixed;
            top: 0;
            left: 0;
            color: white;
            font-size: 22px;
            display: block;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            .headarrow{
                margin-left: 10px;
            }
            span{
                margin-right: 10px;
                .headlike{
                    margin-right: 10px;
                }
                .headlikepink{
                    color: pink;
                    margin-right: 10px;
                }
            }
        }
        .detail-text-box{
            margin-top: 44px;
            height: 130px;
            // background: turquoise;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px 15px 0 15px;
            img{
                height: 100px;
            }
        }
    }
    nav{
        background: white;
        height: 1000px;
        width: 100%;
        border-radius:15px 15px 0 0 ;
        li{
           list-style: none;
           height: 100px;
           border-bottom: 1px solid black;
           display: flex;
           align-items: center;
            .libox{
                width: 100%;
                // height: 70px;
                padding: 15px;
                 display: flex;
                align-items: center;
                justify-content: space-between;
                .lismallbox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    div{
                        margin-left:20px ;
                        .musci-title{
                            margin-bottom: 10px;
                        }
                    }
                }
            }
            .active{
                border-left:3px blue solid;

            }
        }
    }
}
</style>