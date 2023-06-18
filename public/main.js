const body = document.querySelector('body')
const allBtn = document.querySelector("#Gods")

allBtn.addEventListener('click', async () => {
    const response = await fetch('https://ancient-gods.onrender.com/gods')
    const data = response.json()
    console.log(data)
})