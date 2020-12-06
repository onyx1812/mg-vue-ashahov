<template>
  <div>
    <h3>{{ subtitle }}</h3>
    <h4>{{ description }}</h4>
    <div class="fields">
      <div class="field">
        <input type="text" v-model="name" placeholder="Введите ФИО">
      </div>
      <div class="field">
        <input type="email" v-model="email" placeholder="Введите E-mail *" required>
      </div>
      <div class="field">
        <button class="btn" @click="quizAction">Продолжить</button>
      </div>
      <div v-if="emailError" class="error">Введите корректный E-mail</div> 
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
      email: null,
      emailError: false
    }
  },
  mounted() {
    if (localStorage.qIde){
      this.$parent.quizNumber = 0;
    }
  },
  methods: {
    quizAction(e) {

      let emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if( emailReg.test(this.email) ){
        if(!this.name) this.name = false;
        localStorage.qIde = JSON.stringify({
          name: this.name,
          email: this.email
        });
        this.$parent.quizNumber = 0;
      } else {
        this.emailError = true;
        document.querySelector('[type="email"]').classList.add('err');
        setTimeout(() => {
          this.emailError = false;
          document.querySelector('[type="email"]').classList.remove('err');
        }, 3000);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.fields{
  position: relative;
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
}
.field{
  &:not(:first-child){
    margin-top: 15px;
  }
  input{
    height: 40px;
    display: block;
    width: 100%;
    border-radius: 100px;
    padding: 0 15px;
    font-size: 16px;
    border: 1px solid #000;
    @media (min-width: 768px) {
      height: 50px;
    }
  }
  .err{
    transition: .5s ease;
    border-color: red;
    box-shadow: 0 0 8px red;
  }
}
.btn{
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
}
.error{
  position: absolute;
  left: 0; width: 100%;
  text-align: center;
  color: red;
  top: 100%;
  padding-top: 5px;
}
</style>