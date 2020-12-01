<template>
  <section class="report">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Анкета Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters">
              <label :for="`filter_${i}`">{{ filter.label }}</label>
              <div v-if="filter.id === 2">
                <div class="row">
                  <div class="col"><input type="number" v-model.number="filters_model_agemin" placeholder="от" min="12" max="120" step="1"></div>
                  <div class="col"><input type="number" v-model.number="filters_model_agemax" placeholder="до" min="12" max="120" step="1"></div>
                </div>
              </div>
              <div v-else>
                <select :name="i" :id="`filter_${i}`" v-model="filters_model[i]" >
                  <option value="default" disabled selected>Не выбранно</option>
                  <option v-for="option in filter.options" :value="option">{{ option }}</option>
                </select>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 1 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q1">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model.number="filters_q1_model[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model.number="filters_q1_model[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>

            <!-- Операциональная материальная установка
            Операциональная ментальная установка
            Целевая установка
            мысловая установка -->
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 2 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q2">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model.number="filters_q2_model[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model.number="filters_q2_model[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
<!--             Тревожность
            Враждебность
            Депрессия
            Рефлексия
            Импульсивность
            Ранимость
            Нейротизм

            Сердечность
            Общительность
            Настойчивость
            Активность
            Поиск возбуждения
            Позитивные эмоции
            Экстраверсия

            Фантазия
            Эстетика
            Чувства
            Действия
            Идеи
            Ценности
            Открытость опыту

            Доверие
            Честность
            Альтруизм
            Уступчивость
            Скромность
            Чуткость
            Сотрудничество

            Компетентность
            Организованность
            Послушность долгу
            Стремление к достижениям
            Самодисциплина
            Обдумывание поступков
            Добросовестность -->
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 3 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q3">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model.number="filters_q3_model[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model.number="filters_q3_model[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <!-- Невротичность
            Спонтанная агрессивность
            Депрессивность
            Раздражительность
            Общительность
            Уравновешенность
            Реактивная агрессивность
            Застенчивость
            Открытость
            Экстраверсия–интроверсия
            Эмоциональная лабильность
            Маскулинизм–феминизм -->
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 4 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q4">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model.number="filters_q4_model[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model.number="filters_q4_model[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <!-- Переживание психотравмирующих обстоятельств
            Неудовлетворенность собой
            «Загнанность в клетку»
            Тревога и депрессия
            Неадекватное избирательное эмоциональное реа­гирование
            Эмоционально-нравственная дезориентация
            Расширение сферы экономии эмоций
            Редукция профессиональных обязанностей
            Эмоциональный дефицит
            Эмоциональная отстраненность
            Личностная отстраненность (деперсонализация)
            Психосоматические и психовегетативные нарушения -->
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 5 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q5">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model.number="filters_q5_model[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model.number="filters_q5_model[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <!-- Сила процессов возбуждения
            Сила процессов торможения
            Подвижность нервных процессов -->
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-12">
          <button class="btn" @click="filterAction">Применить фильтры</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'Report',
  data(){
    return {
      Users: false,
      filters: [
        {
          id: 1,
          label: 'Пол',
          options: ['Мужской', 'Женский']
        },
        {
          id: 2,
          label: 'Возраст',
          options: false
        },
        {
          id: 3,
          label: 'Семейное положение',
          options: ['женат/замужем', 'разведен/а ', 'холост/не замужем']
        },
        {
          id: 4,
          label: 'Образование',
          options: ['среднее', 'средне-специальное', 'высшее']
        },
        {
          id: 5,
          label: 'Занятость',
          options: ['да', 'нет', 'частичная занятость']
        },
        {
          id: 6,
          label: 'Уровень доходов',
          options: ['низкий', 'средний', 'высокий']
        },
        {
          id: 7,
          label: 'Уровень образованности',
          options: ['низкий', 'средний', 'высокий']
        },
        {
          id: 8,
          label: 'Частота ошибок в целом',
          options: ['редко', 'средне', 'часто']
        },
        {
          id: 9,
          label: 'Часто ошибок повседневно',
          options: ['редко', 'средне', 'часто']
        },
        {
          id: 10,
          label: `Ошибки «на автомате»`,
          options: ['редко', 'средне', 'часто']
        },
        {
          id: 11,
          label: `Ошибки в результате «мысленных» операций`,
          options: ['редко', 'средне', 'часто']
        },
        {
          id: 12,
          label: `Сложность достижения цели`,
          options: ['редко', 'средне', 'часто']
        },
        {
          id: 1,
          label: `Оценика нормам морали`,
          options: ['с осуждением', 'нейтрально', 'считаю допустимым']
        }
      ],
      filters_model: ['default', 'age', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default'],
      filters_model_agemin: 'от',
      filters_model_agemax: 'до',
      filteredData: false,

      filters_q1: ['Операциональная материальная установка', 'Операциональная ментальная установка', 'Целевая установка', 'Смысловая установка'],
      filters_q1_model:[],
      filters_q2: ['Тревожность', 'Враждебность', 'Депрессия', 'Рефлексия', 'Импульсивность', 'Ранимость', 'Нейротизм', 'Сердечность', 'Общительность', 'Настойчивость', 'Активность', 'Поиск возбуждения', 'Позитивные эмоции', 'Экстраверсия', 'Фантазия', 'Эстетика', 'Чувства', 'Действия', 'Идеи', 'Ценности', 'Открытость опыту', 'Доверие', 'Честность', 'Альтруизм', 'Уступчивость', 'Скромность', 'Чуткость', 'Сотрудничество', 'Компетентность', 'Организованность', 'Послушность долгу', 'Стремление к достижениям', 'Самодисциплина', 'Обдумывание поступков', 'Добросовестность'],
      filters_q2_model:[],
      filters_q3: ['Невротичность', 'Спонтанная агрессивность', 'Депрессивность', 'Раздражительность', 'Общительность', 'Уравновешенность', 'Реактивная агрессивность', 'Застенчивость', 'Открытость', 'Экстраверсия–интроверсия', 'Эмоциональная лабильность', 'Маскулинизм–феминизм'],
      filters_q3_model:[],
      filters_q4: ['Переживание психотравмирующих обстоятельств', 'Неудовлетворенность собой', '«Загнанность в клетку»', 'Тревога и депрессия', 'Неадекватное избирательное эмоциональное реа­гирование', 'Эмоционально-нравственная дезориентация', 'Расширение сферы экономии эмоций', 'Редукция профессиональных обязанностей', 'Эмоциональный дефицит', 'Эмоциональная отстраненность', 'Личностная отстраненность (деперсонализация)', 'Психосоматические и психовегетативные нарушения'],
      filters_q4_model:[],
      filters_q5: ['Сила процессов возбуждения', 'Сила процессов торможения', 'Подвижность нервных процессов'],
      filters_q5_model:[],
    }
  },
  mounted(){
    Request.get()
      .then(result => {
        this.Users = result;
        console.log(this.Users);
      })
        .catch(err => console.error(err))
  },
//  filters: {
    // dateFilter(val){
    //   let newDate = new Date(val);
    //   return `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}  ${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    // },
    // reverse(val) {
    //   return val.slice().reverse();
    // },
    // telTo(val){
    //   return val.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('').toString().replace(/[,]/g, '');;
    // }
//  },
  methods: {
    filterAction(e){
      e.preventDefault();
      const newData = this.Users;
      this.filters_model.forEach((option, i) => {
        if(option === "age" ){
          console.log('------------');
          console.log(this.Users);
          console.log('------------');
          this.Users.forEach((item, l) => {
            let userData = JSON.parse(item.q0);
            if( (Number(userData[1].a) >= this.filters_model_agemin) && (Number(userData[1].a) <= this.filters_model_agemax) ){
              console.log('nice');
            } else {
              console.log('ne nice');
              delete newData[l];
            }
          });
        } else if(option === "default"){
          console.log(option);
        } else {
          newData.forEach((item, l) => {
            let q0 = JSON.parse(item.q0);
            if( q0[i].a !== option ){
              newData.splice(l, 1);
            }
          });
        }
      });
      this.filteredData = newData;
      console.log(this.filteredData);
    },
    openFilter(e){
      e.preventDefault();
      e.target.parentNode.classList.toggle('active');
    }
  },
  beforeCreate(){
    // if( this.$route.query.password !== 'ashhov') this.$router.push('/');
  }
}
</script>
<style lang="scss" scoped>
.report{
  width: 100%;
}
.filters{
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.22394);
  border-radius: 12px;
  padding: 30px 15px;
  margin-top: 30px;
  max-height: 250px;
  overflow: hidden;
  position: relative;
  transition: max-height 1s ease;
  padding-bottom: 60px;
  &.active{
    max-height: 10000px;
    .open-filter{
      &:before{
        content: 'скрыть';
      }
    }
  }
}
.btn{
  width: 400px;
  margin: 60px auto 0;
  display: block;
}
h3{
  margin-bottom: 15px;
}
.filter{
  &:not(:first-child){
    margin-top: 10px;
  }
  label{
    font-size: 12px;
    display: block;
    margin-bottom: 2px;
    font-weight: 500;
  }
  input, select{
    display: block;
    width: 100%;
    height: 30px;
    border-radius: 4px;
    padding: 0 5px;
    border: 1px solid #000;
  }
  option{
    font-size: 16px;
    padding: 2px 0;
  }
  .col:first-child{
    position: relative;
    &:after{
      content:"-";
      display: block;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
.open-filter{
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0, 0) -0%, #fff 50%);
  padding: 30px 0 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 12px;
  transition: .3s ease;
  &:before{
    content: 'открыть';
  }
  &:hover{
    font-weight: 700;
  }
}
</style>