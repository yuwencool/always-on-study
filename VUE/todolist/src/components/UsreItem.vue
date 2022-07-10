<template>
  <!-- 此处直接用v-model也可以实现，不过一般不推荐，因为属性值来自于props，而props是只读属性 -->
  <li>
    <input 
      type="checkbox" 
      :checked="todoobj.completed"
      @change="checktodo(todoobj.id)"
    />
    <span>{{todoobj.todo}}</span>
    <button>删除</button>
  </li>
</template>

<script>
    export default {
        name: 'UserItem',
        props: ['todoobj', 'checktodos'],
        methods: {
          checktodo(id) {
            this.checktodos(id);
          }
        }
    }
</script>

<style>

</style>
