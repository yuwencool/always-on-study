<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
    <transition name="test" appear>
      <h1 v-show="isShow">你好2</h1>
    </transition>
    <!-- appear可以使得元素初始加载也有动画 -->
    <!-- transition里面只能包裹一个子节点，多个时需要使用transitionGroup -->
    <transition-group appear>
      <h1 v-show="!isShow" key="1">你好3</h1>
      <h1 v-show="isShow" key="2">你好4</h1>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "animaTest",
    data() {
      return {
        isShow: true,
      };
    },
  };
</script>

<style scoped>
  h1 {
    background-color: orange;
    transition: 1s linear;
  }
  .hello-enter-active {
    animation: dida 1s linear;
  }
  .hello-leave-active {
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

  /* 下面是另一种写法 */
  .test-enter,
  .test-leave-to {
    transform: translateX(-100%);
  }
  .test-leave,
  .test-enter-to {
    transform: translateX(0px);
  }
</style>>