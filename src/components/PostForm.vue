<template>
  <div class="post-form">
    <v-form class="form-contents">
      <v-text-field ref="name" v-model="name" label="Name" required></v-text-field>
      <v-text-field ref="comment" v-model="comment" label="Comment" required></v-text-field>
      <v-btn depressed color="primary" elevation="3" @click="addComment">投稿</v-btn>
    </v-form>
  </div>
</template>

<script>
// import { db } from '../main'

export default {
  name: 'post-form',
  data: () => ({
    name: '',
    comment: '',
  }),
  methods: {
    addComment: function() {
      const array = {'name': this.$refs.name.value, 'comment': this.$refs.comment.value}
      this.$emit('post-comments', array)
      this.name = ''
      this.comment = ''
    }
  }
}
</script>

<style>
.post-form {
  @apply w-1/2;
  @apply mx-auto;
  @apply mb-5;
  @apply outline-black;
}
</style>