const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch('convert.json')
        const data = await response.json()
        return data
    } catch (e) {
        console.error(e, 'ERROR')
    }
}

const convert = (elem, target, target2) => {
    elem.oninput = async (event) => {
        try {
            const response = await fetchData()
            if (event.target.classList.contains('som')) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.eur).toFixed(2)
            } else if (event.target.classList.contains('usd')) {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = ((elem.value * response.usd) / response.eur).toFixed(2)
            } else {
                target.value = (elem.value * response.eur).toFixed(2)
                target2.value = ((elem.value * response.eur) / response.usd).toFixed(2)
            }
            if (elem.value === '') {
                target.value = ''
                target2.value = ''
            }

        } catch (e) {
            console.error(e, 'ERROR')
        }
    }
}

convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)




