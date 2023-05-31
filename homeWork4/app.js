// 1
const container = document.querySelector('.container')

const fetchData = async () => {
    try {
        const response = await fetch('team.json')
        const data = await response.json()
        data.map(person => {
            const wrapper = document.createElement('div')
            const personImg = document.createElement('img')
            const personName = document.createElement('p')
            const personAge = document.createElement('p')
            const personPosition = document.createElement('p')

            personImg.setAttribute('src', 'img/user.png')
            personName.innerText = person.name
            personName.setAttribute('class', 'person__name')
            personAge.innerText = `age: ${person.age}`
            personPosition.innerText = person.position

            wrapper.append(personImg, personName, personAge, personPosition)
            wrapper.setAttribute('class', 'wrapper')
            container.append(wrapper)
        })
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
fetchData()

// 2
const getObject = async () => {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e, 'ERROR')
    }
}
getObject()