<template>
  <div class="characteristics">
    {{ transform }}
  </div>
</template>

<script>
import extra from '../data/extra'

export default {
  name: 'CharacteristicsRow',
  props: {
    value: Object
  },
  computed: {
    transform() {
      return `${extra[this.value.id]} +${this.value.value}`;
    }
  }
};
</script>

<style lang="scss">
.characteristics {
  color: blue;
}
</style>