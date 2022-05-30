'use strict';

{
  // 配列の初期値
  const arrayBox = [0, 0, 0, 0, 0];

  // ランダムな整数を返します。
  const randomInteger = (min, max) => Math.floor((Math.random() * (max + 1 - min)) + min);

  // 初期状態の配列に要素を追加します。
  const aC = document.getElementById('arrayContainer');
  for(let i = 0; i < arrayBox.length; i++){
    arrayBox[i] = document.createElement('div');
    arrayBox[i].id = 'arrayBox' + i;
    arrayBox[i].classList.add('arrayBox');
    arrayBox[i].textContent = randomInteger(0, 9);
    aC.appendChild(arrayBox[i]);
    // console.log(`arrayBox[${i}] : ${arrayBox[i].textContent}`);
  }

  const arrayUnshift = document.querySelector('#arrayUnshift');
  const arrayPush = document.querySelector('#arrayPush');
  const arrayShift = document.querySelector('#arrayShift');
  const arrayPop = document.querySelector('#arrayPop');

  // 配列を再生成します。
  const reGenerateElement = ((arrayBox, elementValue) => {

    let tempArray = [0];
    console.log(arrayBox.length);

    // 配列の数値を保存しておく。
    for(let i = 0; i < arrayBox.length; i++){
      if(arrayBox[i].textContent) {
        tempArray[i] = arrayBox[i].textContent;
      } else {
        tempArray[i] = elementValue;
      }
    }

    // 現在の配列をすべて削除する。
    do {
      aC.firstElementChild.remove();
    } while(aC.firstElementChild);

    // 配列の要素を再生成する。
    for(let i = 0; i < tempArray.length; i++){
      arrayBox[i] = document.createElement('div');
      arrayBox[i].id = 'arrayBox' + i;
      arrayBox[i].classList.add('arrayBox');
      arrayBox[i].textContent = tempArray[i];
      aC.appendChild(arrayBox[i]);
    }

    return arrayBox;

  });

  // 配列の先頭へ要素を追加します。（Unshift）
  const unshift = () => {
    let rI = randomInteger(0, 9);
    arrayBox.unshift(rI);
    return reGenerateElement(arrayBox, rI);
  }
  arrayUnshift.addEventListener('click', unshift);

  // 配列の末尾へ要素を追加します。（Push）
  const push = () => {
    let rI = randomInteger(0, 9);
    arrayBox.push(rI);
    return reGenerateElement(arrayBox, rI);
  }
  arrayPush.addEventListener('click', push);

  // 配列の先頭から要素を削除します。（Shift）
  const shift = () => {
    arrayBox.shift();
    return reGenerateElement(arrayBox);
  };
  arrayShift.addEventListener('click', shift)


  // 配列の末尾から要素を削除します。（Pop）
  const pop = () => {
    arrayBox.pop();
    return reGenerateElement(arrayBox);
  }
  arrayPop.addEventListener('click', pop);


}