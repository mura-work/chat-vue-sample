<template>
  <div class="post-form">
    <v-form class="form-contents">
      <v-text-field disabled v-model="nameData" label="Name" required></v-text-field>
      <v-text-field v-model="comment" label="Comment" required></v-text-field>
      <v-btn @click="addComment()">投稿</v-btn>
    </v-form>
  </div>
</template>

<script>

export default {
  name: 'post-form',
  data: () => ({
    comment: '',
  }),
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    nameData: {
      get() {
        return this.name
      },
      set(value) {
        this.$emit('update:name', value)
      }
    }
  },
  methods: {
    addComment: function() {
      const array = {'name': this.name, 'comment': this.comment}
      this.$emit('post-comment', array)
      this.comment = ''
    }
  }
}
</script>

<style scoped>
.post-form {
  @apply w-1/2;
  @apply mx-auto;
  @apply mb-5;
  @apply outline-black;
}
</style>