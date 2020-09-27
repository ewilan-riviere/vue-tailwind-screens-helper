<template>
  <div
    v-if="isDevEnv"
    class="fixed flex justify-around helper screen-label"
    :class="
      toggle ? 'bg-green-600 bg-opacity-75' : 'bg-green-600 bg-opacity-25'
    "
    @click="toggle = !toggle"
  >
    <div v-if="toggle">
      <div>
        <div class="flex sm:hidden">
          xs
          <icon name="xs" />
        </div>
        <div class="hidden sm:flex md:hidden">
          sm
          <icon name="sm" />
        </div>
        <div class="hidden md:flex lg:hidden">
          md
          <icon name="md" />
        </div>
        <div class="justify-around hidden lg:flex xl:hidden">
          lg
          <icon name="lg" />
        </div>
        <div class="hidden xl:flex">
          xl
          <icon name="xl" />
        </div>
        <div class="flex mx-auto my-auto text-sm" style="width: max-content;">
          {{ screenWidth }} px
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from './icon.vue'
export default {
  name: 'TailwindHelper',
  data() {
    return {
      isDevEnv: process.env.NODE_ENV === 'development',
      toggle: true,
      screenWidth: 0,
    }
  },
  components: {
    icon,
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      // if (process.client) {
      let width = window.innerWidth
      this.screenWidth = width
      // }
    },
  },
}
</script>

<style scoped>
.helper {
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;
  @apply text-white font-bold text-xl uppercase p-4 transition-colors duration-300 rounded-lg shadow-md cursor-pointer;
}
.helper:hover {
  @apply bg-opacity-100;
}
</style>
