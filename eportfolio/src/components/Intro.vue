<template>
  <section id="intro" ref="intro" class="intro bg-gray-300">
    <video
      ref="video"
      class="intro__video"
      width="100vw"
      height="100vh"
      fetchpriority="high"
      autoplay
      loop
      muted
      playsinline
    >
      <source :src="intro?.video?.source?.mp4" type="video/mp4" />
      <source :src="intro?.video?.source?.webm" type="video/webm" />
    </video>

    <div class="intro__overlay-container">
      <h1 class="intro__overlay-headline">{{ intro?.title }}</h1>
      <h2 class="intro__overlay-subline">{{ intro?.subtitle }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { mixins, Options } from 'vue-class-component';
import { Intro as IntroModel } from '../cms/models';
import ScrollPosition from '../mixins/ScrollPosition';
import { Watch } from 'vue-property-decorator';

class Props {
  intro?: IntroModel;
}

@Options({})
export default class Intro extends mixins(ScrollPosition).with(Props) {
  mounted(): void {
    const video = this.$refs['video'] as HTMLVideoElement;
    video.play();
  }

  @Watch('scrollYPosition')
  onScrollYPositionChanged(scrollYPosition: number): void {
    const intro = this.$refs['intro'] as HTMLElement;
    const introHeight = intro.clientHeight;

    const video = this.$refs['video'] as HTMLVideoElement;
    if (scrollYPosition >= introHeight) {
      video.pause();
    } else {
      video.play();
    }
  }
}
</script>

<style scoped lang="scss">
.intro {
  @apply w-screen h-screen min-h-screen;
  @apply -mt-header-height;
  @apply snap-center;

  &__video {
    @apply h-full w-full;
    @apply object-cover;
  }

  &__overlay {
    &-container {
      @apply absolute bottom-0;
      @apply bg-overlay;
      @apply transition-all;

      margin-bottom: 30px;
      margin-left: 15px;

      padding: 15px;
      padding-right: 50px;

      @screen sm {
        margin-bottom: 30px;
        margin-left: 30px;
      }

      @screen md {
        margin-bottom: 40px;
        margin-left: 40px;
      }

      @screen lg {
        margin-bottom: 50px;
        margin-left: 50px;
      }
    }

    &-headline {
      @apply text-white;
      @apply transition;
      font-size: 48px;

      @screen md {
        font-size: 96px;
      }
    }

    &-subline {
      @apply text-white;
      @apply transition-all;
      font-size: 24px;

      @screen md {
        font-size: 36px;
      }
    }
  }
}
</style>
