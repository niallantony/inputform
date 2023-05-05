const password = document.getElementById('password');
const confirmP = document.getElementById('confirm');
const inputs = document.querySelectorAll('input');



function askError(input) {
    if (input.id === 'confirm') {
        validatePassword();
    }
    if (input.checkValidity()) {
        if (input.classList.contains('error')) {
            input.classList.remove('error')
        }
    } else {
        input.classList.add('error')
    }
}

function validatePassword() { 
    const mes = password.value != confirmP.value ? 'Passwords do not match' : '' ;
    confirmP.setCustomValidity(mes);
}

inputs.forEach(input => {
    input.addEventListener('change', event => {
        askError(input);
    });
});


