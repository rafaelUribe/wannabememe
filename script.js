var divn = document.getElementById('divno')
var btny = document.getElementById('si')
divn.addEventListener("mouseover", randomize)
btny.addEventListener("click", toggleCongrats)
var cng = document.getElementById('cong')

var lastclass = 'uno'

function randomize(){
    let number = getRandomInt(1, 5)
    var clase
    switch(number){
        case 1:
            clase = 'uno'
        break;
        case 2:
            clase = 'dos' 
        break;
        case 3:
            clase = 'tres'
        break;
        default:
            clase = 'cuatro'
    }
    if(clase != lastclass){
        toggle(clase)
        lastclass = clase
    }
    else{
        randomize()
    }
}

function toggle(clase){
    divn.classList.remove(lastclass)
    divn.classList.add(clase)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}


function toggleCongrats(){
    if(cng.classList.contains('hide')){
        cng.classList.remove('hide')
    } else {
        cng.classList.add('hide')
    }
}