<template>
    <div class="usercardbag">
        <van-nav-bar
        title="我的卡卷"
        right-text="兑换卡卷"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />

        <div class="cart-no">
            <img src="../../assets/images/mine/cartbge_03.jpg" alt="">
        </div>
        <div class="btn">
        <van-button type="primary" block round>浏览冥想课程</van-button>

        </div>

        <van-dialog v-model="show" title="兑换卡卷" show-cancel-button closeOnClickOverlay>
        <van-field v-model="text" border label="兑换码"  />
        </van-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: false,
            text:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickRight(){
            this.show = !this.show
        }
    },
}
</script>
<style lang="scss">
    .cart-no{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
            height: 80%;
        }
    }
</style>