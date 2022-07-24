<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'animaTest',
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
  .v-enter-active {
    animation: dida 1s linear;
  }
  .v-leave-active {
    animation: dida 1s linear reverse;
  }
  @keyframes dida {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>>