const body = document.querySelector('body')
const home = document.querySelector('#Home')
const allBtn = document.querySelector("#Gods")
const greek = document.querySelector('#Greek')
const egyptian = document.querySelector('#Egyptian')
const norse = document.querySelector('#Norse')
const aztec = document.querySelector('#Aztec')
const hawaiian = document.querySelector('#Hawaiian')
const hindu = document.querySelector('#Hindu')
const searchBtn = document.querySelector('#searchBtn')

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

dele.addEventListener('click', async () => {
    const response = fetch(`https://ancient-gods.onrender.com/gods/${name}`, {
        method: 'DELETE'
      })

})

searchBtn.addEventListener('click', async () => {
    const input = document.querySelector('#searchInput')
    const value = input.value
    const response = await fetch(`https://ancient-gods.onrender.com/gods/${value}`)
    const data = await response.json()
    console.log(data)
    searchGods(data)
});

function allgods (data) {
    const page = document.querySelector('#page')
    page.remove()
    const allGods = document.createElement('div')
    allGods.setAttribute('id','page')
    body.append(allGods)
    for (let i = 0; i < data.length; i++) {
        const all = document.createElement('div')
        all.setAttribute('id', 'all')
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        const dele = document.createElement('button')
        dele.textContent = 'Delete'
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
        dele.addEventListener('click', async () => {
            await deleteGod(obj.name);
        });
        all.append(name)
        all.append(of)
        all.append(info)
        all.append(fun)
        all.append(panth)
        all.append(dele)
        allGods.append(all)
    }
}

function pantheon (data) {
    const page = document.querySelector('#page')
    page.remove()
    const gods = document.createElement('div')
    gods.setAttribute('id','page')
    body.append(gods)
    let obj2 = data[0]
    const descript = document.createElement('p')
    descript.setAttribute('id', 'description')
    descript.innerHTML = obj2.description
    gods.append(descript)
    for (let i = 0; i < data.length; i++) {
        const all = document.createElement('div')
        all.setAttribute('id', 'all')
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        const dele = document.createElement('button')
        dele.textContent = 'Delete'
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
        dele.addEventListener('click', async () => {
            await deleteGod(obj.name);
        });
        all.append(name)
        all.append(of)
        all.append(info)
        all.append(fun)
        all.append(panth)
        all.append(dele)
        gods.append(all)
    } 
}

function searchGods (data) {
    const page = document.querySelector('#page')
    page.remove()
    const god = document.createElement('div')
    god.setAttribute('id','page')
    body.append(god)
    for (let i = 0; i < data.length; i++) {
        const obj = data[i]
        const single = document.createElement('div')
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        const dele = document.createElement('button')
        dele.textContent = 'Delete'
        name.setAttribute('id','name')
        of.setAttribute('id','of')
        info.setAttribute('id','info')
        fun.setAttribute('id','fun')
        panth.setAttribute('id','pantheon')
        single.setAttribute('id', 'single')
        name.innerHTML = obj.name
        of.innerHTML = obj.god_goddess_of
        info.innerHTML = obj.info
        fun.innerHTML = obj.fun_facts
        panth.innerHTML = obj.pantheon_name
        dele.addEventListener('click', async () => {
            await deleteGod(obj.name);
        });
        single.append(name)
        single.append(of)
        single.append(info)
        single.append(fun)
        single.append(panth)
        single.append(dele)
        god.append(single)
    }
}

function deleteGod (name) {
    return fetch(`https://ancient-gods.onrender.com/gods/${name}`, {
    method: 'DELETE'
  })
}