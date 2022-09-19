<template>
  <div class="position-sticky pt-3 sidebar-sticky">
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
          [{{ title.category }}] {{ title.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TitleList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
