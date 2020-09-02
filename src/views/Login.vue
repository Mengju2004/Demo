<template>
<div class="login-container">
    <header>
        <div class="top">
            <span @click="backMine">
                <img src="../assets/images/login/login-cross.png" alt="">
            </span>

        </div>
        <!-- --------------------- -->
        <div class="nav-top">
            <div class="icon">
                <img src="../assets/images/login/login-logo.png" alt="">
            </div>
            <div class="text">
                此刻开始，感受美好
            </div>
        </div>
    </header>

    <!-- ------------------------- -->
    <section>
        <div class="phone">
            <van-field v-model="tel" center clearable label="邮箱" placeholder="请输入邮箱" @input="toPhone">
            </van-field>
            <van-field v-model="verify" center clearable placeholder="请输入验证码">
                <template #button>
                    <van-button size="small" type="primary" round color="rgb(47,168,255)" @click="toVerify">获取验证码</van-button>
                </template>
            </van-field>
        </div>
        <!-- -------------------------- -->
        <div class="button">
            <van-button type="primary" block round color="rgb(47,168,255)" :disabled="disabled">登录/注册</van-button>
        </div>
    </section>
    <!-- ----------------------- -->
    <footer>
        <div class="agree">
            <van-checkbox v-model="checked" disabled>已经阅读并同意以下条款</van-checkbox>
        </div>
        <div class="deal">
            <span>服务协议</span>
            <span>隐私政策</span>
        </div>
    </footer>
</div>
</template>

<script>
import {
    Toast
} from 'vant';

export default {
    data() {
        return {
            tel: '',
            verify: '',
            checked: true,
            disabled: true,

        }
    },
    methods: {
        // 点击叉号返回上一界面
        backMine() {
            this.$router.go(-1)
        },
        //输入邮箱时，登录/注册按钮解除禁用状态
        toPhone() {
            if (this.tel != '') {
                this.disabled = false
            } else {
                this.disabled = true
            }
        },
        //点击获取验证码时执行
        toVerify() {

            const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

            //邮箱码为空
            if (this.tel == '') {
                Toast({
                    message: '请输入邮箱',
                    position: 'bottom',
                });
            } else if (!reg.test(this.tel)) { //手机号格式错误
                Toast({
                    message: '邮箱格式错误，英文字母、数字、下划线、英文句号、以及中划线',
                    position: 'bottom',
                    duration: 3000
                });
            } else {
                Toast({
                    message: '发送成功',
                    position: 'bottom',
                });
            }
        },
    }
}
</script>

<style lang="scss">
.login-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #fff;
    z-index: 100;

    header {
        background: url('../assets/images/login/login-background.png') no-repeat;

        .top {
            height: 40px;
            line-height: 40px;

            span {
                display: inline-block;
                margin-left: 10px;
                width: 20px;
                height: 20px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .nav-top {
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .icon {
                width: 70px;
                height: 70px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .text {
                margin-top: 10px;
                font-size: 18px;
            }
        }
    }

    section {
        padding: 30px 10px;

        .phone {

            .van-field__label {
                font-size: 18px;

                span::after {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url('../assets/images/login/login-arrow.png');
                    background-size: 100%;
                    margin-left: 8px;
                }
            }

            .van-field__control {
                font-size: 18px;
            }

        }

        .button {
            margin-top: 20px;
            width: 100%;

            .van-button--small {
                font-size: 14px;
            }

            .van-button--block {
                margin: auto;
                width: 88%;
            }
        }
    }

    footer {
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .agree {
            margin-bottom: 8px;

            .van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon {
                background-color: #1989fa;
            }

            .van-checkbox {
                .van-checkbox__label {
                    font-size: 16px;
                }
            }

            span {
                color: rgb(204, 204, 204);
            }

        }

        .deal {
            font-size: 13px;
            margin-top: 6px;

            span {
                margin-left: 16px;
                color: rgb(109, 161, 208);
            }
        }
    }
}
</style>
