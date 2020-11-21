var team1={
    name :"Real Madrid",
    score:0,
    runs:[]
};
var team2={
    name :"Huesca",
    score:0,
    runs:[]
};

var score=[0,1];

console.log(team1);
console.log(team2);

var toss;
window.onload=()=>{
selectToss();
updateName();
updateButton();
updateScores();
}

function selectToss()
{
    toss=Math.round(Math.random())+1;
    console.log(toss);
}
function updateName()
{
    console.log("team1 name "+team1.name);
    console.log("team2 name "+team2.name);
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;

}
function updateButton()
{
    var sbutton=document.getElementById("strikebutton")
    console.log(sbutton);
    var result = document.getElementById("result");
    var trybtn = document.getElementById("tryagainbutton");
    result.style.visibility="";

   if(team1.runs.length ==6 && team2.runs.length ==6 )
   {
       sbutton.remove();
       trybtn.textContent = "Try Again";
        console.log("Both team finished their chances");
        console.log(team1.score===team2.score?"It is a draw":`${team1.score>team2.score?team1.name:team2.name} WINS`)
        result.textContent=team1.score === team2.score ? "It is a draw" : `${team1.score>team2.score ? team1.name : team2.name} WINS..!`;
   }
   else{
        
       toss = toss === 1 ? 2 : 1 ;
   }
   console.log(`${toss===1?team1.name:team2.name} Strike`);
   sbutton.textContent=`${toss===1?team1.name:team2.name} Strike `;
}

handlestrike=()=>{
    console.log("onclik works")
    var runs = score[Math.floor(Math.random()*score.length)]
    console.log(runs)

     

    if(toss=== 1){
        team1.runs.push(runs)
        console.log(runs)
        team1.score=calcScore(team1.runs)
    }
    else{
        team2.runs.push(runs)
        console.log(runs)
        team2.score=calcScore(team2.runs)
    }
    updateButton();
    updateScores();
}
function updateScores(){
    console.log("team1.score " + team1.score)
    console.log("team1.score " + team2.score)
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateRuns()
}
function updateRuns(){
    var team1runscircle =document.getElementById("team1runs").children;
    var team2runscircle =document.getElementById("team2runs").children;
    team1.runs.forEach((run,index1)=>{
        run=== 1 ? team1runscircle[index1].style.backgroundColor="green" : team1runscircle[index1].style.backgroundColor="red";
    });
    team2.runs.forEach((run,index2)=>{
        run=== 1 ? team2runscircle[index2].style.backgroundColor="green" : team2runscircle[index2].style.backgroundColor="red";
    });

}
var calcScore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
};






