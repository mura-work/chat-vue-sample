<template>
  <div >
    <slot name="home"></slot>
    <slot name="users">
      {{headerText}}
    </slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>