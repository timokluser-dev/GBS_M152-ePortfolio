<template>
  <ul class="navigation">
    <li
      v-for="place of places"
      :key="place.slug"
      class="navigation__link"
      @click="onLinkClick"
    >
      <router-link :to="{ name: 'home', hash: getHash(place.slug) }"
        >{{ place.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Place as PlaceModel } from '../cms/models';
import { getHash as getHashHelper } from '../helpers/hash';

class Props {
  places?: PlaceModel[];
}

@Options({
  emits: ['close'],
})
export default class Navigation extends Vue.with(Props) {
  getHash(slug: string): string {
    return getHashHelper(slug);
  }

  onLinkClick(): void {
    this.$emit('close');
  }
}
</script>

<style scoped lang="scss"></style>
