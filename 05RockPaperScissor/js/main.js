
let usercount = 0;
let compcount = 0;

let userscoreval = document.querySelector("#userScoreVal");
let compscoreval = document.querySelector("#compScoreVal");


let userresultstat = document.querySelector("#result-user-stat");
let compresultstat = document.querySelector("#result-comp-stat");
let winner = document.querySelector("#result-final-stat");

let choicearr = document.querySelectorAll(".choice");

function choice(){
  choicearr.forEach((e)=>{
    e.addEventListener("click", ()=>{
      main(e.firstElementChild.getAttribute("alt"));
    })
  })
}
choice();
function main(userchoice){
  let compchoice = choicearr[ Math.floor(Math.random()*3)].firstElementChild.getAttribute("alt");

  userresultstat.textContent = "User :"+ userchoice;
  compresultstat.textContent = "Computer :"+compchoice;

  if(userchoice === compchoice){
    winner.textContent = "Winner : " +"DRAW";
    return;
  }
  
  if((userchoice == "paper" && compchoice == "rock") || (userchoice == "scissor" && compchoice == "paper") || (userchoice == "rock" && compchoice == "scissor") ){
    usercount++;
    winner.textContent = "Winner : " +"User";
    userscoreval.textContent = usercount;
  }
  if((userchoice == "paper" && compchoice == "scissor") || (userchoice == "scissor" && compchoice == "rock") || (userchoice == "rock" && compchoice == "paper") ){
    compcount++;
    winner.textContent = "Winner : " +"Computer";
    compscoreval.textContent = compcount;
  }
}


// {/* <div class="result">
// <p id="result-user-stat">User:</p>


// <div class="choices">
//         <div class="choice" id="r">
//           <img src="Images/rock.png" alt="rock" />
//         // </div> */}


// document.querySelector("#r").addEventListener("click", function(){
//          let rock = document. createTextNode("rock"); 
         
//         let user = document.querySelector("#result-user-stat").appendChild(rock);
//         if(user === " "){
//             document.querySelector("#result-user-stat").appendChild(rock);
//         }
       
//         let comp = ['rock','paper','scissor'][Math.floor(Math.random()*3)];
//         let compval = document.createTextNode(comp);
//         document.querySelector("#result-comp-stat").appendChild(compval);

//         // document.querySelector("#result-final-stat").appendChild(compval);

//         // console.log( document.createTextNode("winner is "));
      
      
        
// })
// document.querySelector("#p").addEventListener("click", function(){
//      let pap = document. createTextNode("paper"); 
//     console.log( document.querySelector("#result-user-stat").appendChild(pap));

//      let comp = ['rock','paper','scissor'][Math.floor(Math.random()*3)];
//      let compval = document.createTextNode(comp);
//      document.querySelector("#result-comp-stat").appendChild(compval);
   
        
//  })

// document.querySelector("#s").addEventListener("click", function(){
//          let sci = document. createTextNode("scissor"); 
//        console.log(  document.querySelector("#result-user-stat").appendChild(sci));

//          let comp = ['rock','paper','scissor'][Math.floor(Math.random()*3)];
//         let compval = document.createTextNode(comp);
//         document.querySelector("#result-comp-stat").appendChild(compval);
        
// })