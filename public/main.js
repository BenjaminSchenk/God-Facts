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
    home.setAttribute('id','page')
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
    pantheon(data)
})

egyptian.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Egyptian Pantheon')
    const data = await response.json()
    pantheon(data)
})

norse.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Norse Pantheon')
    const data = await response.json()
    pantheon(data)
})

aztec.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Aztec Pantheon')
    const data = await response.json()
    pantheon(data)
})

hawaiian.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Hawaiian Pantheon')
    const data = await response.json()
    pantheon(data)
})

hindu.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/pantheon/Hindu Pantheon')
    const data = await response.json()
    pantheon(data)
})

function allgods (data) {
    const page = document.querySelector('#page')
    page.remove()
    const allGods = document.createElement('div')
    allGods.setAttribute('id','page')
    const all = document.createElement('div')
    all.setAttribute('id', 'all')
    body.append(allGods)
    allGods.append(all)
    for (let i = 0; i < data.length; i++) {
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        name.setAttribute('id','name')
        of.setAttribute('id','of')
        info.setAttribute('id','info')
        fun.setAttribute('id','fun')
        panth.setAttribute('id','pantheon')
        name.innerHTML = obj.name
        of.innerHTML = obj.god_goddess_of
        info.innerHTML = obj.info
        fun.innerHTML = obj.fun_facts
        panth.innerHTML = obj.pantheon_name
        all.append(name)
        all.append(of)
        all.append(info)
        all.append(fun)
        all.append(panth)
    }
}

function pantheon (data) {
    const page = document.querySelector('#page')
    page.remove()
    const gods = document.createElement('div')
    gods.setAttribute('id','page')
    const all = document.createElement('div')
    all.setAttribute('id', 'all')
    body.append(gods)
    gods.append(all)
    for (let key in data) {
        let obj2 = data[key]
        const descript = document.createElement('p')
        descript.setAttribute('id', 'description')
        descript.innerHTML = obj2.description
        all.append(descript)
    }
    for (let i = 0; i < data.length; i++) {
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        name.setAttribute('id','name')
        of.setAttribute('id','of')
        info.setAttribute('id','info')
        fun.setAttribute('id','fun')
        panth.setAttribute('id','pantheon')
        name.innerHTML = obj.name
        of.innerHTML = obj.god_goddess_of
        info.innerHTML = obj.info
        fun.innerHTML = obj.fun_facts
        panth.innerHTML = obj.pantheon_name
        all.append(name)
        all.append(of)
        all.append(info)
        all.append(fun)
        all.append(panth)
    } 
}