<template>
  <section class="full-loading" :class="{ absolute, [theme]: !!theme }"
    :style="[background ? `background-color: ${background}` : '']" v-show="loading">
    <div class="loader"></div>
    <!-- <div v-bind="$attrs">111</div> -->
    <!-- <Spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" /> -->
  </section>
</template>
<script lang="ts">
  import {
    PropType
  } from 'vue';
  import {
    defineComponent
  } from 'vue';
  // import { Spin } from 'ant-design-vue';
  import {
    SizeEnum
  } from '~/enums/sizeEnum';

  export default defineComponent({
    name: 'Loading',
    // components: { Spin },
    props: {
      tip: {
        type: String as PropType < string > ,
        default: '',
      },
      size: {
        type: String as PropType < SizeEnum > ,
        default: SizeEnum.LARGE,
        validator: (v: SizeEnum): boolean => {
          return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v);
        },
      },
      absolute: {
        type: Boolean as PropType < boolean > ,
        default: false,
      },
      loading: {
        type: Boolean as PropType < boolean > ,
        default: false,
      },
      background: {
        type: String as PropType < string > ,
      },
      theme: {
        type: String as PropType < 'dark' | 'light' > ,
      },
    },
  });
</script>
<style lang="scss" scoped>
  .loader {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.3em;
    height: 0.3em;
    border-radius: 0.15em;
    transform: translate(-50%, -50%);
  }

  .loader:before {
    animation: before 2s infinite;
  }

  .loader:after {
    animation: after 2s infinite;
  }

  @keyframes before {
    0% {
      width: 0.3em;
      box-shadow: 1.1em -0.6em rgba(225, 20, 98, 0.75), -1.1em 0.6em rgba(111, 202, 220, 0.75);
    }

    35% {
      width: 2.5em;
      box-shadow: 0 -0.6em rgba(225, 20, 98, 0.75), 0 0.6em rgba(111, 202, 220, 0.75);
    }

    70% {
      width: 0.3em;
      box-shadow: -1.1em -0.6em rgba(225, 20, 98, 0.75), 1.1em 0.6em rgba(111, 202, 220, 0.75);
    }

    100% {
      box-shadow: 1.1em -0.6em rgba(225, 20, 98, 0.75), -1.1em 0.6em rgba(111, 202, 220, 0.75);
    }
  }

  @keyframes after {
    0% {
      height: 0.3em;
      box-shadow: 0.6em 1.1em rgba(61, 184, 143, 0.75), -0.6em -1.1em rgba(233, 169, 32, 0.75);
    }

    35% {
      height: 2.5em;
      box-shadow: 0.6em 0 rgba(61, 184, 143, 0.75), -0.6em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
      height: 0.3em;
      box-shadow: 0.6em -1.1em rgba(61, 184, 143, 0.75), -0.6em 1.1em rgba(233, 169, 32, 0.75);
    }

    100% {
      box-shadow: 0.6em 1.1em rgba(61, 184, 143, 0.75), -0.6em -1.1em rgba(233, 169, 32, 0.75);
    }
  }

  .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
  }

  .full-loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(255 255 255 / 50%);

    &.absolute {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1023;
    }
  }

  html[data-theme='dark'] {
    .full-loading:not(.light) {
      background-color: #000;
    }
  }

  .full-loading.dark {
    background-color: #000;
  }
</style>