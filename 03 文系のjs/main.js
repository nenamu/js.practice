'use strict';

{
  // const bmi = 27;
  // console.log(`あなたのBMIは${bmi}です`)
  // console.log('あなたのBMIは' + bmi + 'です');
  // if (bmi > 25) {
  //   console.log('肥満です');
  // }

  // const bmi = 20;
  // console.log(`あなたのBMIは${bmi}です`)
  // console.log('あなたのBMIは' + bmi + 'です');
  // if (bmi > 25) {
  //   console.log('肥満です');
  // }

  // const num1 = 15;
  // const num2 = 10;
  // if (num1 >= num2) {
  //   console.log('num1 は num2 以上の値です');
  // }

  // const message = 'Thank you';
  // if (message == 'Thank you') {
  //   console.log('Thank you, too');
  // }

  // const bmi = 20;
  // const msg = bmi > 25 ? '肥満です' : '肥満ではありません';
  // console.log(msg);

//   'use strict';

// // 入力ダイアログから値を指定する
const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.getElementById('message');
p_element.textContent = `あなたのBMIは${bmi}：`;

if (bmi > 25) {
  p_element.textContent += '肥満です';  // 25より大きいときに表示
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';  // 18.5より小さいときに表示
} else {
  p_element.textContent += '適正体重です';  // 25以下のときに表示
}

// const element = document.querySelector('p');
// console.log(element.textContent);  // → 1番目のp要素
// const element = document.getElementById('second');
// console.log(element.textContent);  // → 2番目のp要素

}