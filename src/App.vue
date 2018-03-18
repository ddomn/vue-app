<template>
  <div id="app">
    <my-header />
    <router-view />
  </div>
</template>
<script>
import myHeader from '@/components/header'
export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>
