const senha = document.getElementById("senha");
const tamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");
const mensagem = document.getElementById("mensagem");

const caracteres = {
    maiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    numeros: "0123456789",
    simbolos: "!@#$%&*()-_=+[]{}"
};

tamanho.addEventListener("input", () => {
    valorTamanho.textContent = tamanho.value;
});

function gerarSenha() {
    let caracteresDisponiveis = "";

    if (maiusculas.checked) {
        caracteresDisponiveis += caracteres.maiusculas;
    }

    if (minusculas.checked) {
        caracteresDisponiveis += caracteres.minusculas;
    }

    if (numeros.checked) {
        caracteresDisponiveis += caracteres.numeros;
    }

    if (simbolos.checked) {
        caracteresDisponiveis += caracteres.simbolos;
    }

    if (caracteresDisponiveis.length === 0) {
        mensagem.textContent = "Selecione pelo menos uma opção.";
        mensagem.style.color = "#dc2626";
        senha.value = "";
        return;
    }

    let novaSenha = "";

    for (let i = 0; i < tamanho.value; i++) {
        const indice = Math.floor(
            Math.random() * caracteresDisponiveis.length
        );

        novaSenha += caracteresDisponiveis[indice];
    }

    senha.value = novaSenha;

    mensagem.textContent = "";
}

copiar.addEventListener("click", async () => {
    if (!senha.value) {
        mensagem.textContent = "Gere uma senha primeiro.";
        mensagem.style.color = "#dc2626";
        return;
    }

    await navigator.clipboard.writeText(senha.value);

    mensagem.textContent = "Senha copiada!";
    mensagem.style.color = "#16a34a";
});

gerar.addEventListener("click", gerarSenha);

gerarSenha();
