<template>
  <div id="home">
    <button @click="addComment">テスト</button>
    <v-simple-table class="post-list">
      <template v-slot:default>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>内容</th>
            <th>投稿日時</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.name">
            <th>{{post.fields.name.stringValue}}</th>
            <th>{{post.fields.comment.stringValue}}</th>
            <th>{{post.fields.created.timestampValue}}</th>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios';

const URL = "https://firestore.googleapis.com/v1/projects/" +
    process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents/comments"

export default {
  name: 'home',
  data: () => ({
    posts: [],
  }),
  created: function () {
    axios.get(URL
    ).then(response => {
      this.posts = response.data.documents
    })
  },
  methods: {
    addComment: function() {
      // const postTime = new Date();
      // axios.post(URL,
      // {
      //   fields: {
      //     name: {
      //       stringValue: "あああああ",
      //     },
      //     comment: {
      //       stringValue: "いいいいい",
      //     },
      //     created: {
      //       timestampValue: postTime,
      //     }
      //   }
      // },
    // )
    }
  }
}
</script>

<style>
#app {
  @apply w-full;
}

.post-list {
  @apply w-9/12;
  @apply m-auto;
}
</style>