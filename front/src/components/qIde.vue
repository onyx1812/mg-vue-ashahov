<template>
  <div>
    <h3>{{ subtitle }}</h3>
    <h4>{{ description }}</h4>
    <div class="fields">
      <div class="field">
        <input type="text" v-model="name" placeholder="Введите ФИО">
      </div>
      <div class="field">
        <input type="text" v-model="email" placeholder="Введите E-mail *" required>
      </div>
      <div class="field">
        <button class="btn" @click="quizAction">Продолжить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'qIde',
  data(){
    return {
      q: false,
      subtitle: 'Для продолжения ведите свои данные',
      description: 'поле ФИО не обязательно для заполнения, вы можете заполнить анкету анонимно.',
      name: null,
      email: null
    }
  },
  mounted() {
    if (localStorage.qIde){
      this.$parent.quizNumber = 0;
    }
  },
  methods: {
    quizAction(e) {
      if(!this.name) this.name = false;
      let qIde = {
        name: this.name,
        email: this.email
      }
      localStorage.qIde = JSON.stringify(qIde);
      this.$parent.quizNumber = 0;
    }
  }
}
</script>
<style lang="scss" scoped>

.fields{
  width: 300px;
  margin: 0 auto;
}
.field{
  &:not(:first-child){
    margin-top: 15px;
  }
  input{
    height: 50px;
    display: block;
    width: 100%;
    border-radius: 100px;
    padding: 0 15px;
    font-size: 16px;
    border: 1px solid #000;
  }
}
.btn{
  font-size: 18px;
}
</style>