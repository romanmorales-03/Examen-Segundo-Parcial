if (!localStorage.getItem("datos")) {
  const lista = [
    { username: "admin", password: "admin.123", nivel: 1 },
    { username: "supervisor", password: "super.123", nivel: 2 },
    { username: "captura", password: "cap.123", nivel: 3 }
  ];
  localStorage.setItem("datos", JSON.stringify(lista));
}

let usuarios = JSON.parse(localStorage.getItem("datos"));

function logo() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("Por favor, complete ambos campos.");
    return;
  }

  const validUser = usuarios.find(
    user => user.username === username && user.password === password
  );

  if (!validUser) {
    alert('¡Usuario y/o contraseña incorrectos!');
    return;
  }

  switch (validUser.nivel) {
    case 1:
      alert("Usuario admin válido. Redirigiendo a admin.html...");
      // window.location.href = "admin.html";
      break;
    case 2:
      alert("Usuario supervisor válido. Redirigiendo a supervisor.html...");
      // window.location.href = "supervisor.html";
      break;
    case 3:
      alert("Usuario captura válido. Redirigiendo a captura.html...");
      // window.location.href = "captura.html";
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginform').addEventListener('submit', e => {
    e.preventDefault();
    logo();
  });
});
