<template>
  <component
      v-for="({ name, value }, index) in components"
      :key="unique(name, index)"
      :is="name"
      :value="value"
      class="text-block"
  ></component>
</template>

<script>
import {uniqueId} from 'lodash';
import CopyCoordinates from './placeholders/CopyCoordinates.vue';
import OpenLink from './placeholders/OpenLink.vue';
import QuestLink from './placeholders/QuestLink.vue';
import SimpleText from './placeholders/SimpleText.vue';

export default {
  name: 'TextWithPlaceholders',
  components: {
    CopyCoordinates,
    OpenLink,
    QuestLink,
    SimpleText
  },
  props: {
    components: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    unique(prefix, index) {
      return uniqueId(`${prefix}_${index}_`);
    }
  }
}
</script>

<style>
.text-block {
  white-space: pre;
}
</style>