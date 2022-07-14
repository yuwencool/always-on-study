<template>
    <ul>
        <user-item 
            v-for="item in todos" 
            :key="item.id" 
            :todoobj="item" 
            :checktodos="checktodos"
            :deletetodo="deletetodo"
        />
    </ul>
</template>

<script>
    import UserItem from './UsreItem.vue'
    export default {
        name: 'UserList',
        props: ['todos', 'checktodos', 'deletetodo'],
        components: {
            UserItem,
        },
        methods: {
        }
    }
</script>

<style scoped>
    ul {
        padding-left: 6%;
    }
</style>
