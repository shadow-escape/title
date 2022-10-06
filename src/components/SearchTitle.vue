<template>
  <div class="search-title navbar-nav col-md-3 col-lg-2 me-0 p-0 fs-6 position-relative">
    <input
        :value="modelValue"
        class="form-control form-control-dark w-100 rounded-0 border-0"
        type="text"
        placeholder="Найти титул"
        aria-label="Найти титул"
        @input="$emit('update:modelValue', $event.target.value)"
    />

    <button
        v-if="modelValue.length"
        class="btn position-absolute text-white top-0 bottom-0 end-0"
        @click="$emit('update:modelValue', '')"
    >
      <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
      ></font-awesome-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchTitle',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.search-title {
  .form-control {
    padding-right: 2rem;
  }
}
</style>