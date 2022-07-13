<template>
  <div
  class="foot"
  >
    <input type="checkBox">
    <p>
      <span>已完成{{doneTotal}}/总计{{todos.length}}</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: 'UserFooter',
        props: ['todos'],
        computed: {
          doneTotal() {
            return this.todos.reduce((total, current) => {
              return total + (current.completed ? 1 : 0);
            }, 0);
          }
        }
    }
</script>

<style scoped>
  .foot {
    display: flex;
    align-items: center;
  }
</style>
