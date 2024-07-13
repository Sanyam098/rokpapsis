let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let random=Math.floor(Math.random()*3);
let trinagle=document.querySelector(".tang");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winModal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("score"));
let scoreElem=document.getElementById("score1");
if(score){
    scoreElem.innerText=score;
}
let count = 0;
let winbox=document.getElementById("winbox");
let btnNext=document.getElementById("btn-next");
let scores=JSON.parse(localStorage.getItem("scores"));
let scoreElemt=document.getElementById("score2");
if(scores){
    scoreElemt.innerText=scores;
}
let counts = 0;
let rulBtn=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-modal");
let ruleimg=document.querySelector(".rule-img");
con.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        user.style.opacity="1";
        trinagle.style.display="none";
        con.forEach(item => {
            // console.log(element);
            item.style.display="none"; 
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(() => {
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");
            },1000);
        },500);
        setTimeout(() => {
            if(random==index){
                winModal.style.display="grid",
                winner.innerText="TIE UP";
              
            }
            else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1 ){
                winModal.style.display="grid",
                winner.innerText="YOU WIN";
                count = score;
                count++;
                localStorage.setItem("score", JSON.stringify(count));
                btnNext.style.visibility="visible";
            }
            else{
                winModal.style.display="grid",
                winner.innerText="YOU LOOSE";
                counts = scores;
                counts++;
                localStorage.setItem("scores", JSON.stringify(counts));
            }
        },1500);
    })
});
play.addEventListener("click", () => {
    window.location.reload();
})

rulBtn.addEventListener("click", () => {
    rulemodal.style.display="flex";
    setTimeout(() => {
        ruleimg.style.transform="translateY(0)";
    },400)
})


let clo=document.querySelector(".clo");

clo.addEventListener("click", () => {
    rulemodal.style.transform="translateY(-200%)";
    setTimeout(() => {
        ruleimg.style.display="none";
    },400)
})



clo.addEventListener("click", () => {
    window.location.reload();
})
// con[random].style.display="block"
// con[random].classList.add("right");