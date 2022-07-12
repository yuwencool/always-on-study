<template>
  <div id="app">
    <user-header :addobj="addobj"/>
    <user-list 
      :todos="todos" 
      :checktodos="checktodos"
      :deletetodo="deletetodo"
    />
    <user-footer/>
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

<style>

</style>
