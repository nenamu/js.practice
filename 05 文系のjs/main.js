'use strict';

{
  // console.log('Hello World');

  // const array = [1, 2, 'dog!', 1, 2, 'cat!'];
  // console.log(array[0]);
  // const animal = array[2];
  // console.log(animal);
  // array[3] = 'pig!';
  // array[4] += array[0];
  // console.log(array);
  // const array = [1, 2, 3, 'dah', '!!'];

  // for (let i = 0; i < 5; i++) {
  //   console.log(array[i]);
  //   array[i] = i;
  // }
  // console.log(array);
  // console.log(array.length);

  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  // }

  // const array = [1, 2, 3];
  // for (const el of array) {
  //   // console.log(el);
  //   el = 'Hello World';
  // }
  // console.log(array);

//   const array = [0, 1, 2, 3];
// array[array.length] = 'end';
// console.log(array); // → [0, 1, 2, 3, 'end']

//   const array = [0, 1, 2, 3];
// array[5] = 'end';
// console.log(array); // → [0, 1, 2, 3, 'end']
// console.log(array[4]); 

// let x;  // 初期値なしで変数宣言
// console.log(x);  // → undefined

// if (x == undefined) {
//   console.log('xが未定義だよ');
// }

// const array = [1, 2, 3];
// array.push(4);     // 末尾に追加 [1, 2, 3, 4]
// array.unshift(0);  // 先頭に追加 [0, 1, 2, 3, 4]
// array.pop();       // 末尾の要素を削除 [0, 1, 2, 3]
// array.shift();     // 先頭の要素を削除 [1, 2, 3]
// console.log(array);
// const tail = array.pop();
// console.log(tail);  // → 3
// let head = array.shift();
// console.log(head);  // → 1
// array.splice(1, 0, 'A');  // インデックス 1 に'A'を挿入 [1, 'A', 2, 3]
// array.splice(2, 1);       // インデックス 2 を削除 [1, 'A', 3]
// console.log(array);

// const array = ['a', 'b', 'c'];

// const index = array.indexOf('b'); // 戻り値：1
// if (index != -1) {
//   array.splice(index, 1);  // → ['a', 'c']
// }
// console.log(array);

// const array = [1, 2, 3];
// const newArray = array.map((el) => el + '号');
// console.log(newArray);  // → [1号, 2号, 3号]
// const newArray2 = [];
// for (const el of array) {
//   newArray2.push(el + '号');
// }
// console.log(newArray2);  // → [1号, 2号, 3号]

// const array = [1, 2, 3, 4, 5];
// const newArray = array.filter((el) => el > 3);
// console.log(newArray);  // → [4, 5]
// const newArray2 = [];
// for (const el of array) {
//   if (el > 3) {
//     newArray2.push(el);
//   }
// }
// console.log(newArray2);  // → [1号, 2号, 3号]
// const array = [1, 2, 3, 4, 5];
// const newArray = array.filter((el) => el > 3).map((el) => el + '号');
// console.log(newArray);  // → [4号, 5号]

// const ul = document.getElementById('list');
// const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];
// for (let i = 0; i < etoList.length; i += 1) {
  //   const li = document.createElement('li');
  //   li.textContent = etoList[i]; 
  //   ul.appendChild(li);
  // }
  // console.log(etoList);
  
  const ul = document.getElementById('list');
  const numList = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);
for (const num of evenList) {
  const li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}
}