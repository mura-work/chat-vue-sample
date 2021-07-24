<template>
  <div class="post-form">
    <v-form>
      <v-text-field v-model="name" label="Name" required></v-text-field>
      <v-text-field v-model="comment" label="Comment" required></v-text-field>
      <v-btn depressed color="primary" elevation="3" @click="addComment">投稿</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';

const URL = "https://firestore.googleapis.com/v1/projects/" +
    process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents/comments"

export default {
  name: 'post-form',
  data: () => ({
    name: '',
    comment: '',
  }),
  methods: {
    addComment: function() {
      const postTime = new Date();
      axios.post(URL,
      {
        fields: {
          name: {
            stringValue: this.name,
          },
          comment: {
            stringValue: this.comment,
          },
          created: {
            timestampValue: postTime,
          }
        }
      },
    )
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