<template>
  <div class="hot">
    <div class="section-title">
      {{ title }}
      <span class="more" v-if="hasMore" @click="hotClass">查看更多 &gt;</span>
    </div>
    <div class="column-item" v-for="item in 2">
      <div class="column-item-cover">
        <!--            <img src="" alt="">-->
      </div>
      <div class="column-item-label">VIP</div>
      <span class="column-item-title">7天焦虑舒缓训练</span>
      <span class="column-item-desc">清除焦虑，让生活变得轻松自如</span>
      <p class="column-item-footer"><span class="class-time">7课时</span> · <span class="class-member">6127人练习</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotClass",
  props: {
    title: String,
    to: String
  },
  computed: {
    hasMore() {
      return !!this.to
    }
  },
  methods: {
    hotClass(){
      console.log(this.to)
      this.$emit('Recommend',this.to)
    }
  }
}
</script>

<style scoped lang="scss">
.hot {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 349px;

  .column-item {
    margin-bottom: 22px;
    width: 312px;
    height: 110px;
    background: #FFFFFF;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    padding-left: 47px;
    display: flex;
    flex-direction: column;

    .column-item-label {
      font-size: 12px;
      font-weight: 500;
      color: #994806;
      line-height: 16px;
      text-align: center;
      position: absolute;
      top: 15px;
      right: 0;
      width: 29px;
      height: 16px;
      background: linear-gradient(90deg, #FEBF3B, #F99F12);
      border-radius: 8px 0px 0px 8px;
    }

    .column-item-cover {
      width: 68px;
      height: 91px;
      border-radius: 5px;
      background-color: #5EC0FE;
      position: absolute;
      top: 10px;
      left: -37px;
    }

    .column-item-title {
      display: inline-block;
      width: 100%;
      height: 14px;
      font-size: 15px;
      font-weight: bold;
      color: #253862;
      margin-top: 17px;
    }

    .column-item-desc {
      margin-top: 13px;
      display: inline-block;
      width: 100%;
      height: 12px;
      font-size: 12px;
      font-weight: 400;
      color: #C3C7CC;
    }

    .column-item-footer {
      margin-top: 28px;
      height: 11px;
      font-size: 12px;
      font-weight: 400;
      color: #49BBFD;
    }
  }
}
</style>