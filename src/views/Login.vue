<template>
  <div class="login-form">
    <h2>ログイン</h2>
    <form>
      <label>メールアドレス</label>
      <input type="text" v-model="email" />
      <label>パスワード</label>
      <input type="password" v-model="password" />
      <button @click="login">ログイン</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login: function() {
      alert("ログイン")
    }
  }
}
</script>