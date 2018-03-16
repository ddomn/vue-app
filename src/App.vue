<template>
  <div id="app">
    <my-header />
    <router-view />
    <a-bout />
    <o-f />
  </div>
</template>

<script>
import myHeader from '@/components/header'
import aBout from '@/components/about'
import oF from '@/components/of'
export default {
  name: 'App',
  components: {
    myHeader,
    aBout,
    oF
  }
}
</script>
