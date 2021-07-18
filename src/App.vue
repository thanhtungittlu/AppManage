<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/layouts/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    PageHeader
  }
}
</script>

<style>

</style>
