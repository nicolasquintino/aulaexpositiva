const formulario = document.getElementById('loginForm');
const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuario === '' || senha === '') {
        mensagemErro.textContent = 'Preencha todos os campos!';
        return;
    }
    }
);