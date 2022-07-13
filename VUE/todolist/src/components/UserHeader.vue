<template>
  <input 
    type="text" 
    placeholder="请输入要做的事情（按回车录入）" 
    @keyup.enter="add" 
    v-model="title"
    ref="info"
  >
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'UserHeader',
        props: ["addobj"],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            add () {
                if (!this.title) return alert("不要输入空值！")
                const newobj = {id: nanoid(), todo: this.title, completed: false};
                this.addobj(newobj);
                this.$refs.info.value = '';
            }
        }
    }
</script>

<style>

</style>
