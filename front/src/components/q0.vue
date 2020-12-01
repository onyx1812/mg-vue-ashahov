<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>
    <h4>{{ description }}</h4>
    <div class="question">
      <div class="count"><span>{{this.quizNumber + 1}}</span> из {{ this.quiz.length }}</div>
      <h5 v-html="quiz[this.quizNumber].q"></h5>
      <div class="answers" v-if="this.quizNumber === 1">
        <input type="number" v-model.number="age" >
        <button class="btn" @click="quizAction" :value="this.age" >далее</button>
      </div>
      <div class="answers" v-else>
        <button class="btn" v-for="answer in quiz[this.quizNumber].a" @click="quizAction" :value="answer" >{{ answer }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q0',
  data(){
    return {
      age: 20,
      title: 'Анкета',
      subtitle: 'Просим Вас ответить на вопоросы методик, посвященных изучению индивидуальных качеств человека. Не размышляйте долго над выбором ответа. Результаты исследования будут обрабатываться в обобщенном виде.',
      description: 'Укажите, пожалуйста, следующие данные о себе:',
      quizNumber: 0,
      quiz: [
        {
          id: 1,
          q: 'Пол',
          a: ['Мужской', 'Женский']
        },
        {
          id: 2,
          q: 'Возраст',
          a: Number
        },
        {
          id: 3,
          q: 'Семейное положение',
          a: ['женат/замужем', 'разведен/а ', 'холост/не замужем']
        },
        {
          id: 4,
          q: 'Образование',
          a: ['среднее', 'средне-специальное', 'высшее']
        },
        {
          id: 5,
          q: 'Работаете ли Вы?',
          a: ['да', 'нет', 'частичная занятость']
        },
        {
          id: 6,
          q: 'Как оцениваете свой уровень доходов?',
          a: ['низкий', 'средний', 'высокий']
        },
        {
          id: 7,
          q: 'Оцените уровень своей образованности',
          a: ['низкий', 'средний', 'высокий']
        },
        {
          id: 8,
          q: 'Оцените насколько часто Вы совершаете ошибки в своей жизни в целом?',
          a: ['редко', 'средне', 'часто']
        },
        {
          id: 9,
          q: 'Оцените насколько часто Вы совершаете ошибки в своей повседневной, привычной деятельности?',
          a: ['редко', 'средне', 'часто']
        },
        {
          id: 10,
          q: `Как часто Вы совершаете ошибки «на автомате»? <br> <span>Например: <br> ¨повернули в привычную сторону, когда нужно в другое место или проехали нужный поворот, или свою остановку; <br> ¨нажали не ту кнопку в лифте, поменяли буквы местами при наборе текста или набрали одно слово дважды; <br> ¨вдруг потеряли вещь, которую только что держали в руках.</span>`,
          a: ['редко', 'средне', 'часто']
        },
        {
          id: 11,
          q: `Как часто Вы совершаете ошибки в результате «мысленных» операций? <br> <span>Например: <br> ¨назвали мужа именем своего брата или жену именем своей сестры; <br> ¨слово «вертится на языке», но не можете его вспомнить; <br> ¨у человека знакомое лицо, но не можете назвать его по  имени; <br> ¨забыли очередность цифр в номере телефона, который до этого прекрасно помнили.</span>`,
          a: ['редко', 'средне', 'часто']
        },
        {
          id: 12,
          q: `Оцените насколько часто Вам бывает сложно достичь цели по следующим причинам: <br> <span>¨неправильно оценили реальную ситуацию, в которой находились; <br> ¨неправильно оценили свои возможности.</span>`,
          a: ['редко', 'средне', 'часто']
        },
        {
          id: 13,
          q: `Оцените, как Вы относитесь к людям, считающим не обязательным следовать нормам морали? <br> <span>Например, допускающим: <br> ¨распущенность; <br> ¨обман; <br> ¨интриги; <br> ¨хищения; <br> ¨ коррупцию и др.</span>`,
          a: ['с осуждением', 'нейтрально', 'считаю допустимым']
        }
      ],
      q0: [
        {id: 1, a: false },
        {id: 2, a: false },
        {id: 3, a: false },
        {id: 4, a: false },
        {id: 5, a: false },
        {id: 6, a: false },
        {id: 7, a: false },
        {id: 8, a: false },
        {id: 9, a: false },
        {id: 10, a: false },
        {id: 11, a: false },
        {id: 12, a: false },
        {id: 13, a: false }
      ]
    }
  },
  mounted() {
    if (localStorage.q0){
      this.q0 = JSON.parse(localStorage.q0);
      this.q0.forEach((item, i) => {
        if(item.a){
          this.quizNumber = i + 1;
          if( this.quizNumber >= this.q0.length ){
            this.$parent.quizNumber = this.$parent.quizNumber + 1;
          }
        }
      });
    }
  },
  methods: {
    quizAction(e) {
      let newArr = this.q0;
      newArr[this.quizNumber].a = e.target.value;
      this.q0 = newArr;
      localStorage.q0 = JSON.stringify(newArr);
      this.quizNumber = this.quizNumber + 1;
      if( this.quizNumber >= this.q0.length ){
        this.$parent.quizNumber = this.$parent.quizNumber + 1;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
[type="number"]{
  font-size: 26px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 100px;
  padding: 14px 60px 14px 30px;
  text-align: center;
  margin: 0 -70px 0 0;
  font-weight: 600;
  transition: transform .25s ease;
  color: #000;
  width: 140px;
  & + .btn{
    &:hover{
      transform: scale(1.025);
    }
  }
}
</style>