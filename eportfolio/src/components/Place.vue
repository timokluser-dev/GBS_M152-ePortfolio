<template>
  <section :id="place?.slug" :ref="place?.slug" class="place">
    <div class="place__inner">
      <div :class="{ 'place__container--swap': swap }" class="place__container">
        <div class="place__left">
          <picture>
            <source
              :srcset="
                place?.image.sm.webp +
                ' 500w,' +
                place?.image.md.webp +
                ' 1000w,' +
                place?.image.lg.webp +
                ' 1500w'
              "
              sizes="100vw"
              type="image/webp"
            />

            <source
              :srcset="
                place?.image.sm.jpeg +
                ' 500w,' +
                place?.image.md.jpeg +
                ' 1000w,' +
                place?.image.lg.jpeg +
                ' 1500w'
              "
              sizes="100vw"
              type="image/jpeg"
            />

            <img
              :src="place?.image.sm.jpeg"
              :alt="place?.name"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </picture>
        </div>

        <div class="place__right">
          <div class="place__content">
            <h2 class="place__title">{{ place?.name }}</h2>

            <hr class="place__separator" />

            <p class="place__description">{{ place?.description }}</p>

            <a
              v-if="place?.link"
              :href="place.link.link"
              class="place__link"
              target="_blank"
              @click.prevent="onLinkClick"
            >
              <span>{{ place.link.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mixins, Options } from 'vue-class-component';
import { Place as PlaceModel } from '../cms/models';
import ScrollPosition from '../mixins/ScrollPosition';

class Props {
  place?: PlaceModel;
  swap?: boolean;
}

@Options({})
export default class Place extends mixins(ScrollPosition).with(Props) {
  onLinkClick(): void {
    if (!this.place || !this.place.link) {
      return;
    }

    window.open(this.place?.link.link, '_blank');
  }
}
</script>

<style scoped lang="scss">
.place {
  @apply w-screen;
  @apply pt-32;

  @screen md {
    @apply h-screen min-h-screen max-h-screen;
    @apply pt-0;
  }

  &:last-of-type {
    @apply pb-36;

    @screen md {
      @apply pb-header-height;
    }
  }

  &__inner {
    @apply h-full w-full;
    @apply flex flex-col justify-center;

    @screen md {
      @apply pt-header-height;
    }

    .place__container {
      @apply grid gap-4 grid-cols-1;

      @screen md {
        @apply grid-cols-2;
      }

      @screen lg {
        @apply grid-cols-3;
      }

      .place__left {
        @apply flex flex-col justify-center;
        @apply w-auto #{!important};
        @apply pb-5;
        @apply mx-9;

        @screen md {
          @apply w-1/2;
          @apply pb-0 mr-0;
          margin-left: 80px;
        }

        @screen lg {
          @apply w-1/6;
        }

        picture {
          @apply h-fit;

          img {
            @apply w-full;
          }
        }
      }

      .place__right {
        @apply flex flex-col justify-center;
        @apply col-span-1;
        @apply w-auto;
        @apply mx-9;

        @screen md {
          margin-left: 80px;
          margin-right: 80px;
        }

        @screen lg {
          @apply col-span-2;
        }

        .place__content {
          @apply pb-8;
          @apply border-primary;
          border-bottom-width: 1.5px;

          @screen md {
            @apply border-0;
          }
        }

        .place__title {
          @apply mb-3;
          @apply hyphenate;

          &:after {
            @apply text-primary;
            content: '.';
          }
        }

        .place__separator {
          @apply border-primary bg-primary;
          @apply mb-8;
          @apply w-14;
          border-width: 1.5px;
          width: 50px;
        }

        .place__description {
          @apply text-justify break-words;
        }

        .place__link {
          @apply mt-8;
          @apply block;
          @apply text-primary inline-block;

          @screen md {
            @apply transition-all;

            &::after {
              @apply w-0;
              @apply block;
              @apply bg-primary;
              @apply transition-all duration-300;
              content: '';
              height: 1.5px;
            }

            &:hover::after {
              @apply w-full;
            }
          }
        }
      }

      &--swap {
        .place__left {
          @screen md {
            @apply order-last;
          }

          @screen md {
            @apply ml-0;
            margin-right: 80px;
          }
        }
      }
    }
  }
}
</style>
