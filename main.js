const form = document.getElementById('calcular')

let firstNumber = document.getElementById('first-number')
let secondNumber = document.getElementById('second-number')

function validaNumero (numOne, numTwo){
    const valida = numOne < numTwo
    return valida
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let formEValido = false 

    formEValido = validaNumero(firstNumber.value, secondNumber.value)
    if (!formEValido) {
        document.querySelector('.error-message').style.display = 'block'
    }else{
        document.querySelector('.success-message').style.display = 'block'
    }
})