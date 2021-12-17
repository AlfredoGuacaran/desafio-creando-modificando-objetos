function Consultorio(_nombreConsul) {
  this.nombre = _nombreConsul;
  this.pacientes = [];
  this.nuevoPaciente = this.pacientes.push(new Paciente());
}

function Paciente(_nombre, _edad, _rut, _diagnostico) {
  this.nombre = _nombre;
  this.edad = _edad;
  this.rut = _rut;
  this.diagnostico = _diagnostico;
}
