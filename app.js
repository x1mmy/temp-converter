var celInput = document.querySelector('#celsius > input');
var fahInput = document.querySelector('#fahrenheit > input');
var kelInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100
}

function celToFahAndKel(){
    const cTemp =parseFloat( celInput.value);
    const fTemp = (cTemp * (9/5)) + 32
    const kTemp = cTemp + 273.15;
    fahInput.value = roundNum(fTemp);
    kelInput.value = roundNum(kTemp);
}

function fahToCelAndKel (){
    const fTemp = parseFloat(fahInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celInput.value = roundNum(cTemp);
    kelInput.value = roundNum(kTemp);
}

function kelToCelAndFah (){
    const kTemp = parseFloat(kelInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celInput.value = roundNum(cTemp);
    fahInput.value = roundNum(fTemp);
}


function main(){
    celInput.addEventListener('input', celToFahAndKel)
    fahInput.addEventListener('input', fahToCelAndKel)
    kelInput.addEventListener('input', kelToCelAndFah)
}

main();