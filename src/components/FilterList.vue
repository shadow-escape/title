<template>
  <div class="title-filter">
    <div class="row row-cols-5 justify-content-start m-1 g-2">
      <div
          v-for="item in list"
          :key="item.id"
          class="col my-1"
      >
        <button
            class="title-filter__button btn btn-sm w-100 p-1"
            :class="{
              'btn-dark': item.id === modelValue,
              'btn-outline-dark': item.id !== modelValue,
            }"
            @click="setFilter(item.id)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {orderBy} from 'lodash';

export default {
  name: 'FilterList',
  props: {
    modelValue: String,
  },
  computed: {
    ...mapState(['filters']),

    list() {
      return orderBy(this.filters, 'order', 'asc')
    }
  },
  methods: {
    setFilter(filter) {
      this.$emit('update:modelValue', filter)
      //this.$store.commit('setFilter', filter);
    }
  }
}
</script>