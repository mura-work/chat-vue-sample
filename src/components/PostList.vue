<template>
  <div id="post-list">
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