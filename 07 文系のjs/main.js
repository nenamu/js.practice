'use strict';

{
  // console.log('Hello World!!');
  // const el = document.querySelector('p');
  // console.log(el); 

  // const sarvants = ['犬', '猿', '雉'];
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  
  // sarvants.push('鬼');
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  
  // sarvants.push('桃');
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  
  // const sarvants = ['犬', '猿', '雉'];

  // function showSarvants() {
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  // }

  // showSarvants();

  // sarvants.push('鬼');
  // showSarvants();

  // sarvants.push('桃');
  // showSarvants();

  
  // const sarvants = ['犬', '猿', '雉'];

  // function showSarvants(n) 
  // {
  //   sarvants.push(n);
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  // }

  // showSarvants('鬼');
  // showSarvants('桃');
  // showSarvants('爺');

  
  // function appendSarvants(n1, n2) 
  // {
  //   sarvants.push(n1);
  //   sarvants.push(n2);
  // console.log('現在の家来は：');
  // for (const sarvant of sarvants) {
  //   console.log(sarvant);
  // }
  // console.log(`の総勢 ${sarvants.length} 名です。`);
  // }

  // const sarvants = ['犬', '猿', '雉'];

  // appendSarvants('赤鬼', '青鬼');
  // appendSarvants('桃', '栗');
  // appendSarvants('爺', '婆');
  
  
  // {
    //   const msg = 'ブロック内';
    //   console.log(msg); // → ブロック内
    // }
    // console.log(msg);   // エラー： msg is not define
    
    //   const msg = 'ブロックの外';
    // {
      //   const msg = 'ブロックの内';
      //   console.log(msg);  // → ブロックの内
      // }
      // console.log(msg);   // → ブロックの外
      


  // function swapSarvants(n) {
  //   sarvants.push(n);
  //   const fired = sarvants.shift();
  //   console.log('現在の家来は：');
  //   for (const sarvant of sarvants) {
  //     console.log(sarvant);
  //   }
  //   console.log(`の総勢 ${sarvants.length} 名です。`);
  //   return fired;
  // }
  
  // const sarvants = ['犬', '猿', '雉'];

  // console.log(`${swapSarvants('鬼')}さん、これまでありがとう！`);
  // console.log(`${swapSarvants('桃')}さん、これまでありがとう！`);

  // swapSarvants('鬼');
  // console.log('犬さん、これまでありがとう！');
  
  // swapSarvants('桃');
  // console.log('猿さん、これまでありがとう！');


  // function getArray() {
  //   return ['A', 'B', 'C'];
  // }
  // const array = getArray();
  // console.log(array[1]);
  
  // function getObject() {
  //   return {a: 'A', b: 'B', c: 'C'};
  // }
  // const obj = getObject();
  // console.log(obj.a);
  
  // function getArray() {
  //   return ['A', 'B', 'C'];
  // }
  // const {a, c} = getArray();

  // // const [a, b, c] = getArray();
  // console.log(a);
  // // console.log(b);
  // console.log(c);
  
  


// function関数式 → OK
const withFunction = {
  rec: 'OK',
  isGood: function() {
    console.log(this.rec);  // 使える
  },
};
withFunction();

// アロー関数 → NG
//（thisでプロパティが読み込めない）
const allowFunction = {
  rec: 'NG',
  isGood: () => {
    console.log(this.rec);  // 使えない
  },
}

// メソッド特有の記法 → 推奨
const withoutFunction = {
  rec: 'Recommended!!',
  isGood() {
    console.log(this.rec);  // 使える
  },
}














}