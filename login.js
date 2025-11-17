// Função de Cadastro
function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  // Salva o usuário no localStorage
  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// Função de Login
function logar(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}
// Abrir modal
document.getElementById("openLoginBtn").addEventListener("click", () => {
  document.getElementById("loginModal").classList.add("open");
});

// Fechar modal
document.getElementById("closeLoginBtn").addEventListener("click", () => {
  document.getElementById("loginModal").classList.remove("open");
});

// Fechar clicando fora
document.getElementById("loginModal").addEventListener("click", (e) => {
  if (e.target.id === "loginModal") {
    document.getElementById("loginModal").classList.remove("open");
  }
});
// ---------- CONTROLE DOS MODAIS ---------- //
const modalLogin = document.getElementById("loginModal");
const modalCadastro = document.getElementById("cadastroModal");

// Abrir login
document.getElementById("openLoginBtn").addEventListener("click", () => {
  modalLogin.classList.add("open");
});

// Abrir cadastro
document.getElementById("openCadastro").addEventListener("click", () => {
  modalLogin.classList.remove("open");
  modalCadastro.classList.add("open");
});

// Fechar login
document.getElementById("closeLoginBtn").addEventListener("click", () => {
  modalLogin.classList.remove("open");
});

// Fechar cadastro
document.getElementById("closeCadastroBtn").addEventListener("click", () => {
  modalCadastro.classList.remove("open");
});

// Fechar clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modalLogin) modalLogin.classList.remove("open");
  if (e.target === modalCadastro) modalCadastro.classList.remove("open");
});


// ---------- SISTEMA DE LOGIN / CADASTRO ---------- //

// Cadastrar usuário
document.getElementById("cadastrarBtn").addEventListener("click", () => {
  const nome = document.getElementById("cadNome").value;
  const email = document.getElementById("cadEmail").value;
  const senha = document.getElementById("cadSenha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  const user = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(user));

  modalCadastro.classList.remove("open");
  alert("Conta criada com sucesso!");
});

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const user = JSON.parse(localStorage.getItem("usuario"));

  if (!user) {
    alert("Nenhuma conta cadastrada.");
    return;
  }

  if (email === user.email && senha === user.senha) {
    localStorage.setItem("logado", "true");
    modalLogin.classList.remove("open");
    mostrarUsuario();
  } else {
    alert("E-mail ou senha incorretos.");
  }
});


// ---------- MOSTRAR USUÁRIO LOGADO ---------- //

function mostrarUsuario() {
  const logado = localStorage.getItem("logado");
  const user = JSON.parse(localStorage.getItem("usuario"));

  const btnLogin = document.getElementById("openLoginBtn");

  if (logado === "true" && user) {
    btnLogin.innerHTML = `👤 ${user.nome}`;
    btnLogin.disabled = true;
  }
}

mostrarUsuario();


// ---------- LOGOUT (opcional:  colocar dropdown) ---------- //
