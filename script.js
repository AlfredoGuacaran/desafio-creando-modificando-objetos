function Consultorio(_nombreConsul) {
  this.nombre = _nombreConsul;
  this.pacientes = [];
  this.nuevoPaciente = (_nombre, _edad, _rut, _diagnostico) => {
    this.pacientes.push(new Paciente(_nombre, _edad, _rut, _diagnostico));
  };
  this.showPacientes = function () {
    for (paciente of this.pacientes) {
      paciente.show();
    }
  };
  this.filtroPacienteNombre = function (_nombre) {
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

let temucoCentro = new Consultorio('Temuco Centro');

temucoCentro.nuevoPaciente('Alfredo', 27, '26.858.XXX-X', 'Resfriado comun');
temucoCentro.nuevoPaciente('Jose', 30, '17.854.XXX-X', 'Dolor de cabeza');
temucoCentro.nuevoPaciente('Julio', 32, '14.874.XXX-X', 'Alergia leve');

console.log(temucoCentro);

temucoCentro.filtroPacienteNombre('Julio');
temucoCentro.borrarPaciente('Alfredo');
console.log(temucoCentro);
