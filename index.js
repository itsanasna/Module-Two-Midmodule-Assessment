const numInput = document.querySelector("#number-of-rolls")
const button = document.querySelector("#roll-dice-button")
const history = document.querySelector("ul")
const p = document.querySelector("#dice-para")
const total = document.querySelector("#sum-para")
const dices = [
    '&#9856',
    '&#9857',
    '&#9858',
    '&#9859',
    '&#9860',
    '&#9861'
]


button.addEventListener('click', (event) => {
    event.preventDefault()
    total.textContent="Sum = "
    let array = []
    for (let i = 0; i < numInput.value; i++){
        array[i] = dices[Math.floor(Math.random() * 6)]
    }
    let sum = 0
    for(let i = 0; i < array.length; i++){
        if (array[i] === '&#9856'){
            sum += 1
        }else if (array[i] === '&#9857'){
            sum += 2
        }else if (array[i] === '&#9858'){
            sum += 3 
        }else if (array[i] === '&#9859'){
            sum += 4
        }else if (array[i] === '&#9860'){
            sum += 5
        } else if ( array[i] === '&#9861') {
            sum += 6
        }
    }
    let list = document.createElement('li')
    list.innerHTML = `${array.join('')} = ${sum}` 
    history.appendChild(list)
    total.textContent += sum
    p.innerHTML = array.join('')
    numInput.value = ""
})






















