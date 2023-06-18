console.log('JS working')

const allBtn = document.querySelector("#Gods")

allBtn.addEventListener('click', async () => {
    const data = await fetch('https://ancient-gods.onrender.com/gods')
    console.log(data)
})