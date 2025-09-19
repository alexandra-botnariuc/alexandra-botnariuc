const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<200;i++){
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*1.2,
    d: Math.random()*0.5
  });
}

function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for(let i=0;i<stars.length;i++){
    let s = stars[i];
    ctx.moveTo(s.x,s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
  }
  ctx.fill();
  updateStars();
}

function updateStars(){
  for(let i=0;i<stars.length;i++){
    let s = stars[i];
    s.y += s.d;
    if(s.y>canvas.height){ s.y=0; s.x=Math.random()*canvas.width; }
  }
}

setInterval(drawStars, 33);

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

