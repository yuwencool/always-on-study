<template>
  <div id="app">
    <div class="titlebox">
      <span class="title">今日工作计划表</span>
    </div>
    <hr/>
    <div class="headbox">
      <user-header 
        :addobj="addobj"
        style="width: 70%"
      />
    </div>

    <user-list 
      :todos="todos" 
      :checktodos="checktodos"
      :deletetodo="deletetodo"
    />
    <user-footer
      :todos="todos"
    />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import UserFooter from './components/UserFooter.vue'
import UserHeader from './components/UserHeader.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: '001', todo: '吃饭', completed: true},
        {id: '002', todo: '睡觉', completed: true},
        {id: '003', todo: '学习', completed: false},
        {id: '004', todo: '玩耍', completed: false},
      ]
    }
  },
  components: {
    UserHeader,
    UserList,
    UserFooter,
  },
  methods: {
    addobj(x) {
      this.todos.unshift(x);
    },
    checktodos(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      })
    },
    deletetodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style scoped>
  #app {
    width: 20%;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
  }
  .titlebox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
