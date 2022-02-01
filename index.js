//Header Script

const btn1 = document.querySelector(".contain");
const nav = document.querySelector("nav")


btn1.addEventListener("click", function(){
    nav.classList.toggle("show")
    btn1.classList.toggle("show")
})

//Auto-Text

const textEl = document.getElementById("text");


const text = "Don't Just Buy Iphone 12 on Val. Don't Just Come Over On Val. Check Your Lovescore!"

let idx = 1;
let speed = 140;

writeText();

function writeText(){
textEl.innerText = text.slice(0, idx);
idx++;

if(idx > text.length){
    idx = 1;
}


setTimeout( writeText, speed);

}


//Main work

const quizData = [
    {
        question: "What is your name?",
      
    },
    {
        question: "What is your lover's name?",
       
    },
   
];

/*
const content = document.querySelector(".content")
const answerEls = document.querySelectorAll(".answer")
const aText = document.getElementById("atext")
const bText = document.getElementById("btext")
const cText = document.getElementById("ctext")
const dText = document.getElementById("dtext")*/
const btn = document.getElementById("submit")

const label = document.querySelector(".name");
const inputEl = document.getElementById("a")
const quiz = document.getElementById("quiz")

let currentData = 0



loadQuiz()

function loadQuiz(){


const realData = quizData[currentData]
    label.innerText = realData.question
   
}

/*function clearContent(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function getanswer(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
        
    })
  
    return answer
}*/


//Last Session


const output = []


btn.addEventListener("click", ()=>{
    const sec = document.querySelector(".sec")
  const openi = document.querySelector(".openi")
    const lovescore = Math.floor(Math.random()*100 + 1)
    if(inputEl.value){
       
        currentData++
     output.push(inputEl.value)

    

        inputEl.value = "";
       
    }if(currentData < quizData.length){
        loadQuiz()
        const name1 = inputEl.value
    }else{
        if(lovescore >80){
            sec.classList.add("show")
           openi.innerHTML = `
            <h2> Congratulations ${output[0]}!  Your Lovescore is ${lovescore}%. You and your lover will live happily, you will live in luxury, and you will give birth to beautiful children.</h2>
    
            <button onclick = "location.reload()">Try Again!</button>
            
            `
        }
        else if(lovescore >50 && lovescore <= 80){
            sec.classList.add("show")
            openi.innerHTML = `
            <h2> WOW ${output[0]}!   Your Lovescore is ${lovescore}%. You and your lover will live happily ever after in love and make beautiful babies.</h2>
    
            <button onclick = "location.reload()">Try Again!</button>
            
            `
        }
        else if(lovescore >20 && lovescore <= 50){
            sec.classList.add("show")
            openi.innerHTML = `
            <h2>  ${output[0]}, Your Lovescore is ${lovescore}%. Try to be more romantic with your partner. Don't be afraid to give maxmimum affection and support to your partner  </h2>
    
            <button onclick = "location.reload()">Try Again!</button>
            
            `
        }
       
        else if(lovescore < 20){
            sec.classList.add("show")
            openi.innerHTML = `
            <h2>  Your Lovescore is ${lovescore}%.  Omoooor!!  ${output[0]} this your Lovescore get as he be ooo. Shey you no go chop breakfast bayi.</h2>
    
            <button onclick = "location.reload()">Try Again!</button>
            
            `
        }
    
    }
})