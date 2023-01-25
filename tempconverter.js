//UI variables
let Celcius= document.querySelector("#Celcius");
let Fahrenheit= document.querySelector("#Fahrenheit");
let kelvin= document.querySelector("#Kelvin");

Celcius.oninput=( )=>{ 
    let output= parseFloat(Celcius.value);
    Fahrenheit.value= parseFloat((output*1.8)+32)
    kelvin.value=parseFloat(output+273.15)
}

Fahrenheit.oninput=( )=>{
    let output=parseFloat(Fahrenheit.value);
    Celcius.value= parseFloat((output-32)*0.56)
    kelvin.value=parseFloat((output+459.67)/1.8)
    
}

kelvin.oninput=()=>{
    let output=parseFloat(kelvin.value);
    Celcius.value= parseFloat(output-273.15)
    Fahrenheit.value= parseFloat((1.8*output)-459.67)
}