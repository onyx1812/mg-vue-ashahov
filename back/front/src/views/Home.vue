<template>
  <section class="quiz" v-if="loading">
    <div class="container">
      <component v-bind:is="`q${quizNumber}`"></component>
    </div>
  </section>
</template>
<script>
import qIde from '@/components/qIde.vue'
import q0 from '@/components/q0.vue'
import q1 from '@/components/q1.vue'
import q2 from '@/components/q2.vue'
import q3 from '@/components/q3.vue'
import q4 from '@/components/q4.vue'
import q5 from '@/components/q5.vue'
import qResult from '@/components/qResult.vue'
export default {
  name: 'home',
  components: {
    qIde, q0, q1, q2, q3, q4, q5, qResult
  },
  data(){
    return {
      loading: true,
      quizNumber: 'Ide',
    }
  }
}
</script>
<style lang="scss" scoped>
.quiz{
  width: 100%;
  text-align: center;
}
</style>