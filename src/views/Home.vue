<template>
  <div id="home">
    <post-form @post-comments="addComments"></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { db } from '../main'

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
    this.getCommentAll()
  },
  methods: {
    getCommentAll: function() {
      db.collection('comments')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          this.posts = []
          snapshot.forEach(doc => {
            this.posts.push(doc.data())
          })
      })
    },
    getCommentByCreatedAsc: function () {
      db.collection('comments')
        .orderBy('created', 'desc')
        .limit(1)
        .onSnapshot(snapshot => {
          snapshot.forEach(doc => {
          this.posts.unshift(doc.data())
          })
      })
    },
    addComments: function(e){
      db.collection("comments").add({
        name: e.name,
        comment: e.comment,
        created: new Date(),
      }).then(res => {
        console.log(res)
      })
      // this.getCommentByCreatedAsc()
    }
  }
}
</script>

<style>
.home {
  @apply w-full;
}

</style>