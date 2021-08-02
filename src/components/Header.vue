<template>
  <header class="w-3/5 flex justify-center mb-10">
    <ul class="w-3/5 flex justify-between">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
      <li>
        <router-link to="/flex">Flex</router-link>
      </li>
      <li>
        <span @click="logout">ログアウト</span>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'header-view',
  methods: {
    logout: function(){
      alert("ログアウト")
    }
  }
}
</script>