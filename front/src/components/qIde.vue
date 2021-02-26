<template>
  <div>
    <h2 class="desc-title">МЕТОДИКА ТЕСТИРОВАНИЯ ПРИЧИН ОШИБОЧНОГО ПОВЕДЕНИЯ</h2>
    <p class="desc-text">Представленная комплексная методика тестирования  предназначены для выявления причин ошибочного поведения. Результаты данной методики будут использованы для выявления причин совершения людьми ошибок в повседневной и профессиональной деятельности и предоставления научных рекомендаций по устранению таких причин. Проходя тест, вы помогаете делать мир лучше, а сами получаете возможность избегать ошибок в своей жизни!</p> 
    <p class="desc-text">Методика состоит из 5ти тестов. Примерное время прохождение всех тестов - 2 часа</p>
    <p class="desc-text">Вы можете прерваться на перерыв при прохождении теста и вернуться позже, веб сайт запомнит Ваши ответы, при условии, если вы не смените браузер или компьютер. Вместе с тем, рекомендуется все же не прерываться до окончания очередного теста (всего 5).</p>
    <p class="desc-text">Результаты тестов будут высланы Вам на электронную почту. Кроме того, Вы получите специальное приглашение на он-лайн курс по устранению причин ошибочного поведения.</p>
    <p class="desc-text">Все результаты теста и персональные данные (в случае их указания) строго конфиденциальны, не передаются третьим лицам и используются строго по назначению – в научных целях. Данная методика не собирает никакие финансовые данные.  Обработка результатов теста строго анонимна. Нажимая на кнопку «Начать» Вы соглашаетесь на передачу, хранение и обработку персональных данных в соответствии с законодательством.</p>
    <p class="desc-text desc-last">* все права защищены. Копирование и использование методики преследуется по закону.</p>
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
.desc{
  &-title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: left;
  }
  &-text{
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
  }
  &-last{
    margin-bottom: 60px;
  }
}
</style>