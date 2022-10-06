<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <search-title
        class="d-none d-md-block"
        v-model="search"
    ></search-title>

    <div class="navbar-brand d-flex me-0 px-3 fs-6 w-100 justify-content-between align-items-center">
      <router-link
          class="py-2"
          to="/"
      >
        База титулов Perfect World
      </router-link>

      <span class="navbar-extra text-end d-none d-md-block">
        Тайны солнца и луны <br>
        Титулов: {{ titles.length }}
      </span>
    </div>

    <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        aria-label="Отобразить навигацию"
        @click="sidebar = !sidebar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          :class="{'show': sidebar}"
          style="padding-top: 150px"
      >
        <filter-list
            v-model="filter"
            style="margin-top: -100px"
        ></filter-list>

        <title-list
            :list="list"
        ></title-list>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>

      <div class="toast-container position-absolute p-3 bottom-0 end-0">
        <div class="toast show"
             v-for="(toast, index) in toasts"
             :key="`${toast.id}-${index}`"
        >
          <div class="toast-body">
            {{ toast.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {orderBy} from 'lodash';
import FilterList from './components/FilterList.vue';
import TitleList from './components/TitleList.vue';
import SearchTitle from './components/SearchTitle.vue'

export default {
  name: 'App',
  components: {
    TitleList,
    FilterList,
    SearchTitle
  },
  data() {
    return {
      sidebar: false,
      filter: 'all',
      search: ''
    }
  },
  computed: {
    ...mapState(['titles', 'toasts']),

    list() {
      const { titles, filter, search } = this;
      let output = orderBy(titles, 'order', 'asc');

      if (filter !== 'all') {
        output = output.filter(title => title.category === filter);
      }

      if (search.length) {
        output = output.filter(({ name }) => name.toUpperCase().includes(
            search.toUpperCase()
        ));
      }

      return output;
    }
  }
};
</script>

<style lang="scss">
.title-filter {
  &__button {
    font-size: 10px !important;
    text-transform: uppercase;
    padding: 2px !important;
  }
}
</style>