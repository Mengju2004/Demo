<template>
  <div class="setinfo">
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="setinfo-header">
      <div>
        <!-- 这里是头像 -->
      </div>
    </div>
    <div class="setname">
      <van-cell title="昵称" is-link />
      <input type="text" />
    </div>
    <div class="sex-option">
      <van-cell is-link title="性别" @click="sexShow = true" />
      <span class="sex">{{ sex }}</span>
      <van-action-sheet
        v-model="sexShow"
        :actions="sexActions"
        @select="onSelectSex"
        close-on-click-action
      />
    </div>

    <div class="age-option">
      <van-cell is-link title="年龄" @click="ageShow = true" />
      <span class="age">{{ age }}</span>
      <van-action-sheet
        v-model="ageShow"
        :actions="ageActions"
        @select="onSelectAge"
        close-on-click-action
      />
    </div>
    <div>
      <van-cell title="登录手机号" value=" 内容  " />
      <van-cell title="注册时间" value=" 内容  " />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sexShow: false,
      ageShow: false,
      sexActions: [
        { name: "男", color: "blue" },
        { name: "女", color: "blue" },
      ],
      ageActions: [
        { name: "25岁以下" },
        { name: "25~35岁" },
        { name: "25~35岁" },
        { name: "36~45岁" },
        { name: "46~55岁" },
        { name: "65岁以上" },
      ],
      age: "",
      sex: "未知",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    onSelectAge(val) {
      this.age = val.name;
    },
    onSelectSex(val) {
      this.sex = val.name;
    },
  },
  mounted() {
    console.log(1);
  },
};
</script>
<style lang="scss">
.setinfo-header {
  width: 100%;
  height: 170px;
  background: #f2f3f7;
  position: relative;
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 2px solid red;
  }
}
.age-option,
.sex-option {
  position: relative;
  .age,
  .sex {
    position: absolute;
    top: 0;
    height: 44px;
    line-height: 44px;
    right: 35px;
    font-size: 14px;
  }
}
.setname {
  font-size: 14px;
  position: relative;
  input {
    text-align: right;
    width: 120px;
    height: 44px;
    position: absolute;
    top: 0;
    right: 35px;
    border: 0;
  }
}
</style>