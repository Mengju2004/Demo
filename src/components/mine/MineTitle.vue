<template>
    <div class="mine-header" >
    <van-nav-bar :title="title.name" left-arrow
      @click-left="onClickLeft" fixed placeholder z-index="10"
      />
    </div>
</template>
<script>
export default {
    props:['title'],
    methods: {
        onClickLeft(){
  this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    
</style>