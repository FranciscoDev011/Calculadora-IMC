const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / ( height*height )).toFixed(2);

    const value = document.getElementById('value');
    let description = "";

    document.getElementById('infos').classList.remove('hidden')
    if (imc < 18.5) {
        description = 'Você está abaixo do peso!';
        value.style.color = '#c1121f'
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal!';
        value.style.color = '#38A649'
    } else if (imc >= 25 && imc <= 30) {
        description = 'Você está com sobrepeso!';
        value.style.color = '#38A649'
    } else if (imc >= 30 && imc <= 35) {
        description = 'Você está com obesidade moderada!';
        value.style.color = '#c1121f'
    } else if (imc >= 35 && imc <= 40) {
        description = 'Você está com obesidade severa!';
        value.style.color = '#c1121f'
    } else if (imc >= 40 && imc <= 45) {
        description = 'Você está com obesidade morbida!';
        value.style.color = '#c1121f'
    }
    value.textContent = imc.replace(".", ",")
    document.getElementById('description').textContent = description;
});