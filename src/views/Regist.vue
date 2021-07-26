<template>
  <div class="login-form">
    <h2>新規登録</h2>
    <form>
      <label>メールアドレス</label>
      <input type="text" v-model="email" />
      <label>パスワード</label>
      <input type="password" v-model="password" />
      <button @click="login">登録</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'regist-form',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login: function() {
      alert("新規登録")
    }
  }
}
</script>