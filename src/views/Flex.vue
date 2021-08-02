<template>
  <div class="flex-box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>

<script>
export default {
  name: 'flex-box',
  data: () => ({}),
}
</script>

<style scoped>
.flex-box {
  @apply bg-blue-400;
  @apply h-64;
  @apply p-3;
}

.flex-box > div {
  @apply bg-white;
  @apply m-2;
  @apply text-4xl;
}
</style>