let name='';

let score = 0;
let rando = 0;
const scoreEl = document.getElementById("score-el");
const startBtn = document.getElementById("start-btn");
const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');
const changeBtn = document.getElementById("change-el");
const nightBtn = document.getElementById("night-mode");



nightBtn.addEventListener("click", function(){
  if(document.body.classList.contains('dark-theme')){
  document.body.classList.remove('dark-theme');
  nightBtn.textContent="NIGHT";

}
  else{
    document.body.classList.add('dark-theme');
    nightBtn.textContent="DAY";

  }

}

)













changeBtn.addEventListener('click', function(){
  name = inputEl.value;
  inputEl.value = '';
  scoreEl.textContent = `${name} Score: ${score}`;

})



deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  score = 0;
  scoreEl.textContent = "Score: ";
})

loadBtn.addEventListener("click", function(){

     let score1 = (JSON.parse(localStorage.getItem('scores')));
     let name1 =  (JSON.parse(localStorage.getItem('name')));
     scoreEl.textContent = name1 + " Score: " + score1;
     score = score1;
     name = name1;
})
function render(){


    rando = Math.floor((Math.random()*4) + 1);
    startBtn.textContent = "PRESS";
    if (rando === 1){
      document.getElementById("box1").style.visibility = "visible"
      document.getElementById("box2").style.visibility = "hidden"
      document.getElementById("box3").style.visibility = "hidden"
      document.getElementById("box4").style.visibility = "hidden"

    }
    else if (rando === 2){
      document.getElementById("box1").style.visibility = "hidden"
      document.getElementById("box2").style.visibility = "visible"
      document.getElementById("box3").style.visibility = "hidden"
      document.getElementById("box4").style.visibility = "hidden"
    }
    else if (rando === 3){
      document.getElementById("box1").style.visibility = "hidden"
      document.getElementById("box2").style.visibility = "hidden"
      document.getElementById("box3").style.visibility = "visible"
      document.getElementById("box4").style.visibility = "hidden"
    }
    else if (rando === 4){
      document.getElementById("box1").style.visibility = "hidden"
      document.getElementById("box2").style.visibility = "hidden"
      document.getElementById("box3").style.visibility = "hidden"
      document.getElementById("box4").style.visibility = "visible"
    }
}

startBtn.addEventListener("click", function(){
render();}
)

saveBtn.addEventListener("click", function(){
  localStorage.setItem("scores", JSON.stringify(score));
  localStorage.setItem("name", JSON.stringify(name));
})


let box1 = document.getElementById("box1");
box1.addEventListener("mouseover", function(){
  document.getElementById("box1").style.visibility = "hidden";
  score++;
  scoreEl.textContent = `${name} Score: ${score}`;
  render();
})

let box2 = document.getElementById("box2");
box2.addEventListener("mouseover", function(){
  document.getElementById("box2").style.visibility = "hidden";
  score++;
  scoreEl.textContent = `${name} Score: ${score}`;
  render();
})
let box3 = document.getElementById("box3");
box3.addEventListener("mouseover", function(){
  document.getElementById("box3").style.visibility = "hidden";
  score++;
  scoreEl.textContent = `${name} Score: ${score}`;
  render();

})
let box4 = document.getElementById("box4");
box4.addEventListener("mouseover", function(){
  document.getElementById("box4").style.visibility = "hidden";
  score++;
  scoreEl.textContent = `${name} Score: ${score}`;
  render();
})
