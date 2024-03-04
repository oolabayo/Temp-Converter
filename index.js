const myText = document.getElementById("myText");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");


function convert(){
    if(toFahrenheit.checked){
        let temp=Number(myText.value)
        temp = (temp * 9/5) + 32;
        result.textContent= temp.toFixed(1)+ "°F";
        }
        else
            if(toCelsius.checked){
                temp=Number(myText.value)
                temp = (temp - 32) * 5/9;
                result.textContent= temp.toFixed(1)+ "°C";
        }
        else{
            result.textContent= ("Select a Unit")
        }
        
}
    



    