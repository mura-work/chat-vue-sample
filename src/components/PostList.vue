<template>
  <div class="post-list">
    <v-card
    class="post-contents"
    max-width="400"
    outlined
    v-for="(post, index) in posts" :key="`first-${index}`"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{post.name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{post.comment}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-card-actions>

      </v-card-actions>
    </v-list-item>
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
    }
  }
}
</script>

<style>
.post-list {
  @apply w-9/12;
  @apply m-auto;
}

.post-contents {
  @apply mx-auto;
  @apply mb-5;
}
</style>