<template>
  <div class="title-filter">
    <div class="row row-cols-5 justify-content-start m-1 g-2">
      <div
          v-for="item in list"
          :key="item.id"
          class="col my-1"
      >
        <button
            :title="item.name"
            class="btn btn-sm w-100 p-1"
            :class="{
              'btn-dark': item.id === modelValue,
              'btn-outline-dark': item.id !== modelValue,
            }"
            @click="setFilter(item.id)"
        >
          <font-awesome-icon
              class="filter-icon"
              :icon="item.icon"
          ></font-awesome-icon>
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
    }
  }
}
</script>

<style>
.filter-icon {
  font-size: 14px;
}
</style>