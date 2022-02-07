'use strict';

{
//   console.log('Hello World!!');

//   const profile = { name: 'OJK', bloodType: 'A', height: 165, weight: 52 };
// console.log(`血液型: ${profile['bloodType']}`); 

// const obj = { a: 'A', b: 'B', c: 'C' };
// console.log(obj.a);     // → A （ドット記法）
// console.log(obj['a']);  // → A （ブラケット記法）
// const prop = 'a';
// console.log(obj.prop);  // → undefined
// console.log(obj[prop]); // → A
// console.log(obj[prop]);   // → A
// console.log(obj['prop']); // → undefined

// const obj = { a: 'A', b: 'B', c: 'C' };
// for (const el of obj) {
//   console.log(el);  // → エラー
// }

// const obj = { a: 'A', b: 'B', c: 'C' };
// for (const prop in obj) {
//   console.log(prop);       // → a → b → c
//   console.log(obj[prop]);  // → A → B → C
// }

// const profile = {
//   name: 'OJK',
//   bloodType: 'A',
//   servants: ['犬', '猿', '雉'],
//   style: { height: 165, weight: 52, waist: 76 },
// };
// console.log(profile);
// console.log(profile.servants[2]);  // → 雉
// console.log(profile.style.height); // → 165

// // profile.servantsは単なる配列
// for (const servant of profile.servants) {
//   console.log(`家来: ${servant}`); // → 家来: 犬 → 家来: 猿 → 家来: 雉
// }

// // profile.styleは単なるオブジェクト
// const myStyle = profile.style;
// for (const prop in myStyle) {
//   console.log(`${prop} is ${myStyle[prop]}`); // → height is 165 → 略
// }

// // Object.entriesを使ってfor-of文で書く
// for (const [prop, val] of Object.entries(profile)) {
//   if (prop == 'name' || prop == 'bloodType') {
//     console.log(`${prop}は${val}です`);
//   }
// }


const evList = [
  { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
  { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
  { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
  { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
  { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
  { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
  { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
  { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
];

  const table = document.querySelector('table');
  const tr = document.createElement('tr');
  const header = ['名前', 'タイプ', '体重', '特技'];

  for (const h of header) {
    const th = document.createElement('th');
    th.textContent = h;
    tr.appendChild(th);
  }
  table.appendChild(tr);

  for (const ev of evList) {
    const tr = document.createElement('tr');
    for (const prop in ev) {
      const td =document.createElement('td');
      td.textContent = ev[prop];
      if (prop === 'weight') {
        td.textContent += ' kg';
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}