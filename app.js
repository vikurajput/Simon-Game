    let gameSeq = [];       //it will store game sequence
    let userSeq = [];       // it will store user sequence
    let level = 0;          // game level is zero
    let started = false;   
    let btns = ["red","green","yellow","blue"];

    //game started
    document.addEventListener("keypress", function(){
        if(started == false){
            console.log("Started");
            started = true;
            levelUp();

        }
    })

    let h2 = document.querySelector("h2"); //h2 element selected for updating game data
    //level up
    function levelUp(){
        level ++;
        userSeq = [];
        h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random()*3);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        console.log(randIdx);
        console.log(randColor);
        console.log(gameSeq);
        btnFlash(randBtn);

    }

    //button flash
    function btnFlash(btn){
        btn.classList.add("btn-flash");
        setTimeout(function(){
            btn.classList.remove("btn-flash");
        },250)
    }

    //button 
    let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.addEventListener("click",btnPress);
    }

    //user select button
    function btnPress(){
        let btn = this;
        userFlash(btn);
        let userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
        
    }

    //user button flash
    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
        },250)
    }

    //check answer
    function checkAns(idx){
        if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp,1000);
            }
        }
        else{
            h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key restart`;
            document.querySelector("body").style.backgroundColor ="red";
            setTimeout(()=>{
                document.querySelector("body").style.backgroundColor ="white";
            },100);
            reset();
        }
    }

    //game reset
    function reset(){
        level = 0;
        started = false;
        gameSeq = [];
        userSeq = [];
    }

    