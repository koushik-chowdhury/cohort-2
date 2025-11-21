let button = document.querySelector('#button');
let main = document.querySelector('main');

button.addEventListener('click', function () {
  let div = document.createElement('div');

  let boxWidth = Math.random() * 200;
  let boxHeight = Math.random() * 200;

  // Random color Generate
  let color1 = Math.floor(Math.random() * 255);
  let color2 = Math.floor(Math.random() * 255);
  let color3 = Math.floor(Math.random() * 255);
console.log(main.clientHeight)
  let maxWidth = main.clientWidth;
  let maxHeight = main.clientHeight;

  let topPos = Math.random() * (maxHeight - boxHeight);
  let leftPos = Math.random() * (maxWidth - boxWidth);

  div.style.width = boxWidth + 'px';
  div.style.height = boxHeight + 'px';
  div.style.top = topPos + 'px';
  div.style.left = leftPos + 'px';
  div.style.position = 'absolute';
  div.style.backgroundColor = `rgb(${color1},${color2},${color3})`;

    
  main.appendChild(div);
});
