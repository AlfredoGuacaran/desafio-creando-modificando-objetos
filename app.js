// htmls

const newPacienteHTML = (nombre, edad, rut, diagnostico) => {
  return `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${nombre}</div>
                    <p>Edad: ${edad} Rut: ${rut} Diagnostico: ${diagnostico}</p>
                     <p>Diagnostico: ${diagnostico}</p>
                </div>
            </li>
    `;
};

const newConsultorioHTML = (nombreConsultorio, numConsult) => {
  return `
            <div class="accordion-item" id="consultorio--${numConsult}">
                <h2 class="accordion-header" id="heading--${numConsult}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse--${numConsult}" aria-expanded="true" aria-controls="collapse--${numConsult}">
                      <p>Consultorio:  <span class="fw-bold">${nombreConsultorio}</span></p>
                    </button>
                </h2>
                <div id="collapse--${numConsult}" class="accordion-collapse collapse show lista-pacientes"
                    aria-labelledby="heading--${numConsult}" data-bs-parent="#accordionExample">
                    <div class="d-flex justify-content-around mt-2">
                    <button type="button " class="btn btn-success nuevo_paciente_btn">Crear paciente</button>
                    <button type="button" class="btn btn-danger">Eliminar consultorio</button>
                    </div>
                    <div class="accordion-body">
                    <ol class="list-group list-group-numbered lista-pacientes">
                        
                        
                    </ol>
                </div>
                </div>
            </div>
    `;
};

function Consultorio(_nombreConsul) {
  this.nombre = _nombreConsul;
  this.pacientes = [];
  this.nuevoPaciente = (_nombre, _edad, _rut, _diagnostico) => {
    this.pacientes.push(new Paciente(_nombre, _edad, _rut, _diagnostico));
  };
  this.getPacientes = function () {
    for (paciente of this.pacientes) {
      paciente.show();
    }
  };
  this.getPacienteNombre = function (_nombre) {
    this.pacientes
      .filter((paciente) => paciente.nombre == _nombre)
      .map((paciente) => paciente.show());
  };

  this.borrarPaciente = function (_nombre) {
    this.pacientes = this.pacientes.filter(
      (paciente) => paciente.nombre !== _nombre
    );
  };
}

function Paciente(_nombre, _edad, _rut, _diagnostico) {
  this.nombre = _nombre;
  this.edad = _edad;
  this.rut = _rut;
  this.diagnostico = _diagnostico;
  this.show = function () {
    console.log(
      `Nombre: ${this.nombre} - Diagnostico: ${this.diagnostico} - Edad: ${this.edad} - Rut: ${this.rut}`
    );
  };
}

//Nuevo consultorio
let sistemaSalud = [];
$('.nuevo-consul').on('submit', function (event) {
  event.preventDefault();
  const nombreConsultorio = $('.nuevo-consul-name').val();
  sistemaSalud.push(new Consultorio(nombreConsultorio));
  $('.consultorios-list').append(
    newConsultorioHTML(nombreConsultorio, sistemaSalud.length)
  );
});

//nuevo paciente
$('.consultorios-list').on('click', function (event) {
  if (event.target.classList[2] !== 'nuevo_paciente_btn') return;
  const numConsultorio = event.target.closest('.accordion-item').id.slice(-1);
  sistemaSalud[numConsultorio - 1].nuevoPaciente(
    'Alfredo',
    26,
    264585462,
    'Gripe'
  );

  $(
    `#consultorio--${numConsultorio} .accordion-collapse .lista-pacientes `
  ).append(newPacienteHTML('Alfredo', 26, 264585462, 'Gripe'));
});
