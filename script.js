let order = []
let clickedOrder = []
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


let shuffleOrder = () => {
    console.log('shuffle')
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let colorElement = createColorElement(order[i])
        lightColor(colorElement,Number(i) + 1)
    }
}

let lightColor = (element,number) => {
    console.log('light')
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    },number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    },number)
}

let checkOrder = () => {
    console.log('shuffle')
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length){
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')   
        checkOrder()
    },250)
}

let createColorElement = (color) => {
    switch(color){
        case 0:
            return green
        case 1:
            return red
        case 2:
            return yellow
        case 3:
            return blue
    }
}

let nextLevel = () => {
    score++
    alert(`Pontuação: ${score}\nVocê acertou!\nIniciando próximo nível`)
    shuffleOrder()
}

let gameOver = () => {
    alert(`Pontuação final ${score}\nVocê perdeu o jogo!\n Clique em ok para reiniciar`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Bem vindo ao Genius\nIniciando novo jogo...')
    score = 0

    shuffleOrder()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()