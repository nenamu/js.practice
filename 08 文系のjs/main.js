'use strict';

{
  const p1 = document.getElementById('dom');
  console.log(p1.textContent);

  const lis = document.querySelectorAll('li');
  // console.log(lis);
  // console.log(lis[0].textContent);
  // console.log(lis[1].textContent);
  // console.log(lis[2].textContent);
  console.log(lis);
  for(const li of lis) {
    console.log(li.textContent);
    // li.textContent = "DOM!!"
  }
  const lisArray = Array.from(lis);
  const newLis = lisArray.map((li) => li.textContent + '!!');console.log(newLis);

  // const img = document.getElementsByTagName('img')[0];
  // console.log(img);

  const ps =document.getElementsByClassName('explain');
  console.log(ps);

  const inputs = document.getElementsByName('dom');
  console.log(inputs);

  const a = document.getElementById('link');
  console.log(a);
  const p = a.parentElement;
  console.log(p);
  const img = a.firstElementChild;
  console.log(img);

  // const ul = document.querySelector('ul');
  // console.log(ul.childNodes);

  const u = document.getElementById('list');
  // const li1 = u.firstElementChild;
  // console.log(li1.textContent);
  // const li2 = li1.nextElementSibling;
  // console.log(li2.textContent);
  // const li3 = (li2.nextElementSibling);
  // console.log(li3.textContent);
  for (let li = u.firstElementChild; li != null; li = li.nextElementSibling) {
    console.log(li.textContent);
  }

  const ul = document.getElementById('list');
  const newLi = document.createElement('li');
  newLi.textContent = 'DOM!!';
  ul.appendChild(newLi);

  const li1 = ul.firstElementChild;
  const li2 = li1.nextElementSibling;
  ul.removeChild(li1);
  li2.remove();
}