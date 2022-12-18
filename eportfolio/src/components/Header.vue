<template>
  <header ref="header" class="header" :class="{ 'header--fixed': fixed }">
    <div class="header__left">
      <router-link :to="{ name: 'home', hash: '#intro' }" aria-label="Home">
        <Logo class="logo" />
      </router-link>
    </div>

    <div class="header__right">
      <ul class="navigation">
        <li v-for="place of places" :key="place.slug" class="navigation__link">
          <router-link :to="{ name: 'home', hash: getHash(place.slug) }"
            >{{ place.name }}
          </router-link>
        </li>
      </ul>

      <div class="menu-toggle__container" @click.prevent="onMenuClick">
        <Menu class="menu-toggle" />
      </div>
    </div>
  </header>

  <MobileHeader :is-open="menuIsOpen" :places="places" @close="onMenuClose" />
</template>

<script lang="ts">
import { mixins, Options } from 'vue-class-component';
import Logo from '../assets/logo.svg?component';
import Menu from '../assets/menu.svg?component';
import Close from '../assets/close.svg?component';
import { Place as PlaceModel } from '../cms/models';
import ScrollPosition from '../mixins/ScrollPosition';
import { Watch } from 'vue-property-decorator';
import MobileHeader from './MobileHeader.vue';
import { getHash as getHashHelper } from '../helpers/hash';

class Props {
  places?: PlaceModel[];
}

@Options({
  components: {
    MobileHeader,
    Logo,
    Menu,
    Close,
  },
})
export default class Header extends mixins(ScrollPosition).with(Props) {
  hash = '';
  menuIsOpen = false;

  get fixed(): boolean {
    return this.getScrollPosition() > 10;
  }

  @Watch('$route')
  onRouteChange(): void {
    this.hash = window.location.hash;
  }

  onMenuClick(): void {
    document.body.classList.add('overflow-hidden');

    this.menuIsOpen = true;
  }

  onMenuClose(): void {
    document.body.classList.remove('overflow-hidden');

    this.menuIsOpen = false;
  }

  getHash(slug: string): string {
    return getHashHelper(slug);
  }
}
</script>

<style scoped lang="scss">
.header {
  @apply w-screen h-header-height z-10;
  @apply bg-transparent;
  @apply px-5;
  @apply flex flex-row justify-between;
  @apply absolute top-0;
  @apply transition duration-500;
  @apply sticky;

  &--fixed {
    @apply bg-white;

    svg.logo {
      @apply fill-dark;
    }

    :deep(ul.navigation) {
      @screen md {
        @apply flex;
      }
    }

    div.menu-toggle__container {
      @apply block;

      @screen md {
        @apply hidden;
      }
    }
  }

  &__left,
  &__right {
    @apply flex flex-col justify-center;
  }

  .logo {
    height: 50px;
    @apply fill-white;
  }

  :deep(.navigation) {
    @apply flex flex-row;
    @apply list-none;
    @apply hidden;

    .navigation__link {
      @apply px-6;
      @apply text-2xl;

      &:last-of-type {
        @apply pr-0;
      }

      a:hover {
        @apply text-primary;
      }
    }
  }

  .menu-toggle__container {
    @apply hidden;

    @screen md {
      @apply hidden;
    }
  }
}
</style>
