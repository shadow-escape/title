<template>
  <div>
    <h1>
      {{ title.name }}
    </h1>

    <p
        v-if="Boolean(title.chapter)"
        class="fs-6 text-break"
    >
      <strong>Группа:</strong>

      <text-with-placeholders
          :components="transform(title.chapter)"
      ></text-with-placeholders>
    </p>

    <p
        v-if="Boolean(title.previous)"
        class="fs-6"
    >
      <strong>Необходимые титулы:</strong>

      <router-link
          v-for="{id, value} in title.previous"
          :key="`title-${id}`"
          :to="{ name: 'title', params: {id}}"
          class="mx-1"
      >
        {{ value}}
      </router-link>
    </p>

    <p class="fs-6">
      <strong>Задание:</strong>

      <quest-link
          :value="title.quest"
      ></quest-link>
    </p>

    <p class="fs-6">
      <strong>Описание задания:</strong><br>

      {{ title.detail }}
    </p>

    <p class="fs-6">
      <strong>Книжное описание:</strong><br>

      {{ title.description }}
    </p>

    <p class="fs-6 text-break">
      <strong>Координаты получения задания:</strong>

      <text-with-placeholders
          :components="transform(title.accept)"
      ></text-with-placeholders>
    </p>

    <p class="fs-6 text-break">
      <strong>Что требуется:</strong><br>

      <text-with-placeholders
          :components="transform(title.obtain)"
      ></text-with-placeholders>
    </p>

    <p
        v-if="title.addition"
        class="fs-6 text-break"
    >
      <strong>Дополнительно:</strong><br>

      <text-with-placeholders
          :components="transform(title.addition)"
      ></text-with-placeholders>
    </p>

    <div
        v-if="title.extra"
        class="fs-6"
    >
      <p class="mb-0">
        <strong>Характеристики:</strong>
      </p>

      <ul class="list-unstyled">
        <li
            v-for="extra in title.extra"
            :key="extra.id"
        >
          <characteristics-row
              :value="extra"
          ></characteristics-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {parseComponents} from '../utils/helpers';
import TextWithPlaceholders from '../components/TextWithPlaceholders.vue';
import CharacteristicsRow from '../components/CharacteristicsRow.vue';
import QuestLink from '@/components/placeholders/QuestLink.vue';

export default {
  name: 'DetailView',
  components: {
    QuestLink,
    TextWithPlaceholders,
    CharacteristicsRow
  },
  computed: {
    ...mapState(['titles']),

    title() {
      const {id} = this.$route.params;

      return this.titles.find(title => title.id === Number(id));
    }
  },
  methods: {
    transform(text) {
      return parseComponents(text);
    }
  }
};
</script>