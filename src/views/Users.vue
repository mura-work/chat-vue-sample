<template>
  <div id="users">
    <header-text>
      <template v-slot:users>
        <h2>users</h2>
        <div>ユーザ一覧</div>
      </template>
    </header-text>
    <transition name="fade" appear>
      <p v-if="show">hello</p>
    </transition>
    <button @click="show = !show">切り替え</button>
    <transition enter-active-class="animate__animated animate__bounce" appear name="slide" type="animation">
      <p v-if="show">bye</p>
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
      show: false,
    }
  }
}
</script>

<style scoped>
/* 現れる最初の状態 */
.fade-enter {
  opacity: 0;
}

/* 現れる時のトランジションの状態 */
.fade-enter-active {
  transition: opacity 2s;
}

/* 現れる時の最後の状態 */
.fade-enter-to {
  opacity: 1;
}

/* 消える時の最初の状態 */
.fade-leave {
  opacity: 1;
}

/* 消える時のトランジションの状態 */
.fade-leave-active {
  transition: opacity 2s;
}

/* 消える時の最後の状態 */
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0);
  }
}

</style>