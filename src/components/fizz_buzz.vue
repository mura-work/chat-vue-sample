<template>
  <div>
    <button @click="startFizzBuzz()"></button>
  </div>
</template>

<script>
export default {
  name: 'fizz_buzz',
  methods: {
    init() {
      [...Array(100).keys()].forEach((i) => {
        if (i % 15 === 0) {
          console.log('fizz_buzz')
        } else if (i % 5 === 0) {
          console.log('buzz')
        } else if (i % 3 === 0) {
          console.log('fizz')
        } else {
          console.log(i)
        }
      })
    }
  },
  mounted() {
    this.init()
  },
}
</script>