const form = document.getElementById('agendamentoForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    alert(`Consulta agendada para ${nome} em ${data} às ${horario}`);

    form.reset();
});