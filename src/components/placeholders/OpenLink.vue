<template>
  <a
      :href="link"
      target="_blank"
  >
    <img
        v-if="hasIcon"
        :src="require(`@/assets/images/${id}.png`)"
        :alt="title"
        class="mx-1"
    >

    <span
        v-text="title"
        class="me-1"
    ></span>

    <font-awesome-icon
        icon="fa-solid fa-arrow-up-right-from-square"
    ></font-awesome-icon>
  </a>
</template>

<script>
import images from '../../data/images';

export default {
  name: 'OpenLink',
  props: {
    value: String
  },
  computed: {
    parts() {
      return this.value
          .replace(/(\[|])/g, '')
          .split('|');
    },

    id() {
      const [id] = this.parts;

      return Number(id.substr(1));
    },

    title() {
      const [, title] = this.parts;

      return title;
    },

    link() {
      return process.env.VUE_APP_LINK_HOST + this.id;
    },

    hasIcon() {
      return images.includes(this.id);
    },
  }
}
</script>