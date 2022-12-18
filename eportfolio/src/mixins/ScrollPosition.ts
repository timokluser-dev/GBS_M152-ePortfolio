import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ScrollPosition extends Vue {
  scrollYPosition: number = window.scrollY;

  created(): void {
    this.addEventListener();
  }

  addEventListener(): void {
    window.addEventListener('scroll', () => {
      this.scrollYPosition = window.scrollY;
    });
  }

  getScrollPosition(): number {
    return this.scrollYPosition;
  }
}
