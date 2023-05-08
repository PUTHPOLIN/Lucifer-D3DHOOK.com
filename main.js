document.querySelectorAll('.auto-resize')
        .forEach(el=>{
    const text = el.querySelector('span');
    const input = el.querySelector('input');
    text.innerText = input.value.replace(/ /g, '.');
    input.addEventListener('input',e=>{
        text.innerText =   e.target.value
                            .replace(/ /g, '.');
        input.style.width = text.offsetWidth + 'px';
    })
})

var good = document.querySelector('.good'),
    fast = document.querySelector('.fast'),
    cheap = document.querySelector('.cheap');

function changed(el){
  isGood = good.checked;
  isFast = fast.checked;
  isCheap = cheap.checked;

  if(isGood && isFast && isCheap && el == cheap){
    fast.checked = false;
  }
  if(isGood && isCheap && isFast && el == fast){
    good.checked = false;
  }
  if(isCheap && isFast && isGood && el == good){
    cheap.checked = false;
  }

}

var ball    = document.querySelector('.ball'),
    info    = document.querySelector('.info'),
    y       = 1,
    gravity = 1;

setInterval(function(){

  if(y>420){ gravity = -gravity; }
  gravity+=1;
  y = y + gravity;
  ball.style.top = (y) + "px";
  info.innerText = "Y : "+y+", G : "+ gravity;
},50);