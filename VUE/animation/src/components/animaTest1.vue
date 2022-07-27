<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear可以使得元素初始加载也有动画 -->
    <!-- transition里面只能包裹一个子节点，多个时需要使用transitionGroup -->
    <transition-group 
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__jello"
      leave-active-class="animate__backOutDown"
    >
      <h1 v-show="!isShow" key="1">你好3</h1>
      <h1 v-show="isShow" key="2">你好4</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css';
  export default {
    name: 'animaTest1',
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
</style>>