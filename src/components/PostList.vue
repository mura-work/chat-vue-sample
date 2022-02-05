<template>
  <div class="post-list">
    <v-card
    class="post-contents"
    max-width="400"
    outlined
    v-for="(post, index) in posts" :key="`first-${index}`"
  >
    <v-card-title>{{post.name}}</v-card-title>
    <v-card-text>{{post.comment}}</v-card-text>
  </v-card>
  </div>
</template>

<script>

export default {
  name: 'post-list',
  props: {
    posts: {
      type: Array,
      default: () => {},
    },
  },
  methods: {}
}
</script>

<style scoped>
.post-list {
  @apply w-9/12;
  @apply m-auto;
}

.post-contents {
  @apply mx-auto;
  @apply mb-5;
}
</style>