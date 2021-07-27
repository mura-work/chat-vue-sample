<template>
  <div id="users">
    <header-text>
      <template v-slot:users>
        <h2>users</h2>
        <div>ユーザ一覧</div>
      </template>
    </header-text>
  </div>
</template>

<script>
import HeaderText from '../components/HeaderText.vue'

export default {
  name: 'users',
  components: {
    HeaderText,
  },
  data() {
    return {
      headerText: "users",
    }
  }
}
</script>