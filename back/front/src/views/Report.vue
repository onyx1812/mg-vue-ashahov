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
                  <div class="col"><input type="number" v-model="filters_q0_min" placeholder="от" min="1" max="120" step="1"></div>
                  <div class="col"><input type="number" v-model="filters_q0_max" placeholder="до" min="0" max="120" step="1"></div>
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
                <div class="col"><input type="number" v-model="filters_q1_min[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model="filters_q1_max[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 2 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q2">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model="filters_q2_min[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model="filters_q2_max[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 3 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q3">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model="filters_q3_min[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model="filters_q3_max[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 4 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q4">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model="filters_q4_min[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model="filters_q4_max[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="filters">
            <h3>Методика № 5 Фильтр:</h3>
            <div class="filter" v-for="(filter, i) in filters_q5">
              <label :for="`filter_${i}`">{{ filter }}</label>
              <div class="row">
                <div class="col"><input type="number" v-model="filters_q5_min[i]" placeholder="от" min="0" max="100" step="1"></div>
                <div class="col"><input type="number" v-model="filters_q5_max[i]" placeholder="до" min="0" max="100" step="1"></div>
              </div>
            </div>
            <span @click="openFilter" class="open-filter"> фильтр</span>
          </div>
        </div>
        <div class="col-12">
          <button class="btn" @click="filterAction">Применить фильтры</button>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="result" v-if="Export">

        <h2>Результаты</h2>

        <h3>Анкета</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Пол</th>
                <th>Возраст</th>
                <th>Семейное положение</th>
                <th>Образование</th>
                <th>Занятость</th>
                <th>Уровень доходов</th>
                <th>Уровень образованности</th>
                <th>Частота ошибок в целом</th>
                <th>Часто ошибок повседневно</th>
                <th>Ошибки «на автомате»</th>
                <th>Ошибки в результате «мысленных» операций</th>
                <th>Сложность достижения цели</th>
                <th>Оценика нормам морали</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(anketa, i) in this.Export.anketa">
                <td>{{ anketa["Email"] }}</td>
                <td>{{ anketa["Пол"] }}</td>
                <td>{{ anketa["Возраст"] }}</td>
                <td>{{ anketa["Семейное положение"] }}</td>
                <td>{{ anketa["Образование"] }}</td>
                <td>{{ anketa["Занятость"] }}</td>
                <td>{{ anketa["Уровень доходов"] }}</td>
                <td>{{ anketa["Уровень образованности"] }}</td>
                <td>{{ anketa["Частота ошибок в целом"] }}</td>
                <td>{{ anketa["Часто ошибок повседневно"] }}</td>
                <td>{{ anketa["Ошибки «на автомате»"] }}</td>
                <td>{{ anketa["Ошибки в результате «мысленных» операций"] }}</td>
                <td>{{ anketa["Сложность достижения цели"] }}</td>
                <td>{{ anketa["Оценика нормам морали"] }}</td>
                <hr>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Методика 1</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Операциональная материальная установка</th>
                <th>Операциональная ментальная установка</th>
                <th>Целевая установка</th>
                <th>Смысловая установка</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(methods1, i) in this.Export.methods1">
                <td>{{ methods1["Email"] }}</td>
                <td>{{ methods1["Операциональная материальная установка"] }}</td>
                <td>{{ methods1["Операциональная ментальная установка"] }}</td>
                <td>{{ methods1["Целевая установка"] }}</td>
                <td>{{ methods1["Смысловая установка"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Методика 2</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Тревожность</th>
                <th>Враждебность</th>
                <th>Депрессия</th>
                <th>Рефлексия</th>
                <th>Импульсивность</th>
                <th>Ранимость</th>
                <th>Нейротизм</th>
                <th>Сердечность</th>
                <th>Общительность</th>
                <th>Настойчивость</th>
                <th>Активность</th>
                <th>Поиск возбуждения</th>
                <th>Позитивные эмоции</th>
                <th>Экстраверсия</th>
                <th>Фантазия</th>
                <th>Эстетика</th>
                <th>Чувства</th>
                <th>Действия</th>
                <th>Идеи</th>
                <th>Ценности</th>
                <th>Открытость опыту</th>
                <th>Доверие</th>
                <th>Честность</th>
                <th>Альтруизм</th>
                <th>Уступчивость</th>
                <th>Скромность</th>
                <th>Чуткость</th>
                <th>Сотрудничество</th>
                <th>Компетентность</th>
                <th>Организованность</th>
                <th>Послушность долгу</th>
                <th>Стремление к достижениям</th>
                <th>Самодисциплина</th>
                <th>Обдумывание поступков</th>
                <th>Добросовестность</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(methods2, i) in this.Export.methods2">
                <td>{{ methods2["Email"] }}</td>
                <td>{{ methods2["Тревожность"] }}</td>
                <td>{{ methods2["Враждебность"] }}</td>
                <td>{{ methods2["Депрессия"] }}</td>
                <td>{{ methods2["Рефлексия"] }}</td>
                <td>{{ methods2["Импульсивность"] }}</td>
                <td>{{ methods2["Ранимость"] }}</td>
                <td>{{ methods2["Нейротизм"] }}</td>
                <td>{{ methods2["Сердечность"] }}</td>
                <td>{{ methods2["Общительность"] }}</td>
                <td>{{ methods2["Настойчивость"] }}</td>
                <td>{{ methods2["Активность"] }}</td>
                <td>{{ methods2["Поиск возбуждения"] }}</td>
                <td>{{ methods2["Позитивные эмоции"] }}</td>
                <td>{{ methods2["Экстраверсия"] }}</td>
                <td>{{ methods2["Фантазия"] }}</td>
                <td>{{ methods2["Эстетика"] }}</td>
                <td>{{ methods2["Чувства"] }}</td>
                <td>{{ methods2["Действия"] }}</td>
                <td>{{ methods2["Идеи"] }}</td>
                <td>{{ methods2["Ценности"] }}</td>
                <td>{{ methods2["Открытость опыту"] }}</td>
                <td>{{ methods2["Доверие"] }}</td>
                <td>{{ methods2["Честность"] }}</td>
                <td>{{ methods2["Альтруизм"] }}</td>
                <td>{{ methods2["Уступчивость"] }}</td>
                <td>{{ methods2["Скромность"] }}</td>
                <td>{{ methods2["Чуткость"] }}</td>
                <td>{{ methods2["Сотрудничество"] }}</td>
                <td>{{ methods2["Компетентность"] }}</td>
                <td>{{ methods2["Организованность"] }}</td>
                <td>{{ methods2["Послушность долгу"] }}</td>
                <td>{{ methods2["Стремление к достижениям"] }}</td>
                <td>{{ methods2["Самодисциплина"] }}</td>
                <td>{{ methods2["Обдумывание поступков"] }}</td>
                <td>{{ methods2["Добросовестность"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Методика 3</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Невротичность</th>
                <th>Спонтанная агрессивность</th>
                <th>Депрессивность</th>
                <th>Раздражительность</th>
                <th>Общительность</th>
                <th>Уравновешенность</th>
                <th>Реактивная агрессивность</th>
                <th>Застенчивость</th>
                <th>Открытость</th>
                <th>Экстраверсия–интроверсия</th>
                <th>Эмоциональная лабильность</th>
                <th>Маскулинизм–феминизм</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(methods3, i) in this.Export.methods3">
                <td>{{ methods3["Email"] }}</td>
                <td>{{ methods3["Невротичность"] }}</td>
                <td>{{ methods3["Спонтанная агрессивность"] }}</td>
                <td>{{ methods3["Депрессивность"] }}</td>
                <td>{{ methods3["Раздражительность"] }}</td>
                <td>{{ methods3["Общительность"] }}</td>
                <td>{{ methods3["Уравновешенность"] }}</td>
                <td>{{ methods3["Реактивная агрессивность"] }}</td>
                <td>{{ methods3["Застенчивость"] }}</td>
                <td>{{ methods3["Открытость"] }}</td>
                <td>{{ methods3["Экстраверсия–интроверсия"] }}</td>
                <td>{{ methods3["Эмоциональная лабильность"] }}</td>
                <td>{{ methods3["Маскулинизм–феминизм"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Методика 4</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Переживание психотравмирующих обстоятельств</th>
                <th>Неудовлетворенность собой</th>
                <th>«Загнанность в клетку»</th>
                <th>Тревога и депрессия</th>
                <th>Неадекватное избирательное эмоциональное реа­гирование</th>
                <th>Эмоционально-нравственная дезориентация</th>
                <th>Расширение сферы экономии эмоций</th>
                <th>Редукция профессиональных обязанностей</th>
                <th>Эмоциональный дефицит</th>
                <th>Эмоциональная отстраненность</th>
                <th>Личностная отстраненность (деперсонализация)</th>
                <th>Психосоматические и психовегетативные нарушения</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(methods4, i) in this.Export.methods4">
                <td>{{ methods4["Email"] }}</td>
                <td>{{ methods4["Переживание психотравмирующих обстоятельств"] }}</td>
                <td>{{ methods4["Неудовлетворенность собой"] }}</td>
                <td>{{ methods4["«Загнанность в клетку»"] }}</td>
                <td>{{ methods4["Тревога и депрессия"] }}</td>
                <td>{{ methods4["Неадекватное избирательное эмоциональное реа­гирование"] }}</td>
                <td>{{ methods4["Эмоционально-нравственная дезориентация"] }}</td>
                <td>{{ methods4["Расширение сферы экономии эмоций"] }}</td>
                <td>{{ methods4["Редукция профессиональных обязанностей"] }}</td>
                <td>{{ methods4["Эмоциональный дефицит"] }}</td>
                <td>{{ methods4["Эмоциональная отстраненность"] }}</td>
                <td>{{ methods4["Личностная отстраненность (деперсонализация)"] }}</td>
                <td>{{ methods4["Психосоматические и психовегетативные нарушения"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Методика 5</h3>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Сила процессов возбуждения</th>
                <th>Сила процессов торможения</th>
                <th>Подвижность нервных процессов</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(methods5, i) in this.Export.methods5">
                <td>{{ methods5["Email"] }}</td>
                <td>{{ methods5["Сила процессов возбуждения"] }}</td>
                <td>{{ methods5["Сила процессов торможения"] }}</td>
                <td>{{ methods5["Подвижность нервных процессов"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button class="btn" type="button" @click="exportToExcel">Excel download</button>
      </div>
    </div>
  </section>
</template>
<script>
import XLSX from 'xlsx'
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
      filters_q0_min: false,
      filters_q0_max: false,
      filteredData: false,

      filters_q1: ['Операциональная материальная установка', 'Операциональная ментальная установка', 'Целевая установка', 'Смысловая установка'],
      filters_q1_min:[],
      filters_q1_max:[],
      filters_q2: ['Тревожность', 'Враждебность', 'Депрессия', 'Рефлексия', 'Импульсивность', 'Ранимость', 'Нейротизм', 'Сердечность', 'Общительность', 'Настойчивость', 'Активность', 'Поиск возбуждения', 'Позитивные эмоции', 'Экстраверсия', 'Фантазия', 'Эстетика', 'Чувства', 'Действия', 'Идеи', 'Ценности', 'Открытость опыту', 'Доверие', 'Честность', 'Альтруизм', 'Уступчивость', 'Скромность', 'Чуткость', 'Сотрудничество', 'Компетентность', 'Организованность', 'Послушность долгу', 'Стремление к достижениям', 'Самодисциплина', 'Обдумывание поступков', 'Добросовестность'],
      filters_q2_min:[],
      filters_q2_max:[],
      filters_q3: ['Невротичность', 'Спонтанная агрессивность', 'Депрессивность', 'Раздражительность', 'Общительность', 'Уравновешенность', 'Реактивная агрессивность', 'Застенчивость', 'Открытость', 'Экстраверсия–интроверсия', 'Эмоциональная лабильность', 'Маскулинизм–феминизм'],
      filters_q3_min:[],
      filters_q3_max:[],
      filters_q4: ['Переживание психотравмирующих обстоятельств', 'Неудовлетворенность собой', '«Загнанность в клетку»', 'Тревога и депрессия', 'Неадекватное избирательное эмоциональное реа­гирование', 'Эмоционально-нравственная дезориентация', 'Расширение сферы экономии эмоций', 'Редукция профессиональных обязанностей', 'Эмоциональный дефицит', 'Эмоциональная отстраненность', 'Личностная отстраненность (деперсонализация)', 'Психосоматические и психовегетативные нарушения'],
      filters_q4_min:[],
      filters_q4_max:[],
      filters_q5: ['Сила процессов возбуждения', 'Сила процессов торможения', 'Подвижность нервных процессов'],
      filters_q5_min:[],
      filters_q5_max:[],

      Export: false
    }
  },
  methods: {
    filterAction(e){
      e.preventDefault();

      Request.get()
        .then(result => {
          let newData = result;

          this.filters_model.forEach((filter, i) => {
            if(filter === "age" ){
              if( this.filters_q0_min ){
                newData.forEach((user, l) => {
                  let userData = JSON.parse(user.q0);
                  if( Number(userData[i].a) < Number(this.filters_q0_min) ) delete newData[l];
                });
              }
              if( this.filters_q0_max ){
                newData.forEach((user, l) => {
                  let userData = JSON.parse(user.q0);
                  if( Number(userData[i].a) > Number(this.filters_q0_max) ) delete newData[l];
                });
              }
            } else if(filter !== "default"){
              newData.forEach((user, l) => {
                let userData = JSON.parse(user.q0);
                if( userData[i].a !== filter ) delete newData[l];
              });
            }
          });

          this.filters_q1.forEach((filter, i) => {
            if( this.filters_q1_min[i] ){
              newData.forEach((user, l) => {
                let userData = JSON.parse(user.q1);
                if( Number(userData[i].res) < Number(this.filters_q1_min[i]) ) delete newData[l];
              });
            }
            if( this.filters_q1_max[i] ){
              newData.forEach((user, l) => {
                let userData = JSON.parse(user.q1);
                if( Number(userData[i].res) > Number(this.filters_q1_max[i]) ) delete newData[l];
              });
            }
          });

          this.filteredData = newData;
          return this.filteredData;
        })
          .then(users => {
            let q0_arr = [], q1_arr = [], q2_arr = [], q3_arr = [], q4_arr = [], q5_arr = [];

            users.forEach(user => {
              let
                qIde = JSON.parse(user.qIde),
                email = qIde.email;

              let q0_obj = {}, q1_obj = {}, q2_obj = {}, q3_obj = {}, q4_obj = {}, q5_obj = {};

              let
                q0 = JSON.parse(user.q0),
                q1 = JSON.parse(user.q1),
                q2 = JSON.parse(user.q2),
                q3 = JSON.parse(user.q3),
                q4 = JSON.parse(user.q4),
                q5 = JSON.parse(user.q5);

              q0_obj['Email'] = email;
              q1_obj['Email'] = email;
              q2_obj['Email'] = email;
              q3_obj['Email'] = email;
              q4_obj['Email'] = email;
              q5_obj['Email'] = email;

              q0.forEach((item, i) => {
                q0_obj[this.filters[i].label] = item.a;
              });
              q1.forEach((item, i) => {
                q1_obj[item.title] = item.res;
              });
              q2.forEach((item, i) => {
                q2_obj[item.title] = item.res;
              });
              q3.forEach((item, i) => {
                q3_obj[item.title] = item.res;
              });
              q4.forEach((item, i) => {
                q4_obj[item.title] = item.res;
              });
              q5.forEach((item, i) => {
                q5_obj[item.title] = item.res;
              });

              q0_arr.push(q0_obj);
              q1_arr.push(q1_obj);
              q2_arr.push(q2_obj);
              q3_arr.push(q3_obj);
              q4_arr.push(q4_obj);
              q5_arr.push(q5_obj);

            })

            this.Export = {
              anketa: q0_arr,
              methods1: q1_arr,
              methods2: q2_arr,
              methods3: q3_arr,
              methods4: q4_arr,
              methods5: q5_arr
            }

          })
            .catch(err => console.error(err))

    },
    openFilter(e){
      e.preventDefault();
      e.target.parentNode.classList.toggle('active');
    },
    exportToExcel() {
      const anketaWS = XLSX.utils.json_to_sheet(this.Export.anketa),
            methods1WS = XLSX.utils.json_to_sheet(this.Export.methods1),
            methods2WS = XLSX.utils.json_to_sheet(this.Export.methods2),
            methods3WS = XLSX.utils.json_to_sheet(this.Export.methods3),
            methods4WS = XLSX.utils.json_to_sheet(this.Export.methods4),
            methods5WS = XLSX.utils.json_to_sheet(this.Export.methods5),
            wb = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(wb, anketaWS, 'Анкета')
      XLSX.utils.book_append_sheet(wb, methods1WS, 'Методика 1')
      XLSX.utils.book_append_sheet(wb, methods2WS, 'Методика 2')
      XLSX.utils.book_append_sheet(wb, methods3WS, 'Методика 3')
      XLSX.utils.book_append_sheet(wb, methods4WS, 'Методика 4')
      XLSX.utils.book_append_sheet(wb, methods5WS, 'Методика 5')

      XLSX.writeFile(wb, 'book.xlsx')
    }
  },
  beforeCreate(){
    if( this.$route.query.password !== '@ashahov2020@') this.$router.push('/');
  },
  mounted(){
    let html = '<thead><tr>';
    this.filters_q5.forEach(item => {
      html += `<th>${item}</th>`;
    })
    html += '</tr></thead>';
    console.log(html);
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
  max-width: 100%;
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

.result{
  padding-top: 50px;
}

.table {
  border-collapse: collapse;
  th, td{
    padding: 5px 5px;
    font-size: 12px;
    text-align: left;
  }
  thead{
    background: linear-gradient(200.23deg, #F5E2EE -18.96%, #D872E3 54.42%), linear-gradient(116.98deg, #F0D8FA -3.19%, #8F93EA 105.27%);
  }
  th{
    border: 1px solid #fff;
    font-weight: 700;
    color: #fff;
    font-size: 11px;
  }
  td{
    border: 1px solid #000;
    font-weight: 600;
  }
}
.table-wrap{
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: 30px;
}
</style>