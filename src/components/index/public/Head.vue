<template>
  <div class="head">
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props:['title'],
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮');
    },
  }
};
</script>
<style lang='scss' scoped>
</style>
