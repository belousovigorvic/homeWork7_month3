// 1
const block = document.querySelector('.block')
const btnGroup = document.querySelector('.btn-group')

let count = 0

btnGroup.onclick = (event) => {
    if (event.target.classList.contains('next-btn')) {
        count++
    } else {
        count--
        count <= 1 ? count = 1 : null
    }

    const slider = async () => {
        try {
            const API = `https://jsonplaceholder.typicode.com/todos/${count}`
            const response = await fetch(API)
            const data = await response.json()
            block.innerHTML = `
                 <h2>${data.title}</h2>
                 <span>${data.id}</span>
                 <h3>${data.completed}</h3>
             `
        } catch (e) {
            console.error(e, 'ERROR')
        }
    }
    slider()
}

// 2
const fetchData = async () => {
    try {
        const API = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
fetchData()