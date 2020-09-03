<template>
  <div class="focus">
    <column-item :columnCourse="focusCourse"></column-item>
  </div>
</template>

<script>
import ColumnItem from "@/components/MeditationComponents/ColumnItem";

export default {
  name: "Focus",
  components: {
    ColumnItem
  },
  computed: {
    focusCourse(){
      return this.$store.state.focusCourse
    }
  }
}
</script>

<style scoped lang="scss">
.focus {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>