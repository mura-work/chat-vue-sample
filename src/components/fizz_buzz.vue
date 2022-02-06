<template>
  <div>
    <post-form :name.sync="name" @post-comment="postComment" />
    <ul>
      <li v-for="(error, i) in errorMessages" :key="i">{{error}}</li>
    </ul>
    <post-list :posts="lists" v-if="lists.length" />
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
      name: 'login User',
    }
  },
  methods: {
    init() {
      fizzBuzz()
    },
    postComment(value) {
      console.log(value)
      this.errorMessages = validPost(value)
      console.log(this.errorMessages)
      if (this.errorMessages.length > 0) return
      postComment(this.lists, value)
    }
  },
  watch: {
    name: {
      handler() {
        console.log(this.name)
      }
    }
  },
  mounted() {
    this.init()
  },
}
</script>