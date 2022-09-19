<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a
        class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
        href="#"
    >
      Company name
    </a>

    <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <filter-list
            v-model="filter"
        ></filter-list>

        <title-list
            :list="list"
        ></title-list>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {orderBy} from 'lodash';
import FilterList from './components/FilterList.vue';
import TitleList from './components/TitleList.vue';

export default {
  name: 'App',
  components: {
    TitleList,
    FilterList
  },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    ...mapState(['titles']),

    list() {
      const titles = orderBy(this.titles, 'order', 'asc');

      if (this.filter !== 'all') {
        return titles.filter(title => title.category === this.filter);
      }

      return titles;
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