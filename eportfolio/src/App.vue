<template>
  <Header :places="places" />

  <router-view></router-view>

  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Page from './Page.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { Place as PlaceModel } from './cms/models';
import { cms } from './cms';

@Options({
  components: { Footer, Header, Page },
})
export default class App extends Vue {
  get places(): PlaceModel[] {
    return cms.places;
  }
}
</script>

<style scoped lang="scss"></style>
