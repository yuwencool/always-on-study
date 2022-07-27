<template>
  <div id="app">
    <animaTest/>
    <anima-test-1/>
  </div>
</template>

<script>
import animaTest from './components/animaTest.vue';
import AnimaTest1 from './components/animaTest1.vue';

export default {
  name: 'App',
  components: {
    animaTest,
    AnimaTest1,

  }
}
</script>

<style>

</style>
