<template>
  <a
      :href="link"
      target="_blank"
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
export default {
  name: 'QuestLink',
  props: {
    value: String,
  },
  computed: {
    parts() {
      return this.value
          .replace(/(\[|])/g, '')
          .split('|');
    },

    id() {
      const [id] = this.parts;

      return Number(id);
    },

    title() {
      const [, title] = this.parts;

      return title;
    },

    link() {
      return process.env.VUE_APP_QUEST_HOST + this.id;
    },
  }
}
</script>v