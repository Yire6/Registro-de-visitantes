function mostrarFormulario() {
    const section = document.getElementById('formulario-section');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const cedula = document.getElementById('cedula').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const departamento = document.getElementById('departamento').value;
    const motivo = document.getElementById('motivo').value.trim();
  
    let valido = true;
  
    const validarCampo = (id, condicion) => {
      const error = document.getElementById(`error-${id}`);
      if (condicion) {
        error.style.display = 'none';
      } else {
        error.textContent = 'Campo obligatorio o inválido.';
        error.style.display = 'block';
        valido = false;
      }
    };
  
    const cedulaRegex = /^\d{3}-\d{6}-\d{5}$/;
  
    validarCampo('cedula', cedulaRegex.test(cedula));
    validarCampo('nombres', nombres !== '');
    validarCampo('apellidos', apellidos !== '');
    validarCampo('departamento', departamento !== '');
    validarCampo('motivo', motivo !== '');
  
    if (!valido) return;
  
    const tabla = document.querySelector('#tablaRegistros tbody');
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${cedula}</td>
      <td>${nombres}</td>
      <td>${apellidos}</td>
      <td>${departamento}</td>
      <td>${motivo}</td>
    `;
    tabla.appendChild(fila);
  
    this.reset();
  });
  