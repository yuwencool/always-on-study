<template>
    <ul>
        <user-item v-for="item in todos" :key="item.id" :todoobj="item"/>
    </ul>
</template>

<script>
    import UserItem from './UsreItem.vue'
    export default {
        name: 'UserList',
        props: ['todos'],
        components: {
            UserItem,
        },
        methods: {

        }
    }
</script>

<style>

</style>
