console.log('Test')

const caixa = document.querySelector('#caixa')

const input = document.querySelector('#caixa-texto')

const button = document.querySelector('#Botao')

const lista = document.querySelector('ol')

const id = document.querySelector('#id')

const formulario = document.querySelector('#form')

button.onclick = (event) => {
    const item = document.createElement('li')

    if (input.value == ''){
        alert("Digite algo")
        return
    }

    for (let item of lista.childNodes) {
            if (item.textContent == input.value) {
            alert ("Item já existe na lista!") 
            return
        }
      }
        
    item.textContent = input.value
    
    if (lista.childElementCount == 0){
        item.setAttribute('id','primeiro_item')
    }

    lista.appendChild(item)
    input.value = ''
    }
caixa.onmouseenter = () => {
    caixa.style.background = 'yellow'
}
caixa.onmouseout = () => {
    caixa.style.background = 'cyan'
}
caixa.onmousemove = () => {
    console.log('moveu')
}
caixa.onmousedown = () => {
    caixa.style.background = 'orange'
}
caixa.onmouseup = () => {
    caixa.style.background = 'yellow'
}
caixa.onclick = () => {
    caixa.innerText = 'Clicou'
}
formulario.onsubmit = async (event) => {
    event.preventDefault()
    
    const resposta = await fetch('https://regres.in/api/users/'+ id.value)
    const dados = await resposta.json()

    console.log(dados.data)
}