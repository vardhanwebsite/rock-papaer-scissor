const computer=document.querySelector(".computer img");
const player=document.querySelector(".player img");
const computerpoint=document.querySelector(".computerpoint");
const playerpoint=document.querySelector(".playerpoint");
const option=document.querySelectorAll(".option button");
let result=document.getElementById("result");
let count=0;


 
option.forEach((option) => {
    option.addEventListener("click",function() {
        computer.classList.add("shakecomputer");
        player.classList.add("shakeplayer");


        setTimeout(() => {
            computer.classList.remove("shakecomputer");
            player.classList.remove("shakeplayer")

            player.src="./"+ option.innerHTML+"player.png"

            const choice=["STONE","PAPER","SCISSOR"];
            let array=Math.floor(Math.random() * 3);
            let computerchoice=choice[array];
            computer.src=computerchoice+"computer.png";


            let cPoints = parseInt(computerpoint.innerHTML);
            let pPoints = parseInt(playerpoint.innerHTML);
      
            if (option.innerHTML === "STONE") {
              if (computerchoice === "PAPER")
                computerpoint.innerHTML = cPoints + 1;
              else if (computerchoice === "SCISSOR")
                playerpoint.innerHTML = pPoints + 1;
            } else if (option.innerHTML === "PAPER") {
              if (computerchoice === "SCISSOR")
                computerpoint.innerHTML = cPoints + 1;
              else if (computerchoice === "STONE")
                playerpoint.innerHTML = pPoints + 1;
            } 
           
            
            else   {
              if (computerchoice === "STONE")
                computerpoint.innerHTML = cPoints + 1;
              else if (computerchoice === "PAPER")
                playerpoint.innerHTML = pPoints + 1;
            }
            count++ 

           
        }, 90);


    
    });
});




