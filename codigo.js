// Inicializa usuarios en localStorage si no existe
if (!localStorage.getItem("datos")) {
  const lista = [
    { username: "admin", password: "admin.123", nivel: 1 },
    { username: "supervisor", password: "super.123", nivel: 2 },
    { username: "captura", password: "cap.123", nivel: 3 }
  ];
  localStorage.setItem("datos", JSON.stringify(lista));
}

// Obtiene usuarios desde localStorage
let usuarios = JSON.parse(localStorage.getItem("datos"));

function logo() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("Por favor, complete ambos campos.");
    return;
  }

  console.log("Ingresado:", username, password);
  console.log("Usuarios disponibles:", usuarios);

  const validUser = usuarios.find(
    user => user.username === username && user.password === password
  );

  if (!validUser) {
    alert('¡Usuario y/o contraseña incorrectos!');
    return;
  }

  switch (validUser.nivel) {
    case 1:
      window.location.href = "admin.html";
      break;
    case 2:
      window.location.href = "supervisor.html";
      break;
    case 3:
      window.location.href = "captura.html";
      break;
    default:
      alert("Nivel de usuario desconocido.");
  }
}

