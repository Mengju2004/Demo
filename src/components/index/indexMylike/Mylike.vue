<template>
    <div>
      <indexhead :title="title"></indexhead>
      <van-empty description="暂无喜欢的课程">
        <van-button round type="danger" class="bottom-button" @click="tomeditation">
          浏览冥想课程
        </van-button>
      </van-empty>
    </div>
</template>

<script>
import indexhead from '../public/Head'
export default {
  data() {
    return {
      title:'我的喜欢'
    };
  },

  components: {
    indexhead,
  },

  computed: {},

  mounted() {},

  methods: {
    tomeditation(){
      this.$router.push({path:'/med'})
    }
  }
};
</script>
<style lang='scss' scoped>
  .bottom-button {
    width: 160px;
    height: 40px;
    background-color:#1989FA ;
    border: none;
  }
  </style>
