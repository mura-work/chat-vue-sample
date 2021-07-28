<template>
  <div id="users">
    <header-text>
      <template v-slot:users>
        <h2>users</h2>
        <div>ユーザ一覧</div>
      </template>
    </header-text>
    <transition appear>
      <div>トランジション表示</div>
    </transition>
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

<style>
.v-enter-active {
  transition: opacity 3s;
}

.v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}
</style>