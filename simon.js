let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let level=0;
let started=false;
h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
    console.log("game has started");
    started=true;
    levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
 function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //choose random button
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function checkans(idx){
 if(userseq[idx]===gameseq[idx]){
  if(userseq.length==gameseq.length){
      setTimeout(levelup,1000);
  }
 }
 else{
    h2.innerHTML=`Game over!!! your score was <b>${level-1}</b> <b>Start Again`;
    reset();
 }
}
function btnpress(){
 let btn=this;
 btnflash(btn);
 let userbtn=btn.getAttribute("id");
 userseq.push(userbtn);
 checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btnn of allbtns){
    btnn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

