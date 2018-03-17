<template>
  <div id="app">
    <my-header />
    <router-view />
    <a-bout :class="{dspn:0}" />
    <o-f :class="{dspn:0}" />
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
