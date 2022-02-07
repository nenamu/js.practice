'use strict';

{
console.log('Hello World!!');


  const p = document.getElementById('p_id');
  console.log(`p.id:${p.id}`);
  
  const a = document.getElementById('link');
  const img = a.firstElementChild;
  console.log(`元のリンクURL: ${a.href}`);
  a.href = 'https://loremflickr.com/320/240/dog';
  
  let text;
  if (a.target  === '_blank') {
    text = '別のタブで開きます';
  } else {
    text = '同じタブで開きます';
  }
  
  const textNode = document.createTextNode(text);
  const br = document.createElement('br');
  const p = document.getElementsByTagName('p')[1];
  p.appendChild(br);
  p.appendChild(textNode);
  
  const p = document.querySelector('p:nth-of-type(2)');
  console.log(p.className);
  p.className = 'new_class';








}