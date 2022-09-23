<template>
  <span
      class="copy-coordinates mx-1"
      :class="{'copy-coordinates__pressed': isPressed}"
      title="Копировать"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseout="isPressed = false"
      @click="copy"
  >
    <span class="me-1">
      {{ title }} - {{ target }}
    </span>

    <font-awesome-icon
        icon="fa-solid fa-copy"
    ></font-awesome-icon>
  </span>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'CopyCoordinates',
  props: {
    value: String
  },
  data() {
    return {
      isPressed: false
    }
  },
  computed: {
    coordinates() {
      return this.value
          .replace(/(\[|])/g, '')
          .split('|');
    },

    title() {
      const [, title] = this.coordinates;

      return title
    },

    target() {
      const [target] = this.coordinates;

      return target;
    }
  },
  methods: {
    ...mapMutations(['setToast']),

    copy() {
      const { target } = this;

      navigator.clipboard.writeText(target);

      this.setToast({
        id: 'copy-coordinates',
        value: `Скопировано - ${target}`,
        ttl: 1000
      });
    }
  }
}
</script>

<style lang="scss">
.copy-coordinates {
  border-bottom: 1px dashed;
  cursor: pointer;
  color: #0d6efd;

  &__pressed {
    color: #000;
  }

  &:hover {
    opacity: .8;
  }
}
</style>