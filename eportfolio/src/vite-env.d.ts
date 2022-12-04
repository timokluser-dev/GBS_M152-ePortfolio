/* eslint-disable @typescript-eslint/ban-types */
/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
