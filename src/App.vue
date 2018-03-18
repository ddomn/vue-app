<template>
  <div id="app">
    <my-header />
    <router-view />
    <bo-t />
  </div>
</template>
<script>
import myHeader from '@/components/header'
import boT from '@/components/bottom'
export default {
  name: 'App',
  components: {
    myHeader,
    boT
  }
}
</script>
