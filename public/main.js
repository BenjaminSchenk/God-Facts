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
const form = document.querySelector('#form1')

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

searchBtn.addEventListener('click', async () => {
    const input = document.querySelector('#searchInput')
    const value = input.value
    const response = await fetch(`https://ancient-gods.onrender.com/gods/${value}`)
    const data = await response.json()
    console.log(data)
    searchGods(data)
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nam = document.querySelector('#name').value
    const godO = document.querySelector('#god-goddess-of').value
    const inf = document.querySelector('#info').value
    const funFacts = document.querySelector('#funFacts').value
    const pantheon = document.querySelector('#pantheon').value
    const obj = {
        name: nam,
        god_goddess_of: godO,
        info: inf,
        fun_facts: funFacts,
        pantheon_name: pantheon
    }
    fetch('https://ancient-gods.onrender.com/gods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }); form.reset()
})

function allgods (data) {
    const page = document.querySelector('#page')
    page.remove()
    const allGods = document.createElement('div')
    allGods.setAttribute('id','page')
    body.append(allGods)
    for (let i = 0; i < data.length; i++) {
        const all = document.createElement('div')
        all.setAttribute('class', 'all')
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        const dele = document.createElement('button')
        const edit = document.createElement('button')
        edit.textContent = 'Edit'
        dele.textContent = 'Delete'
        name.setAttribute('class','name')
        of.setAttribute('class','of')
        info.setAttribute('class','info')
        fun.setAttribute('class','fun')
        panth.setAttribute('class','pantheon')
        name.innerHTML = obj.name
        of.innerHTML = obj.god_goddess_of
        info.innerHTML = obj.info
        fun.innerHTML = obj.fun_facts
        panth.innerHTML = obj.pantheon_name
        dele.addEventListener('click', async () => {
            await deleteGod(obj.name);
        });
        edit.addEventListener('click', async () => {
            await editGod(obj.name)
        });
        all.append(name)
        all.append(of)
        all.append(info)
        all.append(fun)
        all.append(panth)
        all.append(edit)
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
        all.setAttribute('class', 'all')
        const obj = data[i]
        const name = document.createElement('p')
        const of = document.createElement('p')
        const info = document.createElement('p')
        const fun = document.createElement('p')
        const panth = document.createElement('p')
        const dele = document.createElement('button')
        dele.textContent = 'Delete'
        name.setAttribute('class','name')
        of.setAttribute('class','of')
        info.setAttribute('class','info')
        fun.setAttribute('class','fun')
        panth.setAttribute('class','pantheon')
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
    if (data.length === 0) {
        const p = document.createElement('p')
        p.setAttribute('id', 'nothing')
        p.textContent = 'No gods found at this search maybe you misspelled or did not caplitize the name.'
        god.append(p)
    } else {
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
}

function editGod(name) {
    const page = document.querySelector('#page')
    page.remove()
    const god = document.createElement('div')
    god.setAttribute('id','page')
    body.append(god)
    const eGod = document.createElement('div')
    eGod.setAttribute('id', 'egod')
    god.append(eGod)
    eGod.append(name)
    const upForm = document.createElement('form');
    upForm.name = 'upform';
    upForm.id = 'upform';
    const godLabel = document.createElement('label');
    godLabel.setAttribute('for', 'god-goddess-of');
    godLabel.textContent = 'God or Goddess of:';
    const godInput = document.createElement('input');
    godInput.type = 'text';
    godInput.id = 'god-goddess';
    godInput.required = true;
    const infoLabel = document.createElement('label');
    infoLabel.setAttribute('for', 'INFO');
    infoLabel.textContent = 'Info'
    const infoInput = document.createElement('input');
    infoInput.type = 'text';
    infoInput.id = 'INFO'
    infoInput.required = true;
    const funFLabel = document.createElement('label');
    funFLabel.setAttribute('for', 'funF');
    funFLabel.textContent = 'Fun Facts';
    const funFInput = document.createElement('input');
    funFInput.type = 'text';
    funFInput.id = 'funF';
    funFInput.required = 'true';
    const panLabel = document.createElement('label');
    panLabel.setAttribute('for', 'pan');
    panLabel.textContent = 'Pantheon';
    const panInput = document.createElement('input');
    panInput.type = 'text';
    panInput.id = 'pan';
    panInput.required = true;
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    upForm.append(godLabel);
    upForm.append(godInput);
    upForm.append(infoLabel);
    upForm.append(infoInput);
    upForm.append(funFLabel);
    upForm.append(funFInput);
    upForm.append(panLabel);
    upForm.append(panInput);
    upForm.append(submitButton);
    upForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const gof = godInput.value
        const fo = infoInput.value
        const fact = funFInput.value
        const theon = panInput.value
        const updated = {
            god_goddess_of: gof,
            info: fo,
            fun_facts: fact,
            pantheon_name: theon  
        } 
    fetch(`https://ancient-gods.onrender.com/gods/${name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updated)
    })
    })
}

function deleteGod (name) {
    return fetch(`https://ancient-gods.onrender.com/gods/${name}`, {
    method: 'DELETE'
  })
}