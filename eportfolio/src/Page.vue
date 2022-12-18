<template>
  <div class="page">
    <Intro :intro="intro" />

    <div class="page__places">
      <template v-for="(place, i) of places" :key="place.slug">
        <Place :place="place" :swap="i % 2" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Intro from './components/Intro.vue';
import Place from './components/Place.vue';
import { Intro as IntroModel, Place as PlaceModel } from './cms/models';
import { cms } from './cms';

@Options({
  components: { Place, Intro },
})
export default class Page extends Vue {
  get intro(): IntroModel {
    return cms.intro;
  }

  get places(): PlaceModel[] {
    return cms.places;
  }
}
</script>

<style scoped lang="scss">
.page {
  @apply bg-white;

  &__places {
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
  }
}
</style>
