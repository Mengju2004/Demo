<template>
  <div class="habit">
    <column-item :column-course="habitCourse"></column-item>
  </div>
</template>

<script>
import ColumnItem from "@/components/MeditationComponents/ColumnItem";
export default {
  name: "Habit",
  components:{
    ColumnItem
  },
  computed:{
    habitCourse(){
      return this.$store.state.habitCourse
    }
  }
}
</script>

<style scoped lang="scss">
.habit{
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