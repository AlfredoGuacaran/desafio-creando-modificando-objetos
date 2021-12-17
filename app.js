// htmls

const newPacienteHTML = (nombre, edad, rut, diagnostico) => {
  return `
    <div class="accordion-body paciente">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${nombre}</div>
                    <div class="d-flex">
                    <p>Edad: ${edad}</p>
                    <p>Rut: ${rut}</p>
                    <p>Diagnostico: ${diagnostico}</p>
                    </div>
                    
                </div>
            </li>
        </ol>
    </div>
    `;
};

const newClinicaHTML = (nombreClinica) => {
  return `
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${nombreClinica}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show lista-pacientes"
                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                </div>
            </div>
    `;
};
