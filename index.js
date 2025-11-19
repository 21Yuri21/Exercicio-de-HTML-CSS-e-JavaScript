function enviarFormulario(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#inputs input');
    let formularioValido = true;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((msg) => msg.textContent = '');

    inputs.forEach((input) => {
        const errorId = `${input.placeholder.split(' ')[0].toLowerCase()}-error`;
        const errorMessage = document.getElementById(errorId);

        if (input.value.trim() === '') {
            formularioValido = false;
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
        }

        if (textaria.value.trim() === '') {
            formularioValido = false;
            textaria.classList.add('invalid');
            textaria.classList.remove('valid');
        } else {
            textaria.classList.add('valid');
            textaria.classList.remove('invalid');
        }
    });

    const statusMessages = document.querySelectorAll('.mensagem-status');
    if (formularioValido) {
        statusMessages.forEach(status => {
            status.texto = (remove)
            status.style.color = '#28a745';
        });
    } else {
        statusMessages.forEach(status => {
            status.textContent = 'Campos Obrigatórios *';
            status.style.color = '#dc3545'
        });
    }
}