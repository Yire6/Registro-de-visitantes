document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  
  setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", () => {

  const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
  const formulario = document.getElementById("registroForm");
  const tablaBody = document.querySelector("#tabla-registro tbody");

  mostrarFormularioBtn.addEventListener("click", () => {
    formulario.classList.toggle("formulario-oculto");
  });

  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const departamento = document.getElementById("departamento").value;
    const motivo = document.getElementById("motivo").value.trim();

    let isValid = true;

    //validaciones
    if (nombres === "") {
      mostrarError("error-nombres", "El campo 'Nombres' es obligatorio.");
      isValid = false;
    } else {
      ocultarError("error-nombres");
    }

 
    if (apellidos === "") {
      mostrarError("error-apellidos", "El campo 'Apellidos' es obligatorio.");
      isValid = false;
    } else {
      ocultarError("error-apellidos");
    }

   
    const cedulaRegex = /^\d{3}-\d{6}-\d{4}[a-zA-Z]$/;
    if (!cedulaRegex.test(cedula)) {
      mostrarError("error-cedula", "El número de cédula debe tener el formato 999-999999-9999X.");
      isValid = false;
    } else {
      ocultarError("error-cedula");
    }

  
    if (departamento === "") {
      mostrarError("error-departamento", "Debe seleccionar un departamento.");
      isValid = false;
    } else {
      ocultarError("error-departamento");
    }

  
    if (motivo === "") {
      mostrarError("error-motivo", "El campo 'Motivo' es obligatorio.");
      isValid = false;
    } else {
      ocultarError("error-motivo");
    }

    // Si no es válido, detener la ejecución
    if (!isValid) {
      return;
    }

    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${nombres}</td>
      <td>${apellidos}</td>
      <td>${cedula}</td>
      <td>${departamento}</td>
      <td>${motivo}</td>
    `;

   
    tablaBody.appendChild(nuevaFila);

 
    alert("Registro realizado correctamente.");

  
    formulario.reset();
    formulario.classList.add("formulario-oculto");
  });

 
  function mostrarError(id, mensaje) {
    const error = document.getElementById(id);
    error.textContent = mensaje;
    error.style.display = "block";
  }


  function ocultarError(id) {
    const error = document.getElementById(id);
    error.style.display = "none";
  }
});