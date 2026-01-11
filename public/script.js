let user = null;

function register() {
  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: rUser.value,
      password: rPass.value
    })
  })
  .then(res => {
    if (res.ok) {
      console.log('✅ Registro feito com sucesso');
    } else {
      console.log('❌ Já existe um usuario com esse nome!');
    }
  })
  .catch(err => {
    console.error('❌ Erro de conexão', err);
  });
}
function entar() {
  const log_direto = document.getElementById("log_direto");

  log_direto.addEventListener("click", () => {
    const secao2 = document.getElementById("secao2");

    secao2.style.display ="block";

    const secao1 = document.getElementById("secao1");

    secao1.style.display ="none";
    log_direto.style.display = "none";
      
  });
}

entar();


function login() {
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: lUser.value,
      password: lPass.value
    })
  })
  .then(r => r.json())
  .then(data => {
    user = data;
    panel.hidden = false;
  });
}

function del() {
  fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: user.id })
  });
}
//npx ts-node src/server.ts
