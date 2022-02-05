<template>
  <div>
    <button @click="startFizzBuzz()"></button>
  </div>
</template>

<script>
import { fizzBuzz } from '../service/fizz_buzz'
export default {
  name: 'fizz_buzz',
  methods: {
    init() {
      fizzBuzz()
    }
  },
  mounted() {
    this.init()
  },
}
</script>