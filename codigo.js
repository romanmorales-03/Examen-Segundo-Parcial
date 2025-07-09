// Solo guardar usuarios si no existen ya
if (!localStorage.getItem("usuarios")) {
  const lista = [
    { username: "admin", password: "admin.123", nivel: 1 },
    { username: "supervisor", password: "super.123", nivel: 2 },
    { username: "captura", password: "cap.123", nivel: 3 }
  ];
  localStorage.setItem("usuarios", JSON.stringify(lista));
}

function logo() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
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
    alert("¡Usuario y/o contraseña incorrectos!");
    return;
  }

  alert(`Bienvenido ${validUser.username} (nivel ${validUser.nivel})`);
  // Aquí iría la redirección según el nivel
  // window.location.href = "admin.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    logo();
  });
});
