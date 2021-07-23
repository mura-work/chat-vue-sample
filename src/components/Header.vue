<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
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