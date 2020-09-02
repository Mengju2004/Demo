<template>
  <div class="sleeping">
    <column-item :column-course="sleepCourse"></column-item>
  </div>
</template>

<script>
import ColumnItem from "@/components/MeditationComponents/ColumnItem";
export default {
  name: "Sleeping",
  components:{
    ColumnItem
  },
  computed:{
    sleepCourse(){
      return this.$store.state.sleepCourse
    }
  }
}
</script>

<style scoped lang="scss">
.sleeping{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>