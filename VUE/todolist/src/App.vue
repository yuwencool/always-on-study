<template>
  <div id="app">
    <div class="titlebox">
      <span class="title">今日工作计划表</span>
    </div>
    <hr/>
    <div class="headbox">
      <user-header 
        @addobj="addobj"
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
      class="footposition"
      :clear="clear"
      :selectAll="selectAll"
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
      // 由于拿到的是字符串，所以必须要解析一下。
      todos: JSON.parse(localStorage.getItem('todos')) || []
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
    },
    clear() {
      this.todos = [];
    },
    selectAll(condition) {
      if(condition) {
        this.todos.forEach((todo) => {
          todo.completed = true;
        })
      }else {
        this.todos.forEach((todo) => {
          todo.completed = false;
        })
      }

    }
  },
  // 使用watch属性来监视数据的变化，已用于将数据实时存储在localStorage中
  watch: {
    todos: {
      deep: true, // 此处必须开启深度监视，因为监视的是一个对象
      handler(newValue) {
        // 此处一定要解析成字符串，因为toString无法将对象解析成正确的字符串样式
        localStorage.setItem('todos', JSON.stringify(newValue));
      }
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
  .footposition {
    margin-left: 6%;
  }
</style>
