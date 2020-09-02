<template>
    <div class="useridea">
    <MineTitle :title="title" />

        <div class="user-text">
            <van-field
                v-model="message"
                rows="10"
                autosize
                type="textarea"
                maxlength="100"
                placeholder="请输入您的意见"
                show-word-limit/>
        </div>
    <van-field v-model="tel" type="tel" label="联系方式" placeholder="请输入联系方式" />
    <p>如果您问题紧急可以添加小易微信: ymx_vip，我们将会尽快为您解决。</p>
        </div>
</template>
<script>
import MineTitle from "./MineTitle";

export default {
   data(){
       return{
           title:{
               name:'意见反馈'
           },
           message:'',
           tel:''
       }
   },
   components:{
MineTitle,
   }
}
</script>
<style lang="scss">
    .useridea{
       .user-text{
           margin: 15px 0;
       } 
       p{
           margin-top: 20px;
           font-size: 14px;
           color: #b6bbc1;
           
       }
    }
</style>