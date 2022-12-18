<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }">
    <div class="mobile-menu-close__container">
      <div class="mobile-menu-close">
        <Close class="mobile-menu-close__svg" @click.prevent="onCloseClick" />
      </div>
    </div>

    <div class="mobile-menu__container">
      <div class="mobile-menu__inner">
        <div class="mobile-menu-logo">
          <Logo class="mobile-menu-logo__svg" />
        </div>

        <div class="mobile-menu-nav">
          <Navigation
            :places="places"
            class="navigation"
            @close="onCloseClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Close from '../assets/close.svg?component';
import Logo from '../assets/logo.svg?component';
import Navigation from './Navigation.vue';
import { Place as PlaceModel } from '../cms/models';

class Props {
  isOpen = false;
  places?: PlaceModel[];
}

@Options({
  components: { Navigation, Close, Logo },
  emits: ['close'],
})
export default class MobileHeader extends Vue.with(Props) {
  onCloseClick(): void {
    this.$emit('close');
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  @apply w-screen h-0;
  @apply bg-white;
  @apply fixed top-0 left-0 z-10;
  @apply hidden;
  @apply transition duration-500;

  &--open {
    @apply h-screen;
    @apply block;
  }

  &-close {
    @apply flex flex-row justify-end;
    margin-right: 20px;

    &__container {
      @apply h-header-height;
      @apply flex flex-col justify-around;
    }

    &__svg {
      width: 30px;
      height: 30px;
    }
  }

  &-logo {
    @apply flex flex-row justify-center;
    @apply mb-24;

    &__svg {
      @apply w-3/4;
      max-width: 300px;
    }
  }

  &__container {
    @apply w-full h-full;
    @apply flex flex-col justify-around;
  }
}

:deep(.navigation) {
  @apply flex flex-col;
  @apply list-none;

  .navigation__link {
    @apply h2;
    @apply w-full;
    @apply mb-12;

    &:last-of-type {
      @apply pr-0;
    }

    a {
      @apply flex flex-row justify-center;
    }
  }
}
</style>
