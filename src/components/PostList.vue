<template>
  <div id="post-list">
    <v-card
    class="post-contents"
    max-width="400"
    outlined
    v-for="post in posts" :key="post.name"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{post.fields.name.stringValue}}
        </v-list-item-title>
        <v-list-item-subtitle>{{post.fields.comment.stringValue}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-card-actions>
        {{post.fields.created.timestampValue}}
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
.post-contents {
  @apply mx-auto;
  @apply mb-5;
}
</style>