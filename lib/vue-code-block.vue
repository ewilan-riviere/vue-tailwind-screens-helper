<template>
  <div class="code-block" style="position: relative;">
    <div v-if="notReachable" class="not-reachable"></div>
    <div :class="['code-heading', colorClass]">
      <span v-if="path">
        <span class="expand">·</span><i>{{ path }}</i>
      </span>
    </div>
    <slot></slot>
    <div class="copy-it forward-head"></div>
  </div>
</template>

<script>
export default {
  name: 'CodeHeading',
  props: {
    ext: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    notReachable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClass() {
      return this.ext ? `code-heading__${this.ext}` : 'code-heading__default'
    },
  },
}
</script>

<style lang="stylus">
@import './assets/style.stylus'
</style>
