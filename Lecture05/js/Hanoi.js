var firstStage_div = document.getElementById("first");
var secondStage_div = document.getElementById("second");
var thirdStage_div = document.getElementById("third");

var divArr1
var divArr2
var divArr3

var temp;

var gameStart = false;
var reverse = false;

var focused;

function Init()
{
    if(gameStart){
        return;
    }
    divArr1 = new Array();
    divArr2 = new Array();
    divArr3 = new Array();

    divArr1.push("⬛");
    divArr1.push("🟪🟪🟪");
    divArr1.push("🟦🟦🟦🟦🟦");
    divArr1.push("🟩🟩🟩🟩🟩🟩🟩");
    divArr1.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");    
    divArr1.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
    
    gameStart = true;
    Update()
}

function Focus(i){
    if(i == 0 && temp == null && divArr1 != null){
        temp = divArr1.pop();
    }

    else if(i == 0 && temp != null){
        divArr1.push(temp)
        temp = null
    }

    if(i == 1 && temp == null && divArr2 != null){
        temp = divArr2.pop();
    }

    else if(i == 1 && temp != null){
        divArr2.push(temp)
        temp = null
    }

    if(i == 2 && temp == null && divArr3 != null){
        temp = divArr3.pop();
    }

    else if(i == 2 && temp != null){
        divArr3.push(temp)
        temp = null
    }

    Update();
}

function Update(){
    firstStage_div.innerHTML = "";
    secondStage_div.innerHTML = "";
    thirdStage_div.innerHTML = "";
    
        if(divArr1 != null){
            for(var i = 0; i < divArr1.length; i++){
                firstStage_div.innerHTML += "<p>" + divArr1[i] + "</p>";
            }
        }

        if(divArr2 != null){
            for(var i = 0; i < divArr2.length; i++){
                secondStage_div.innerHTML += "<p>" + divArr2[i] + "</p>";
            }
        }

        if(divArr3 != null){
            for(var i = 0; i < divArr3.length; i++){
                thirdStage_div.innerHTML += "<p>" + divArr3[i] + "</p>";
            }
        }
    
}
