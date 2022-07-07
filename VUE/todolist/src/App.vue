<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader'
import UserList from '@/components/UserList'
import UserFooter from '@/components/UserFooter'
import UserItem from '@/components/UserItem'
export default {
  name: 'App',
  components: {
    UserHeader,
    UserList,
    UserFooter,
    UserItem
  }
}
</script>

<style>

</style>
