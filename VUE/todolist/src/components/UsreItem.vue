<template>
  <!-- 此处直接用v-model也可以实现，不过一般不推荐，因为属性值来自于props，而props是只读属性 -->
  <li>
    <input 
      type="checkbox" 
      :checked="todoobj.completed"
      @change="checktodo(todoobj.id)"
    />
    <span v-show="!todoobj.isEdit">{{todoobj.todo}}</span>
    <input
      type="text" 
      v-show="todoobj.isEdit" 
      :value="todoobj.todo"
      @blur="handleBlur(todoobj, $event)"
      ref="inputTitle"
    />
    <button class="btn btn-danger" @click="deleteItem(todoobj.id)">删除</button>
    <button class="btn btn-edit" @click="editTodo(todoobj)" v-show="!todoobj.isEdit">编辑</button>
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
          },
          // 编辑事件名
          editTodo(todo) {
            // 这里直接写hasOwnProperty是会报错的
            if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
              todo.isEdit = true;
            } else{
              this.$set(todo, 'isEdit', true);
            }
            this.$nextTick(() => {
              this.$refs.inputTitle.focus();
            })
          },
          // 获取失去焦点时去除输入框
          handleBlur(todo, e) {
            todo.isEdit = false;
            this.$bus.$emit('updateTodo', todo.id, e.target.value);
          }
        } 
    }
</script>

<style scoped>
    li {
      /* display: flex; */
      width: 100%;
      height: 50px;
      line-height: 50px;
      /* margin-top: 10px; */
      list-style: none;
      /* align-items: center; */
      align-content: center;
    }
    li:hover {
        background-color: gray;
    }
    .btn {
      width: 50px;
      height: 30px;
      float: right;
      border: none;
      color: white;
      display: none;
      margin-left: 5px;
      margin-top: 10px;
    }
    .btn-danger {
      background-color: red;
    }
    .btn-edit {
      background-color: blue;
    }
    li:hover .btn {
      display: inline-block;
    }
</style>
