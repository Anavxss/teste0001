document.addEventListener("DOMContentLoaded", function () {
    const mesAno = document.getElementById("mes-ano");
    const tbody = document.querySelector("#calendario tbody");
    const btnPrev = document.getElementById("prev-mes");
    const btnNext = document.getElementById("next-mes");

    let dataAtual = new Date();

    function atualizarCalendario() {
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth();
        mesAno.textContent = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(dataAtual);

        tbody.innerHTML = "";

        const primeiroDia = new Date(ano, mes, 1).getDay();
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        let linha = document.createElement("tr");

        for (let i = 0; i < primeiroDia; i++) {
            linha.appendChild(document.createElement("td"));
        }

        for (let dia = 1; dia <= totalDias; dia++) {
            let celula = document.createElement("td");
            celula.textContent = dia;
            linha.appendChild(celula);

            if ((primeiroDia + dia) % 7 === 0 || dia === totalDias) {
                tbody.appendChild(linha);
                linha = document.createElement("tr");
            }
        }
    }

    btnPrev.addEventListener("click", () => {
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        atualizarCalendario();
    });

    btnNext.addEventListener("click", () => {
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        atualizarCalendario();
    });

    atualizarCalendario();
});
