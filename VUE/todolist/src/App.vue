<template>
  <div id="app">
    <user-header :addobj="addobj"/>
    <user-list :todos="todos"/>
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
    }
  }
}
</script>

<style>

</style>
