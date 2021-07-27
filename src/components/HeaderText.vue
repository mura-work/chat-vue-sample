<template>
  <div >
    <slot name="home"></slot>
    <slot name="users"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>