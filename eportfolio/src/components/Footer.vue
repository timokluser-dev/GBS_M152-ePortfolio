<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__copyright">&copy; 2022 Timo Kluser</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.footer {
  @apply h-footer-height w-full;
  @apply bg-primary;

  .footer__inner {
    @apply h-full w-full;
    @apply flex flex-col justify-center;

    .footer__copyright {
      @apply text-white;
      @apply flex flex-row justify-center;
    }
  }
}
</style>
