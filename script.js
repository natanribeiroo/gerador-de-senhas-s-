const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Atualiza a exibição numérica do tamanho da senha
lengthInput.addEventListener('input', () => {
  lengthVal.textContent = lengthInput.value;
});

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let allowedChars = '';
  let password = '';

  if (uppercaseEl.checked) allowedChars += UPPERCASE_CHARS;
  if (lowercaseEl.checked) allowedChars += LOWERCASE_CHARS;
  if (numbersEl.checked) allowedChars += NUMBER_CHARS;
  if (symbolsEl.checked) allowedChars += SYMBOL_CHARS;

  if (allowedChars === '') {
    alert('Selecione pelo menos uma opção para gerar a senha!');
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  passwordInput.value = password;
}

function copyPassword() {
  if (!passwordInput.value) return;

  navigator.clipboard.writeText(passwordInput.value);
  alert('Senha copiada para a área de transferência!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

// Gera uma senha inicial ao carregar a página
generatePassword();