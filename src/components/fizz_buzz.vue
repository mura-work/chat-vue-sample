<template>
  <div>
    <post-form @post-comment="postComment" />
    <ul>
      <li v-for="(error, i) in errorMessages" :key="i">{{error}}</li>
    </ul>
    <post-list :posts="lists" />
  </div>
</template>

<script>
import { fizzBuzz } from '../service/fizz_buzz'
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { postComment, validPost } from '../service/post_comment'

export default {
  name: 'fizz_buzz',
  components: {
    PostForm,
    PostList,
  },
  data()  {
    return {
      lists: [],
      errorMessages: [],
    }
  },
  methods: {
    init() {
      fizzBuzz()
    },
    postComment(value) {
      this.errorMessages = validPost(value)
      console.log(this.errorMessages)
      if (this.errorMessages.length > 0) return
      postComment(this.lists, value)
    }
  },
  mounted() {
    this.init()
  },
}
</script>