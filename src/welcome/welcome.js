import './style.css';
import Cartoon from './katong.jpg';
import say from './say.js';

var elDiv1 = document.createElement('div');
elDiv1.setAttribute('class', 'div');
elDiv1.classList.add('img-bkg');
document.body.appendChild(elDiv1);

var elImg = new Image();
elImg.src = Cartoon;
elDiv1.appendChild(elImg);

var elDiv2 = document.createElement('div');
elDiv2.setAttribute('class', 'div scroll');
elDiv2.setAttribute('id', 'div2');
document.body.appendChild(elDiv2);

var btn = document.createElement('button');
btn.innerHTML = 'CLICK ME TO LOAD PRINT.JS';
btn.setAttribute('id', 'btn1');
btn.onclick = function() {
  import('./print.js').then(m => {
    m.default();
  });
};
elDiv2.appendChild(btn);
say();