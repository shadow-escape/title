<template>
  <span
      class="copy-coordinates mx-1"
      title="Копировать"
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
export default {
  name: 'CopyCoordinates',
  props: {
    value: String
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
    copy() {
      navigator.clipboard.writeText(this.target);
    }
  }
}
</script>

<style lang="scss">
.copy-coordinates {
  border-bottom: 1px dashed;
  cursor: pointer;
  color: #0d6efd;

  &:hover {
    opacity: .8;
  }
}
</style>