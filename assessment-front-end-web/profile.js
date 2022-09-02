favColor = document.getElementById('color')
favPlace = document.getElementById('place')
favRitual = document.getElementById('ritual')
feelsInputMan = document.getElementById('feelsInputMan')
feelsBtnMan = document.getElementById('feelsBtnMan')

const colorSpewer = () => {
    alert('MY FAVORITE COLOR IS BLUE')
}

const placeSpewer = () => {
    alert('MY FAVORITE PLACE IS GLENCO IN THE SCOTISH HIGHLANDS')
}

const ritualSpewer = () => {
    alert('MY FAVORITE RITUAL IS THE SUMMONING OF SNARGLOPHALU')
}

const feels = (event) => {
    feelsInputMan.value = ''
    alert('That was hurtful =(')
}


favColor.addEventListener('click', colorSpewer)
favPlace.addEventListener('click', placeSpewer)
favRitual.addEventListener('click', ritualSpewer)
feelsBtnMan.addEventListener('click', feels)

window.onscroll = function(){
    let footieDIV = document.getElementById('footieDiv')

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footieDIV.textContent = 'Caught Me!'
    } else {
        footieDIV.textContent = 'Catch me... IF YOU CAN'
    }
}