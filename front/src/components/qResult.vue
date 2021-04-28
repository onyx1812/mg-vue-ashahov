<template>
  <section class="result">
    <div class="container">
      <h2>Благодарим Вас за участие в исследовании!</h2>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'qResult',
  data(){
    return {
      qIde: false,

      q0: false,

      q1: false, q1_r1_result: 0, q1_r2_result: 0, q1_r3_result: 0, q1_r4_result: 0,
      q1_r1_arr: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37], // 13, 21 should be false
      q1_r2_arr: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38],
      q1_r3_arr: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39], //19, 27, 35 should be false
      q1_r4_arr: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],

      q2: false, q2_n1_result: 0, q2_n2_result: 0, q2_n3_result: 0, q2_n4_result: 0, q2_n5_result: 0, q2_n6_result: 0, q2_n7_result: 0, q2_e1_result: 0, q2_e2_result: 0, q2_e3_result: 0, q2_e4_result: 0, q2_e5_result: 0, q2_e6_result: 0, q2_e7_result: 0, q2_o1_result: 0, q2_o2_result: 0, q2_o3_result: 0, q2_o4_result: 0, q2_o5_result: 0, q2_o6_result: 0, q2_o7_result: 0, q2_a1_result: 0, q2_a2_result: 0, q2_a3_result: 0, q2_a4_result: 0, q2_a5_result: 0, q2_a6_result: 0, q2_a7_result: 0, q2_c1_result: 0, q2_c2_result: 0, q2_c3_result: 0, q2_c4_result: 0, q2_c5_result: 0, q2_c6_result: 0, q2_c7_result: 0,
      q2_arr_plus: { 'абсолютно не согласен': 0 , 'не согласен': 1 , 'нейтрально': 2 , 'согласен': 3 , 'абсолютно согласен': 4 },
      q2_arr_minus: { 'абсолютно не согласен': 4, 'не согласен': 3, 'нейтрально': 2, 'согласен': 1, 'абсолютно согласен': 0 },

      q2_n1_arr: [ {id:1,  o:'-'}, {id:31, o:'+'}, {id:61, o:'-'}, {id:91,  o:'+'}, {id:121, o:'-'}, {id:151, o:'+'}, {id:181, o:'-'}, {id:211, o:'+'}],
      q2_n2_arr: [ {id:6,  o:'+'}, {id:36, o:'-'}, {id:66, o:'+'}, {id:96,  o:'-'}, {id:126, o:'+'}, {id:156, o:'-'}, {id:186, o:'+'}, {id:216, o:'+'}],
      q2_n3_arr: [ {id:11, o:'-'}, {id:41, o:'+'}, {id:71, o:'-'}, {id:101, o:'+'}, {id:131, o:'+'}, {id:161, o:'+'}, {id:191, o:'+'}, {id:221, o:'+'}],
      q2_n4_arr: [ {id:16, o:'+'}, {id:46, o:'-'}, {id:76, o:'+'}, {id:106, o:'-'}, {id:136, o:'+'}, {id:166, o:'-'}, {id:196, o:'+'}, {id:226, o:'+'}],
      q2_n5_arr: [ {id:21, o:'+'}, {id:51, o:'+'}, {id:81, o:'-'}, {id:111, o:'+'}, {id:141, o:'-'}, {id:171, o:'+'}, {id:201, o:'+'}, {id:231, o:'-'}],
      q2_n6_arr: [ {id:26, o:'+'}, {id:56, o:'-'}, {id:86, o:'+'}, {id:116, o:'-'}, {id:146, o:'+'}, {id:176, o:'-'}, {id:206, o:'-'}, {id:236, o:'-'}],

      q2_e1_arr: [ {id:2,  o:'+'}, {id:32, o:'-'}, {id:62, o:'+'}, {id:92,  o:'-'}, {id:122, o:'+'}, {id:152, o:'+'}, {id:182, o:'+'}, {id:212, o:'+'}],
      q2_e2_arr: [ {id:7,  o:'-'}, {id:37, o:'+'}, {id:67, o:'-'}, {id:97,  o:'+'}, {id:127, o:'-'}, {id:157, o:'+'}, {id:187, o:'-'}, {id:217, o:'+'}],
      q2_e3_arr: [ {id:12, o:'+'}, {id:42, o:'-'}, {id:72, o:'+'}, {id:102, o:'-'}, {id:132, o:'+'}, {id:162, o:'-'}, {id:192, o:'+'}, {id:222, o:'-'}],
      q2_e4_arr: [ {id:17, o:'-'}, {id:47, o:'+'}, {id:77, o:'-'}, {id:107, o:'+'}, {id:137, o:'-'}, {id:167, o:'+'}, {id:197, o:'+'}, {id:227, o:'+'}],
      q2_e5_arr: [ {id:22, o:'+'}, {id:52, o:'-'}, {id:82, o:'+'}, {id:112, o:'-'}, {id:142, o:'+'}, {id:172, o:'+'}, {id:202, o:'+'}, {id:232, o:'+'}],
      q2_e6_arr: [ {id:27, o:'-'}, {id:57, o:'+'}, {id:87, o:'-'}, {id:117, o:'+'}, {id:147, o:'-'}, {id:177, o:'+'}, {id:207, o:'-'}, {id:237, o:'+'}],

      q2_o1_arr: [ {id:3,  o:'+'}, {id:33, o:'-'}, {id:63, o:'+'}, {id:93,  o:'-'}, {id:123, o:'+'}, {id:153, o:'-'}, {id:183, o:'-'}, {id:213, o:'-'}],
      q2_o2_arr: [ {id:8,  o:'-'}, {id:38, o:'+'}, {id:68, o:'-'}, {id:98,  o:'+'}, {id:128, o:'-'}, {id:158, o:'+'}, {id:188, o:'+'}, {id:218, o:'+'}],
      q2_o3_arr: [ {id:13, o:'+'}, {id:43, o:'-'}, {id:73, o:'+'}, {id:103, o:'-'}, {id:133, o:'+'}, {id:163, o:'-'}, {id:193, o:'+'}, {id:223, o:'+'}],
      q2_o4_arr: [ {id:18, o:'-'}, {id:48, o:'+'}, {id:78, o:'-'}, {id:108, o:'+'}, {id:138, o:'-'}, {id:168, o:'+'}, {id:198, o:'-'}, {id:228, o:'-'}],
      q2_o5_arr: [ {id:23, o:'+'}, {id:53, o:'-'}, {id:83, o:'+'}, {id:113, o:'-'}, {id:143, o:'+'}, {id:173, o:'-'}, {id:203, o:'+'}, {id:233, o:'+'}],
      q2_o6_arr: [ {id:28, o:'-'}, {id:58, o:'+'}, {id:88, o:'-'}, {id:118, o:'+'}, {id:148, o:'-'}, {id:178, o:'+'}, {id:208, o:'-'}, {id:238, o:'-'}],

      q2_a1_arr: [ {id:4,  o:'-'}, {id:34, o:'+'}, {id:64, o:'-'}, {id:94,  o:'+'}, {id:124, o:'-'}, {id:154, o:'+'}, {id:184, o:'+'}, {id:214, o:'+'}],
      q2_a2_arr: [ {id:9,  o:'+'}, {id:39, o:'-'}, {id:69, o:'+'}, {id:99,  o:'-'}, {id:129, o:'+'}, {id:159, o:'-'}, {id:189, o:'-'}, {id:219, o:'-'}],
      q2_a3_arr: [ {id:14, o:'-'}, {id:44, o:'+'}, {id:74, o:'-'}, {id:104, o:'+'}, {id:134, o:'-'}, {id:164, o:'+'}, {id:194, o:'+'}, {id:224, o:'+'}],
      q2_a4_arr: [ {id:19, o:'+'}, {id:49, o:'-'}, {id:79, o:'+'}, {id:109, o:'-'}, {id:139, o:'+'}, {id:169, o:'-'}, {id:199, o:'-'}, {id:229, o:'-'}],
      q2_a5_arr: [ {id:24, o:'-'}, {id:54, o:'+'}, {id:84, o:'-'}, {id:114, o:'+'}, {id:144, o:'-'}, {id:174, o:'-'}, {id:204, o:'+'}, {id:234, o:'-'}],
      q2_a6_arr: [ {id:29, o:'+'}, {id:59, o:'-'}, {id:89, o:'+'}, {id:119, o:'+'}, {id:149, o:'+'}, {id:179, o:'+'}, {id:209, o:'+'}, {id:239, o:'+'}],

      q2_c1_arr: [ {id:5,  o:'+'}, {id:35, o:'-'}, {id:65, o:'+'}, {id:95,  o:'-'}, {id:125, o:'+'}, {id:155, o:'-'}, {id:185, o:'+'}, {id:215, o:'+'}],
      q2_c2_arr: [ {id:10, o:'-'}, {id:40, o:'+'}, {id:70, o:'-'}, {id:100, o:'+'}, {id:130, o:'-'}, {id:160, o:'+'}, {id:190, o:'-'}, {id:220, o:'-'}],
      q2_c3_arr: [ {id:15, o:'+'}, {id:45, o:'-'}, {id:75, o:'+'}, {id:105, o:'-'}, {id:135, o:'+'}, {id:165, o:'+'}, {id:195, o:'+'}, {id:225, o:'+'}],
      q2_c4_arr: [ {id:20, o:'-'}, {id:50, o:'+'}, {id:80, o:'-'}, {id:110, o:'+'}, {id:140, o:'-'}, {id:170, o:'+'}, {id:200, o:'+'}, {id:230, o:'+'}],
      q2_c5_arr: [ {id:25, o:'+'}, {id:55, o:'-'}, {id:85, o:'+'}, {id:115, o:'-'}, {id:145, o:'+'}, {id:175, o:'-'}, {id:205, o:'-'}, {id:235, o:'+'}],
      q2_c6_arr: [ {id:30, o:'-'}, {id:60, o:'+'}, {id:90, o:'-'}, {id:120, o:'+'}, {id:150, o:'-'}, {id:180, o:'+'}, {id:210, o:'+'}, {id:240, o:'+'}],



      q3: false, q3_r1_result: 0, q3_r2_result: 0, q3_r3_result: 0, q3_r4_result: 0, q3_r5_result: 0, q3_r6_result: 0, q3_r7_result: 0, q3_r8_result: 0, q3_r9_result: 0, q3_r10_result: 0, q3_r11_result: 0, q3_r12_result: 0,
      q3_r1_arr_yes: [4,5,12,15,22,26,31,41,42,57,66,72,85,86, 89,105],
      q3_r1_arr_no: [49],
      q3_r2_arr_yes: [32, 35, 45, 50,64,73,77, 93,97,98, 103, 112, 114],
      q3_r2_arr_no: [99],
      q3_r3_arr_yes: [16,24,27,28,30,40,48,56,61,74,84,87,88, 100],
      q3_r4_arr_yes: [6,10,58,69,76,80,82,102,104,107, 110],
      q3_r5_arr_yes: [2, 19,46,52,55,94,106],
      q3_r5_arr_no: [3,8,23,53,67,71,79,113],
      q3_r6_arr_yes: [14,21,29,37,38,59,91,95,108,111],
      q3_r7_arr_yes: [13,17,18,36,39,43,65,75,90, 98],
      q3_r8_arr_yes: [9, 11,20,47,60,70,81,83,109],
      q3_r8_arr_no: [33],
      q3_r9_arr_yes: [7,25,34,44,51,54,62,63,68,78,92,96, 101],
      q3_r10_arr_yes: [2,29,46,51,55,76,93,95,106,110],
      q3_r10_arr_no: [20,87],
      q3_r11_arr_yes: [24, 25, 40, 48, 80, 83, 84, 5,87,88, 102, 112, 113],
      q3_r11_arr_no: [59],
      q3_r12_arr_yes: [18,29,33,50,52,58,59, 65,91, 104],
      q3_r12_arr_no: [16,20,31,47, 84],

      q4: false, q4_r1_result: 0, q4_r2_result: 0, q4_r3_result: 0, q4_r4_result: 0, q4_r5_result: 0, q4_r6_result: 0, q4_r7_result: 0, q4_r8_result: 0, q4_r9_result: 0, q4_r10_result: 0, q4_r11_result: 0, q4_r12_result: 0,
      q4_r1_arr: [
        {a: 'Да', id: 1, b: 2 },
        {a: 'Да', id: 13, b: 3 },
        {a: 'Да', id: 25, b: 2 },
        {a: 'Нет', id: 37, b: 3 },
        {a: 'Да', id: 49, b: 10 },
        {a: 'Да', id: 61, b: 5 },
        {a: 'Нет', id: 73, b: 5 }
      ],
      q4_r2_arr: [
        {a: 'Нет', id: 2, b: 3 },
        {a: 'Да', id: 14, b: 2 },
        {a: 'Да', id: 26, b: 2 },
        {a: 'Нет', id: 38, b: 10 },
        {a: 'Нет', id: 50, b: 5 },
        {a: 'Да', id: 62, b: 5 },
        {a: 'Да', id: 74, b: 3 }
      ],
      q4_r3_arr: [
        {a: 'Да', id: 3, b: 10 },
        {a: 'Да', id: 15, b: 5 },
        {a: 'Да', id: 27, b: 2 },
        {a: 'Да', id: 39, b: 2 },
        {a: 'Да', id: 51, b: 5 },
        {a: 'Да', id: 63, b: 1 },
        {a: 'Нет', id: 75, b: 5 }
      ],
      q4_r4_arr: [
        {a: 'Да', id: 4, b: 2 },
        {a: 'Да', id: 16, b: 3 },
        {a: 'Да', id: 28, b: 5 },
        {a: 'Да', id: 40, b: 5 },
        {a: 'Да', id: 52, b: 10 },
        {a: 'Да', id: 64, b: 2 },
        {a: 'Да', id: 76, b: 3 }
      ],
      q4_r5_arr: [
        {a: 'Да', id: 5, b: 5 },
        {a: 'Нет', id: 17, b: 3 },
        {a: 'Да', id: 29, b: 10 },
        {a: 'Да', id: 41, b: 2 },
        {a: 'Да', id: 53, b: 2 },
        {a: 'Да', id: 65, b: 3 },
        {a: 'Да', id: 77, b: 5 }
      ],
      q4_r6_arr: [
        {a: 'Да', id: 6, b: 10 },
        {a: 'Нет', id: 18, b: 3 },
        {a: 'Да', id: 30, b: 3 },
        {a: 'Да', id: 42, b: 5 },
        {a: 'Да', id: 54, b: 2 },
        {a: 'Да', id: 66, b: 2 },
        {a: 'Нет', id: 78, b: 5 }
      ],
      q4_r7_arr: [
        {a: 'Да', id: 7, b: 2 },
        {a: 'Да', id: 19, b: 10 },
        {a: 'Нет', id: 31, b: 2 },
        {a: 'Да', id: 43, b: 5 },
        {a: 'Да', id: 55, b: 3 },
        {a: 'Да', id: 67, b: 3 },
        {a: 'Нет', id: 79, b: 5 }
      ],
      q4_r8_arr: [
        {a: 'Да', id: 8, b: 5 },
        {a: 'Да', id: 20, b: 5 },
        {a: 'Да', id: 32, b: 2 },
        {a: 'Нет', id: 44, b: 2 },
        {a: 'Да', id: 56, b: 3 },
        {a: 'Да', id: 68, b: 3 },
        {a: 'Да', id: 80, b: 10 }
      ],
      q4_r9_arr: [
        {a: 'Да', id: 9, b: 3 },
        {a: 'Да', id: 21, b: 2 },
        {a: 'Да', id: 33, b: 5 },
        {a: 'Нет', id: 45, b: 5 },
        {a: 'Да', id: 57, b: 3 },
        {a: 'Нет', id: 69, b: 10 },
        {a: 'Да', id: 81, b: 2 }
      ],
      q4_r10_arr: [
        {a: 'Да', id: 10, b: 2 },
        {a: 'Да', id: 22, b: 3 },
        {a: 'Нет', id: 34, b: 2 },
        {a: 'Да', id: 46, b: 3 },
        {a: 'Да', id: 58, b: 5 },
        {a: 'Да', id: 70, b: 5 },
        {a: 'Да', id: 82, b: 10 }
      ],
      q4_r11_arr: [
        {a: 'Да', id: 11, b: 5 },
        {a: 'Да', id: 23, b: 3 },
        {a: 'Да', id: 35, b: 3 },
        {a: 'Да', id: 47, b: 5 },
        {a: 'Да', id: 59, b: 5 },
        {a: 'Да', id: 72, b: 2 },
        {a: 'Да', id: 83, b: 10 }
      ],
      q4_r12_arr: [
        {a: 'Да', id: 12, b: 3 },
        {a: 'Да', id: 24, b: 2 },
        {a: 'Да', id: 36, b: 5 },
        {a: 'Да', id: 48, b: 3 },
        {a: 'Да', id: 60, b: 2 },
        {a: 'Да', id: 72, b: 10 },
        {a: 'Да', id: 84, b: 5 }
      ],

      q5: false, q5_r1_result: 0, q5_r2_result: 0, q5_r3_result: 0,
      q5_r1_arr_yes: [3, 4, 7, 13, 15, 17, 19, 21, 23, 24, 32, 39, 45, 56, 58, 60, 61, 66, 72, 73, 78, 81, 82, 83, 94, 97, 98, 102, 105, 106, 113, 114, 117, 121, 122, 124, 130, 132, 133, 134],
      q5_r1_arr_no: [47, 51, 107, 123],
      q5_r2_arr_yes: [2, 5, 8, 10, 12, 16, 27, 30, 35, 37, 38, 42, 48, 50, 52, 53, 59, 62, 65, 67, 69, 70, 75, 77, 84, 87, 89,90, 96, 99, 103, 108, 109, 110, 112, 118, 120, 125, 126, 129],
      q5_r2_arr_no: [18, 34, 36, 128],
      q5_r3_arr_yes: [1, 6, 9, 11, 14, 20, 22, 26, 28, 31, 33, 40, 41, 43, 44, 46, 49, 54, 55, 64, 68, 71, 74, 76, 79, 80, 85, 86, 88, 91, 92, 93, 95, 100, 101, 104, 111, 115, 119, 127, 131],
      q5_r3_arr_no: [25, 57, 63, 116],
    }
  },
  mounted() {
    if(localStorage.qIde) this.qIde = JSON.parse(localStorage.qIde);
    if(localStorage.q0) this.q0 = JSON.parse(localStorage.q0);
    if(localStorage.q1) this.q1 = JSON.parse(localStorage.q1);
    if(localStorage.q2) this.q2 = JSON.parse(localStorage.q2);
    if(localStorage.q3) this.q3 = JSON.parse(localStorage.q3);
    if(localStorage.q4) this.q4 = JSON.parse(localStorage.q4);
    if(localStorage.q5) this.q5 = JSON.parse(localStorage.q5);
/*------------------------
  START Q1 RESULTS
------------------------*/
      this.q1_r1_arr.forEach(key => {
        let k = --key;
        if(this.q1[k].id === 13 || this.q1[k].id === 21){
          if(this.q1[k].a === 'Нет') this.q1_r1_result = ++this.q1_r1_result;
        } else {
          if(this.q1[k].a === 'Да') this.q1_r1_result = ++this.q1_r1_result;
        }
      });

      this.q1_r2_arr.forEach(key => {
        let k = --key;
        if(this.q1[k].a === 'Да') this.q1_r2_result = ++this.q1_r2_result;
      });

      this.q1_r3_arr.forEach(key => {
        let k = --key;
        if(this.q1[k].id === 19 || this.q1[k].id === 27 || this.q1[k].id === 35){
          if(this.q1[k].a === 'Нет') this.q1_r3_result = ++this.q1_r3_result;
        } else {
          if(this.q1[k].a === 'Да') this.q1_r3_result = ++this.q1_r3_result;
        }
      });

      this.q1_r4_arr.forEach(key => {
        let k = --key;
        if(this.q1[k].a === 'Да') this.q1_r4_result = ++this.q1_r4_result;
      });
/*------------------------
  END Q1 RESULTS
------------------------*/
/*------------------------
  START Q2 RESULTS
------------------------*/
      this.q2_n1_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n1_result = this.q2_n1_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n1_result = this.q2_n1_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n2_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n2_result = this.q2_n2_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n2_result = this.q2_n2_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n3_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n3_result = this.q2_n3_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n3_result = this.q2_n3_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n4_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n4_result = this.q2_n4_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n4_result = this.q2_n4_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n5_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n5_result = this.q2_n5_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n5_result = this.q2_n5_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n6_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_n6_result = this.q2_n6_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_n6_result = this.q2_n6_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_n7_result = this.q2_n1_result + this.q2_n2_result + this.q2_n3_result + this.q2_n4_result + this.q2_n5_result + this.q2_n6_result;

      this.q2_e1_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e1_result = this.q2_e1_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e1_result = this.q2_e1_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e2_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e2_result = this.q2_e2_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e2_result = this.q2_e2_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e3_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e3_result = this.q2_e3_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e3_result = this.q2_e3_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e4_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e4_result = this.q2_e4_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e4_result = this.q2_e4_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e5_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e5_result = this.q2_e5_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e5_result = this.q2_e5_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e6_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_e6_result = this.q2_e6_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_e6_result = this.q2_e6_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_e7_result = this.q2_e1_result + this.q2_e2_result + this.q2_e3_result + this.q2_e4_result + this.q2_e5_result + this.q2_e6_result;

      this.q2_o1_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o1_result = this.q2_o1_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o1_result = this.q2_o1_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o2_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o2_result = this.q2_o2_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o2_result = this.q2_o2_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o3_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o3_result = this.q2_o3_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o3_result = this.q2_o3_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o4_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o4_result = this.q2_o4_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o4_result = this.q2_o4_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o5_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o5_result = this.q2_o5_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o5_result = this.q2_o5_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o6_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_o6_result = this.q2_o6_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_o6_result = this.q2_o6_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_o7_result = this.q2_o1_result + this.q2_o2_result + this.q2_o3_result + this.q2_o4_result + this.q2_o5_result + this.q2_o6_result;

      this.q2_a1_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a1_result = this.q2_a1_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a1_result = this.q2_a1_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a2_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a2_result = this.q2_a2_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a2_result = this.q2_a2_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a3_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a3_result = this.q2_a3_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a3_result = this.q2_a3_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a4_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a4_result = this.q2_a4_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a4_result = this.q2_a4_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a5_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a5_result = this.q2_a5_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a5_result = this.q2_a5_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a6_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_a6_result = this.q2_a6_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_a6_result = this.q2_a6_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_a7_result = this.q2_a1_result + this.q2_a2_result + this.q2_a3_result + this.q2_a4_result + this.q2_a5_result + this.q2_a6_result;

      this.q2_c1_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c1_result = this.q2_c1_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c1_result = this.q2_c1_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c2_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c2_result = this.q2_c2_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c2_result = this.q2_c2_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c3_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c3_result = this.q2_c3_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c3_result = this.q2_c3_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c4_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c4_result = this.q2_c4_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c4_result = this.q2_c4_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c5_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c5_result = this.q2_c5_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c5_result = this.q2_c5_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c6_arr.forEach(item => {
        let k = --item.id;
        if(item.o === '+') this.q2_c6_result = this.q2_c6_result + this.q2_arr_plus[this.q2[k].a];
        if(item.o === '-') this.q2_c6_result = this.q2_c6_result + this.q2_arr_minus[this.q2[k].a];
      });
      this.q2_c7_result = this.q2_c1_result + this.q2_c2_result + this.q2_c3_result + this.q2_c4_result + this.q2_c5_result + this.q2_c6_result;

/*------------------------
  END Q2 RESULTS
------------------------*/
/*------------------------
  START Q3 RESULTS
------------------------*/
      this.q3_r1_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r1_result = ++this.q3_r1_result;
      });
      this.q3_r1_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r1_result = ++this.q3_r1_result;
      });
      this.q3_r2_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r2_result = ++this.q3_r2_result;
      });
      this.q3_r2_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r2_result = ++this.q3_r2_result;
      });
      this.q3_r3_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r3_result = ++this.q3_r3_result;
      });
      this.q3_r4_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r4_result = ++this.q3_r4_result;
      });
      this.q3_r5_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r5_result = ++this.q3_r5_result;
      });
      this.q3_r5_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r5_result = ++this.q3_r5_result;
      });
      this.q3_r6_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r6_result = ++this.q3_r6_result;
      });
      this.q3_r7_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r7_result = ++this.q3_r7_result;
      });
      this.q3_r8_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r8_result = ++this.q3_r8_result;
      });
      this.q3_r8_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r8_result = ++this.q3_r8_result;
      });
      this.q3_r9_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r9_result = ++this.q3_r9_result;
      });
      this.q3_r10_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r10_result = ++this.q3_r10_result;
      });
      this.q3_r10_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r10_result = ++this.q3_r10_result;
      });
      this.q3_r11_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r11_result = ++this.q3_r11_result;
      });
      this.q3_r11_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r11_result = ++this.q3_r11_result;
      });
      this.q3_r12_arr_yes.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Да') this.q3_r12_result = ++this.q3_r12_result;
      });
      this.q3_r12_arr_no.forEach(key => {
        let k = --key;
        if(this.q3[k].a === 'Нет') this.q3_r12_result = ++this.q3_r12_result;
      });
/*------------------------
  END Q3 RESULTS
------------------------*/
/*------------------------
  START Q4 RESULTS
------------------------*/
      this.q4_r1_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r1_result = this.q4_r1_result + item.b;
        }
      });
      this.q4_r2_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r2_result = this.q4_r2_result + item.b;
        }
      });
      this.q4_r3_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r3_result = this.q4_r3_result + item.b;
        }
      });
      this.q4_r4_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r4_result = this.q4_r4_result + item.b;
        }
      });
      this.q4_r5_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r5_result = this.q4_r5_result + item.b;
        }
      });
      this.q4_r6_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r6_result = this.q4_r6_result + item.b;
        }
      });
      this.q4_r7_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r7_result = this.q4_r7_result + item.b;
        }
      });
      this.q4_r8_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r8_result = this.q4_r8_result + item.b;
        }
      });
      this.q4_r9_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r9_result = this.q4_r9_result + item.b;
        }
      });
      this.q4_r10_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r10_result = this.q4_r10_result + item.b;
        }
      });
      this.q4_r11_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r11_result = this.q4_r11_result + item.b;
        }
      });
      this.q4_r12_arr.forEach(item => {
        let key = --item.id;
        if(this.q4[key].a == item.a){
          this.q4_r12_result = this.q4_r12_result + item.b;
        }
      });
/*------------------------
  END Q4 RESULTS
------------------------*/
/*------------------------
  START Q5 RESULTS
------------------------*/
      this.q5_r1_arr_yes.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Да') this.q5_r1_result = this.q5_r1_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r1_result = this.q5_r1_result + 1;
      });
      this.q5_r1_arr_no.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Нет') this.q5_r1_result = this.q5_r1_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r1_result = this.q5_r1_result + 1;
      });

      this.q5_r2_arr_yes.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Да') this.q5_r2_result = this.q5_r2_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r2_result = this.q5_r2_result + 1;
      });
      this.q5_r2_arr_no.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Нет') this.q5_r2_result = this.q5_r2_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r2_result = this.q5_r2_result + 1;
      });

      this.q5_r3_arr_yes.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Да') this.q5_r3_result = this.q5_r3_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r3_result = this.q5_r3_result + 1;
      });
      this.q5_r3_arr_no.forEach(key => {
        let k = --key;
        if(this.q5[k].a === 'Нет') this.q5_r3_result = this.q5_r3_result + 2;
        if(this.q5[k].a === 'Не знаю') this.q5_r3_result = this.q5_r3_result + 1;
      });
/*------------------------
  END Q5 RESULTS
------------------------*/
/*------------------------
  QUIZ Results
------------------------*/
      let q1Results = {};
      let q1Inversions = [13, 21, 19, 27, 35];
      this.q1.forEach(answer => {
        if( q1Inversions.includes(answer.id) ){
          if(answer.a == 'Да') q1Results[answer.id] = 0;
          if(answer.a == 'Нет') q1Results[answer.id] = 1;
        } else {
          if(answer.a == 'Да') q1Results[answer.id] = 1;
          if(answer.a == 'Нет') q1Results[answer.id] = 0;
        }
      });

      let q2Results = {};
      let q2Inversions = [1, 11, 36, 46, 56, 61, 71, 81, 96, 106, 116, 121, 141, 156, 166, 176, 181, 206, 231, 236];
      this.q2.forEach(answer => {
        if( q2Inversions.includes(answer.id) ){
          if(answer.a == 'абсолютно не согласен') q2Results[answer.id] = 4;
          if(answer.a == 'не согласен') q2Results[answer.id] = 3;
          if(answer.a == 'нейтрально') q2Results[answer.id] = 2;
          if(answer.a == 'согласен') q2Results[answer.id] = 1;
          if(answer.a == 'абсолютно согласен') q2Results[answer.id] = 0;
        } else {
          if(answer.a == 'абсолютно не согласен') q2Results[answer.id] = 0;
          if(answer.a == 'не согласен') q2Results[answer.id] = 1;
          if(answer.a == 'нейтрально') q2Results[answer.id] = 2;
          if(answer.a == 'согласен') q2Results[answer.id] = 3;
          if(answer.a == 'абсолютно согласен') q2Results[answer.id] = 4;
        }
      });

      let q3Results = {};
      let q3Inversions = [49, 99, 3, 8, 23, 53, 67, 71, 79, 113, 33, 20, 87, 59, 16, 20, 31, 47, 84];
      this.q3.forEach(answer => {
        if( q3Inversions.includes(answer.id) ){
          if(answer.a == 'Да') q3Results[answer.id] = 0;
          if(answer.a == 'Нет') q3Results[answer.id] = 1;
        } else {
          if(answer.a == 'Да') q3Results[answer.id] = 1;
          if(answer.a == 'Нет') q3Results[answer.id] = 0;
        }
      });

      let q4Results = {};
      this.q4.forEach(answer => {
        if(answer.id == 1 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 13 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 25 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 37 && answer.a == 'Нет'){ q4Results[answer.id] = 3; }
        else if(answer.id == 49 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 61 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 73 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 2 && answer.a == 'Нет' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 14 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 26 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 38 && answer.a == 'Нет'){ q4Results[answer.id] = 10; }
        else if(answer.id == 50 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 62 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 74 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 3 && answer.a == 'Да'  ){ q4Results[answer.id] = 10; }
        else if(answer.id == 15 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 27 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 39 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 51 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 63 && answer.a == 'Да' ){ q4Results[answer.id] = 1; }
        else if(answer.id == 75 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 4 && answer.a == 'Да'  ){ q4Results[answer.id] = 2; }
        else if(answer.id == 16 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 28 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 40 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 52 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 64 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 76 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 5 && answer.a == 'Да'  ){ q4Results[answer.id] = 5; }
        else if(answer.id == 17 && answer.a == 'Нет'){ q4Results[answer.id] = 3; }
        else if(answer.id == 29 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 41 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 53 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 65 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 77 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 6 && answer.a == 'Да'  ){ q4Results[answer.id] = 10; }
        else if(answer.id == 18 && answer.a == 'Нет'){ q4Results[answer.id] = 3; }
        else if(answer.id == 30 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 42 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 54 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 66 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 78 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 7 && answer.a == 'Да'  ){ q4Results[answer.id] = 2; }
        else if(answer.id == 19 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 31 && answer.a == 'Нет'){ q4Results[answer.id] = 2; }
        else if(answer.id == 43 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 55 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 67 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 79 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 8 && answer.a == 'Да'  ){ q4Results[answer.id] = 5; }
        else if(answer.id == 20 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 32 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 44 && answer.a == 'Нет'){ q4Results[answer.id] = 2; }
        else if(answer.id == 56 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 68 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 80 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 9 && answer.a == 'Да'  ){ q4Results[answer.id] = 3; }
        else if(answer.id == 21 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 33 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 45 && answer.a == 'Нет'){ q4Results[answer.id] = 5; }
        else if(answer.id == 57 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 69 && answer.a == 'Нет'){ q4Results[answer.id] = 10; }
        else if(answer.id == 81 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 10 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 22 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 34 && answer.a == 'Нет'){ q4Results[answer.id] = 2; }
        else if(answer.id == 46 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 58 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 70 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 82 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 11 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 23 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 35 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 47 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 59 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 72 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 83 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 12 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 24 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 36 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else if(answer.id == 48 && answer.a == 'Да' ){ q4Results[answer.id] = 3; }
        else if(answer.id == 60 && answer.a == 'Да' ){ q4Results[answer.id] = 2; }
        else if(answer.id == 72 && answer.a == 'Да' ){ q4Results[answer.id] = 10; }
        else if(answer.id == 84 && answer.a == 'Да' ){ q4Results[answer.id] = 5; }
        else{ q4Results[answer.id] = 0; }
      });

      let q5Results = {};
      let q5Inversions = [47, 51, 107, 123, 18, 34, 36, 128, 25, 57, 63, 116];
      this.q5.forEach(answer => {
        if( q5Inversions.includes(answer.id) ){
          if(answer.a == 'Да') q5Results[answer.id] = 0;
          if(answer.a == 'Нет') q5Results[answer.id] = 2;
          if(answer.a == 'Не знаю') q5Results[answer.id] = 1;
        } else {
          if(answer.a == 'Да') q5Results[answer.id] = 2;
          if(answer.a == 'Нет') q5Results[answer.id] = 0;
          if(answer.a == 'Не знаю') q5Results[answer.id] = 1;
        }
      });
/*-----------------------
  END Quiz Results
------------------------*/


    const data = {
      qIde: this.qIde,
      q0: this.q0,
      q1: [
        {
          title: 'Операциональная материальная установка',
          res: this.q1_r1_result
        },
        {
          title: 'Операциональная ментальная установка',
          res: this.q1_r2_result
        },
        {
          title: 'Целевая установка',
          res: this.q1_r3_result
        },
        {
          title: 'Смысловая установка',
          res: this.q1_r4_result
        }
      ],
      q2: [
        {
          title: 'Тревожность',
          res: this.q2_n1_result
        },
        {
          title: 'Враждебность',
          res: this.q2_n2_result
        },
        {
          title: 'Депрессия',
          res: this.q2_n3_result
        },
        {
          title: 'Рефлексия',
          res: this.q2_n4_result
        },
        {
          title: 'Импульсивность',
          res: this.q2_n5_result
        },
        {
          title: 'Ранимость',
          res: this.q2_n6_result
        },
        {
          title: 'Нейротизм',
          res: this.q2_n7_result
        },
        {
          title: 'Сердечность',
          res: this.q2_e1_result
        },
        {
          title: 'Общительность',
          res: this.q2_e2_result
        },
        {
          title: 'Настойчивость',
          res: this.q2_e3_result
        },
        {
          title: 'Активность',
          res: this.q2_e4_result
        },
        {
          title: 'Поиск возбуждения',
          res: this.q2_e5_result
        },
        {
          title: 'Позитивные эмоции',
          res: this.q2_e6_result
        },
        {
          title: 'Экстраверсия',
          res: this.q2_e7_result
        },
        {
          title: 'Фантазия',
          res: this.q2_o1_result
        },
        {
          title: 'Эстетика',
          res: this.q2_o2_result
        },
        {
          title: 'Чувства',
          res: this.q2_o3_result
        },
        {
          title: 'Действия',
          res: this.q2_o4_result
        },
        {
          title: 'Идеи',
          res: this.q2_o5_result
        },
        {
          title: 'Ценности',
          res: this.q2_o6_result
        },
        {
          title: 'Открытость опыту',
          res: this.q2_o7_result
        },
        {
          title: 'Доверие',
          res: this.q2_a1_result
        },
        {
          title: 'Честность',
          res: this.q2_a2_result
        },
        {
          title: 'Альтруизм',
          res: this.q2_a3_result
        },
        {
          title: 'Уступчивость',
          res: this.q2_a4_result
        },
        {
          title: 'Скромность',
          res: this.q2_a5_result
        },
        {
          title: 'Чуткость',
          res: this.q2_a6_result
        },
        {
          title: 'Сотрудничество',
          res: this.q2_a7_result
        },
        {
          title: 'Компетентность',
          res: this.q2_c1_result
        },
        {
          title: 'Организованность',
          res: this.q2_c2_result
        },
        {
          title: 'Послушность долгу',
          res: this.q2_c3_result
        },
        {
          title: 'Стремление к достижениям',
          res: this.q2_c4_result
        },
        {
          title: 'Самодисциплина',
          res: this.q2_c5_result
        },
        {
          title: 'Обдумывание поступков',
          res: this.q2_c6_result
        },
        {
          title: 'Добросовестность',
          res: this.q2_c7_result
        },
      ],
      q3: [
        {
          title: 'Невротичность',
          res: this.q3_r1_result
        },
        {
          title: 'Спонтанная агрессивность',
          res: this.q3_r2_result
        },
        {
          title: 'Депрессивность',
          res: this.q3_r3_result
        },
        {
          title: 'Раздражительность',
          res: this.q3_r4_result
        },
        {
          title: 'Общительность',
          res: this.q3_r5_result
        },
        {
          title: 'Уравновешенность',
          res: this.q3_r6_result
        },
        {
          title: 'Реактивная агрессивность',
          res: this.q3_r7_result
        },
        {
          title: 'Застенчивость',
          res: this.q3_r8_result
        },
        {
          title: 'Открытость',
          res: this.q3_r9_result
        },
        {
          title: 'Экстраверсия–интроверсия',
          res: this.q3_r10_result
        },
        {
          title: 'Эмоциональная лабильность',
          res: this.q3_r11_result
        },
        {
          title: 'Маскулинизм–феминизм',
          res: this.q3_r12_result
        }
      ],
      q4: [
        {
          title: 'Переживание психотравмирующих обстоятельств',
          res: this.q4_r1_result
        },
        {
          title: 'Неудовлетворенность собой',
          res: this.q4_r2_result
        },
        {
          title: '«Загнанность в клетку»',
          res: this.q4_r3_result
        },
        {
          title: 'Тревога и депрессия',
          res: this.q4_r4_result
        },
        {
          title: 'Неадекватное избирательное эмоциональное реа­гирование',
          res: this.q4_r5_result
        },
        {
          title: 'Эмоционально-нравственная дезориентация',
          res: this.q4_r6_result
        },
        {
          title: 'Расширение сферы экономии эмоций',
          res: this.q4_r7_result
        },
        {
          title: 'Редукция профессиональных обязанностей',
          res: this.q4_r8_result
        },
        {
          title: 'Эмоциональный дефицит',
          res: this.q4_r9_result
        },
        {
          title: 'Эмоциональная отстраненность',
          res: this.q4_r10_result
        },
        {
          title: 'Личностная отстраненность (деперсонализация)',
          res: this.q4_r11_result
        },
        {
          title: 'Психосоматические и психовегетативные нарушения',
          res: this.q4_r12_result
        }
      ],
      q5: [
        {
          title: 'Сила процессов возбуждения',
          res: this.q5_r1_result
        },
        {
          title: 'Сила процессов торможения',
          res: this.q5_r2_result
        },
        {
          title: 'Подвижность нервных процессов',
          res: this.q5_r3_result
        }
      ],
      quiz: {
        q0: this.q0,
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
        q4: this.q4,
        q5: this.q5
      },
      quizResulst: {
        q0: this.q0,
        q1: q1Results,
        q2: q2Results,
        q3: q3Results,
        q4: q4Results,
        q5: q5Results
      }
    }

    let sent = JSON.parse(localStorage.sent);
    if( !sent ){
      Request.add(data)
        .then(res => {
          localStorage.sent = true;
          console.log('sent true');
          setTimeout(()=>{
            window.location.href = "https://course.ashahov.ru/tes_final";
          }, 1000);
        })
        .catch(err => {
          if(res.status === "succeeded") localStorage.sent = false;
        });
    } else{
      console.log('you already done.');
    }
  }
}
</script>
<style lang="scss" scoped>
.result{
  text-align: center;
  width: 100%;
}
h2{
  font-size: 30px;
  margin-bottom: 50px;
}
h3{
  margin-bottom: 15px;
}
.table {
  border-collapse: collapse;
  width: 100%;
  th, td{
    padding: 15px 5px;
  }
  thead{
    background: linear-gradient(200.23deg, #F5E2EE -18.96%, #D872E3 54.42%), linear-gradient(116.98deg, #F0D8FA -3.19%, #8F93EA 105.27%);
  }
  th{
    border: 1px solid #fff;
    font-weight: 700;
    color: #fff;
  }
  td{
    border: 1px solid #000;
    font-weight: 600;
    font-size: 18px;
  }
  &-last{
    margin-bottom: 60px;
  }
  &-1{
    th{
      width: calc(100% / 4);
    }
  }
  &-2{
    th{
      width: calc(100% / 7);
    }
    tr{
      &:first-child{
        td{
          font-size: 14px;
        }
      }
    }
  }
  &-3{
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    tbody{
      td{
        &:first-child{
          width: 100px;
        }
        &:nth-child(2){
          font-size: 14px;
          text-align: left;
        }
        &:last-child{
          width: 100px;
        }
      }
    }
  }
  &-4{
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    th, td{
      padding: 0;
      &:first-child{
        width: 200px;
      }
    }
    table{
      width: 100%;
      th, td{
        border: none;
        border-left: 1px solid #000;
        border-top: 1px solid #000;
        padding: 15px 5px;
        &:first-child{
          border-left: none;
          font-size: 14px;
          width: 80px;
        }
        &:nth-child(2){
          font-size: 14px;
          text-align: left;
        }
        &:last-child{
          width: 100px;
        }
      }
      tr{
        &:first-child{
          th, td{
            border-top: none;
          }
        }
      }
      th{
        border-color: #fff;
      }
    }
  }
  &-5{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    td{
      &:first-child{
        font-size: 14px;
      }
    }
    th, td{
      &:first-child{
        text-align: left;
      }
      &:last-child{
        width: 100px;
      }
    }
  }
}
</style>