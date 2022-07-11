<template>
  <!-- 此处直接用v-model也可以实现，不过一般不推荐，因为属性值来自于props，而props是只读属性 -->
  <li>
    <input 
      type="checkbox" 
      :checked="todoobj.completed"
      @change="checktodo(todoobj.id)"
    />
    <p>{{todoobj.todo}}</p>
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
    li {
        width: 50%;
        height: 30px;
        /* margin-top: 10px; */
        list-style: none;
    }
    li:before {
      display: inline-block;
      content: '';
      height: 100%;
      vertical-align: middle;
    }
    li:hover {
        background-color: gray;
    }
    li p {
      width: 50px;
      height: 80%;
    }
    li button {
      margin-top: 1%;
      float: right;
      display: none;
    }
    li:hover button {
      display: block;
    }
</style>
