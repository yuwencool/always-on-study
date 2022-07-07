<template>
  <li>
    <input type="checkbox" :checked="todoobj.completed"><span>{{todoobj.todo}}</span><button>删除</button>
  </li>
</template>

<script>
    export default {
        name: 'UserItem',
        props: ['todoobj']
    }
</script>

<style>

</style>
