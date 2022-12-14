<template>
  <div class="flex">
    <div class="h-screen top-0 sticky p-4">
      <!-- Note: add overflow-y-scroll if sidebar content is longer than page -->
      <div v-for="fun in functions" :key="fun.name">
          <router-link :to="{ path: `${fun.path}` }">{{ fun.name }}</router-link>
        </div>
    </div>

    <div class="flex-grow p-4 bg-gray-300">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      functions: [
        {
          name: 'Convert',
          path: '/convert'
        },
        {
          name: 'Hello',
          path: '/hello'
        }
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
