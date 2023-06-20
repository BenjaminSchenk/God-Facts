const body = document.querySelector('body')
const home = document.querySelector('#Home')
const allBtn = document.querySelector("#Gods")
const greek = document.querySelector('#Greek')
const egyptian = document.querySelector('#Egyptian')
const norse = document.querySelector('#Norse')
const aztec = document.querySelector('#Aztec')
const hawaiian = document.querySelector('#Hawaiian')
const hindu = document.querySelector('#Hindu')

home.addEventListener('click', () => {
    const page = document.querySelector('#page')
    page.remove()
    const home = document.createElement('div')
    allGods.setAttribute('id','page')
    body.append(home)
})

allBtn.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/gods')
    const data = await response.json()
    allgods(data)
})

greek.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Greek Pantheon')
    const data = await response.json()
    console.log(data)
    //pantheon(data)
})

function allgods (data) {
    const page = document.querySelector('#page')
    page.remove()
    const allGods = document.createElement('div')
    allGods.setAttribute('id','page')
    body.append(page)
    for (let i = 0; i < data.length; i++) {
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const pantheon = document.createElement('p')
        name.setAttribute('id','name')
        of.setAttribute('id','of')
        info.setAttribute('id','info')
        fun.setAttribute('id','fun')
        pantheon.setAttribute('id','pantheon')
        name.innerHTML = obj.name
        of.innerHTML = obj.god_goddess_of
        info.innerHTML = obj.info
        fun.innerHTML = obj.fun_facts
        pantheon.innerHTML = obj.pantheon_name
        page.append(name)
        page.append(of)
        page.append(info)
        page.append(fun)
        page.append(pantheon)
    }
}