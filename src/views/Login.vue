<template>
<div class="login-container">
    <header>
        <div class="top">
            <span class="iconfont icon-fork"></span>
        </div>
        <!-- --------------------- -->
        <div class="nav-top">
            <div class="icon">
                <img src="../assets/images/login-icon.png" alt="">
            </div>
            <div class="text">
                此刻开始，感受美好
            </div>
        </div>
    </header>

    <!-- ------------------------- -->
    <section>
        <div class="phone">
            <van-field v-model="tel" center clearable label="CN+86" placeholder="请输入手机号">
            </van-field>
            <van-field v-model="verify" center clearable placeholder="请输入验证码">
                <template #button>
                    <van-button size="small" type="primary" round color="rgb(47,168,255)">获取验证码</van-button>
                </template>
            </van-field>
        </div>
        <div class="button">
            <van-button type="primary" block round color="rgb(200,203,212)">登录/注册</van-button>
        </div>
    </section>
    <!-- ----------------------- -->
    <footer>
        <div class="agree">
            <van-checkbox v-model="checked">已经阅读并同意以下条款</van-checkbox>
        </div>
        <div class="deal">
            <span>服务协议</span>
            <span>隐私政策</span>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    data() {
        return {
            tel: '',
            verify: '',
            checked: true
        }
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
    z-index: 10;

    header {
        background: url('../assets/images/login-background.png') no-repeat;
        .top {
            height: 40px;
            line-height: 40px;

            span {
                font-size: 20px;
                margin-left: 10px;
                font-weight: 900;
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
                span::after{
                    content: '';
                    
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

            span {
                color: rgb(204, 204, 204);
            }

        }

        .deal {
            font-size: 13px;

            span {
                margin-left: 6px;
                color: rgb(109, 161, 208);
            }
        }
    }
}
</style>
