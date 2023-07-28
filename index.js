const body = document.body
const randomColor = document.querySelector('span')
const button = document.querySelector('button')

const numStrings = '0123456789ABCDEF'
let arr = []





button.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*16); // 0 - 15 chatvlit 
        arr.push(numStrings[random])
         
     }
    randomColor.innerHTML = `#${arr.join('')}`
    body.style.backgroundColor = `#${arr.join('')}`
    arr = []
})