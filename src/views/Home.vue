<template>
  <div id="home">
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import axios from 'axios';
import PostList from '../components/PostList.vue'

const URL = "https://firestore.googleapis.com/v1/projects/" +
    process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents/comments"

export default {
  name: 'home',
  components: {
    PostList,
  },
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