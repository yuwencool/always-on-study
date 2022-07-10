<template>
    <ul>
        <user-item 
            v-for="item in todos" 
            :key="item.id" 
            :todoobj="item" 
            :checktodos="checktodos"
        />
    </ul>
</template>

<script>
    import UserItem from './UsreItem.vue'
    export default {
        name: 'UserList',
        props: ['todos', 'checktodos'],
        components: {
            UserItem,
        },
        methods: {

        }
    }
</script>

<style>

</style>
