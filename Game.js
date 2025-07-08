let User_Score=0;
let Comp_Score=0;
const msg=document.querySelector("#msg");
const box=document.querySelectorAll(".box"); 
const User_Score_Msg=document.querySelector("#User_Score");
const Comp_Score_Msg=document.querySelector("#Comp_Score");

 for(let i of box)   //For_of loop 
 {
    console.log(i);
    i.addEventListener("click",function(){
    let user_choice=i.getAttribute("id");
    playGame(user_choice);
     });
 }
 function genComp_Choice()
 {
    const options=["Rock","Paper","Scissors"];
    const random_Index=Math.floor(Math.random()*3);
    return options[random_Index];
 }
 function playGame(user_choice)
 {
   //Generate Computer Choice:-
   const compChoice=genComp_Choice();
   if(user_choice == compChoice){
    msg.innerText="Try Again! Game was draw.";
    }
    else if(user_choice=="Rock" && compChoice=="Paper")
    {
        msg.innerText="You lost! Paper beats rock.";
        msg.style.backgroundColor="Red";
        Comp_Score++;
        Comp_Score_Msg.innerText=Comp_Score;
    }
    else if(user_choice=="Rock" && compChoice=="Scissors")
    {
        msg.innerText="You win! Rock beats scissors.";
        msg.style.backgroundColor="green";
        User_Score++;
        User_Score_Msg.innerText=User_Score;
    }
    else if(user_choice=="Paper" && compChoice=="Rock")
    {
        msg.innerText="You win! Paper beats rock.";
        msg.style.backgroundColor="green";
        User_Score++;
        User_Score_Msg.innerText=User_Score;
    }
    else if(user_choice=="Paper" && compChoice=="Scissors")
    {
        msg.innerText="You lost! Scissors beats paper.";
        msg.style.backgroundColor="Red";
        Comp_Score++;
        Comp_Score_Msg.innerText=Comp_Score;
    }
    else if(user_choice=="Scissors" && compChoice=="Paper")
    {
        msg.innerText="You win! Scissors beats paper.";
        msg.style.backgroundColor="green";
        User_Score++;
        User_Score_Msg.innerText=User_Score;
    }
    else if(user_choice=="Scissors" && compChoice=="Rock")
    {
        msg.innerText="You lost! Rock beats scissors.You lost!";
        msg.style.backgroundColor="Red";
        Comp_Score++;
        Comp_Score_Msg.innerText=Comp_Score;
    }
}