<template>
  <!-- 此处直接用v-model也可以实现，不过一般不推荐，因为属性值来自于props，而props是只读属性 -->
  <li>
    <input 
      type="checkbox" 
      :checked="todoobj.completed"
      @change="checktodo(todoobj.id)"
    />
    <p>{{todoobj.todo}}</p>
    <button class="btn btn-danger" @click="deleteItem(todoobj.id)">删除</button>
  </li>

</template>

<script>
    export default {
        name: 'UserItem',
        props: ['todoobj', 'checktodos', 'deletetodo'],
        methods: {
          checktodo(id) {
            this.checktodos(id);
          },
          deleteItem(id) {
            if(confirm('是否确认删除')) {
              this.deletetodo(id);
            }
          }
        } 
    }
</script>

<style scoped>
    li {
      display: flex;
      width: 20%;
      height: 30px;
      /* margin-top: 10px; */
      list-style: none;
      align-items: center;
    }
    li:hover {
        background-color: gray;
    }
    li p {
      height: 60%;
    }
    li button {
      position: absolute;
      left: 15%;
      background-color: red;
      border: none;
      color: white;
      display: none;
    }
    li:hover button {
      display: block;
    }
</style>
