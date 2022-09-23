<template>
  <div class="position-sticky pt-3 sidebar-sticky h-100">
    <ul class="nav flex-column">
      <li
          v-for="title in list"
          :key="title.id"
          class="nav-item"
      >
        <router-link
            :to="{name: 'title', params: { id: title.id }}"
            :class="{'active': Number($route.params.id) === title.id}"
            class="nav-link"
        >
          <font-awesome-icon
              class="me-2"
              :icon="getCategory(title.category).icon"
          ></font-awesome-icon>

          {{ title.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import filters from '../data/filters'

export default {
  name: 'TitleList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getCategory(category) {
      return filters[category];
    }
  }
}
</script>
