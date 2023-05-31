const contentWrapper = document.querySelector('.content')

const api = 'https://jsonplaceholder.typicode.com/posts'

const fetchData = async () => {
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)

    try {
        data.map(card => {
            const wrapper = document.createElement('div')
            const img = document.createElement('img')
            const title = document.createElement('p')
            const description = document.createElement('p')

            wrapper.setAttribute('class', 'card__wrapper')
            img.setAttribute('class', 'card__img')
            title.setAttribute('class', 'card__title')
            description.setAttribute('class', 'card__description')

            img.setAttribute('src', './img/picture.svg')
            title.innerHTML = card.title
            description.innerHTML = card.body

            wrapper.append(img, title, description)
            contentWrapper.append(wrapper)
        })
    } catch (e) {
        console.error(e, 'ERROR')
    }
}

fetchData()