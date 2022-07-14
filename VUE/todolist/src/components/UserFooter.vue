<template>
  <div
    class="foot"
  >
    <input 
      type="checkBox"
      :checked="checkAll"
      @change="operateAll"
    />
    <p class="sumtitle">
      <span class="foottitle">已完成{{doneTotal}}/总计{{total}}</span>
    </p>
    <button
      class="dangerReact"
      @click="clearAll"
    >
      清除所有任务
    </button>
  </div>
</template>

<script>
    export default {
        name: 'UserFooter',
        props: ['todos', 'clear', 'selectAll'],
        computed: {
          doneTotal() {
            return this.todos.reduce((total, current) => {
              return total + (current.completed ? 1 : 0);
            }, 0);
          },
          total() {
            return this.todos.length;
          },
          checkAll() {
            return this.doneTotal === this.total && this.total;
          }
        },
        methods: {
          clearAll() {
            if(confirm('确定清除所有任务？')) this.clear();
          },
          operateAll(e) {
            this.selectAll(e.target.checked);
          }
        }
    }
</script>

<style scoped>
  .foot {
    display: flex;
    align-items: center;
  }
  .sumtitle {
    margin-left: 2%;
  }
  .dangerReact {
    margin-left: 20%;
    background-color: yellow;
    border-color: yellow;
    font-weight: bolder;
    color: red;
  }
</style>
