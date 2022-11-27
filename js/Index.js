function Generate()
{
    var phoneDigit;
    var inputElements = document.getElementsByClassName('unwantednum');
    var unwantedArr = [];
    var counter = 0;
    var LuckyTitle;

    for(var i=0; i<inputElements.length;i++){
        if(inputElements[i].checked){
             unwantedArr[counter++] = inputElements[i].value;
        }
  }

    if(document.getElementById('Work').checked){
        LuckyTitle = "Work";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("45")||phoneDigit.includes("46")||phoneDigit.includes("78")||phoneDigit.includes("87")||phoneDigit.includes("39")||phoneDigit.includes("93")||phoneDigit.includes("56")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }
    }
    else if(document.getElementById('Merchandsing').checked){
        LuckyTitle = "Merchandsing";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("44")||phoneDigit.includes("22")||phoneDigit.includes("41")||phoneDigit.includes("16")||phoneDigit.includes("61")||phoneDigit.includes("26")||phoneDigit.includes("42")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }
    }
    else if(document.getElementById('Love').checked){
        LuckyTitle = "Love";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("32")||phoneDigit.includes("24")||phoneDigit.includes("62")||phoneDigit.includes("36")||phoneDigit.includes("63")||phoneDigit.includes("69")||phoneDigit.includes("96")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }
    }
    else if(document.getElementById('Technology').checked ){
        LuckyTitle = "Technology";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("98")||phoneDigit.includes("89")||phoneDigit.includes("99")||phoneDigit.includes("59")||phoneDigit.includes("95")||phoneDigit.includes("91")||phoneDigit.includes("19")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }    }
    else if(document.getElementById('Wealth').checked){
        LuckyTitle = "Wealth";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("28")||phoneDigit.includes("82")||phoneDigit.includes("45")||phoneDigit.includes("54")||phoneDigit.includes("65")||phoneDigit.includes("56")||phoneDigit.includes("78")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }    }
    else if(document.getElementById('Education').checked){
        LuckyTitle = "Education";
        while(true)
        {
            phoneDigit = Math.floor(1000000 + Math.random() * 9000000);
            phoneDigit = phoneDigit.toString();
            if(phoneDigit.includes("15")||phoneDigit.includes("51")||phoneDigit.includes("14")||phoneDigit.includes("41")||phoneDigit.includes("55")||phoneDigit.includes("39")||phoneDigit.includes("23")){
                if(!CheckContainUnwanted(phoneDigit ,unwantedArr)){
                    break;
                }
            }
        }    
    }

    
 PerformOutput(LuckyTitle,phoneDigit)
}

function CheckContainUnwanted(phoneDigit ,unwantedArr){

var containUnwanted = false;

    for (var i = 0; i < phoneDigit.length; i++) {
        for(var j=0;j < unwantedArr.length;j++){
            if(phoneDigit.charAt(i).includes(unwantedArr[j])){
                containUnwanted = true;
            }
        }
      }

      return containUnwanted;
}

function PerformOutput(LuckyTitle,phoneDigit){
    document.getElementById("Output").innerHTML =  "Your phone number: "+"095-"+phoneDigit + " | Lucky category: " + LuckyTitle;
    
}