<template>
  <div class="relax">
    <column-item :columnCourse="relaxCourse"></column-item>
  </div>
</template>

<script>
import ColumnItem from "@/components/MeditationComponents/ColumnItem";

export default {
  name: "Relax",
  components: {
    ColumnItem
  },
  computed: {
    relaxCourse(){
      return this.$store.state.relaxCourse
    }
  }
}
</script>

<style scoped lang="scss">
.relax {
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