<template>
  <div>
        <indexhead :title="title"></indexhead>
        <van-empty description="最近没有练习的内容" />
  </div>
</template>

<script>
import indexhead from '../public/Head'
export default {
  data() {
    return {
      title:'最近练习'
    };
  },

  components: {
    indexhead,
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped></style>
