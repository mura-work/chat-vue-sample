<template>
  <div id="home">
    <post-form></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
// import axios from 'axios';
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { db } from '../main'

// const URL = "https://firestore.googleapis.com/v1/projects/" +
//     process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents/comments"

export default {
  name: 'home',
  components: {
    PostList,
    PostForm,
  },
  data: () => ({
    posts: [],
  }),
  created: function () {
    // axios.get(URL
    // ).then(response => {
    //   this.posts = response.data.documents
    // })
    db.collection('comments')
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
        this.posts.push(doc.data())
        })
    })
  },
}
</script>

<style>
.home {
  @apply w-full;
}

</style>