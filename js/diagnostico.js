document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFinalizar').addEventListener('click', function() {
        // Coleta de todos os checkboxes marcados
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const sintomasMarcados = Array.from(checkboxes).map(checkbox => checkbox.value);

        // Definição das doenças e seus sintomas
        const doencas = {
            "Leptospirose": {
                sintomas: ["febreAlta", "dorDeCabeca", "sangramentos", "dorMuscular", "calafrios", "olhosVermelhos", "vomitos"],
                link: "leptospirose.html"
            },
            "Tétano": {
                sintomas: ["contracoesMuscularesDolorosas", "dificuldadesParaRespirar", "febre", "pressaoAlta", "sudorese"],
                link: "tetano.html"
            },
            "Diarréia Aguda": {
                sintomas: ["sangramentoNasFezes", "sangramentos", "calafrios", "olhosVermelhos"],
                link: "diarreiaAguda.html"
            },
            "Hepatite A": {
                sintomas: ["fadiga", "urinaEscura", "fezesClaras", "ictericia", "perdaDeApetite"],
                link: "hepatiteA.html"
            },
            "Dengue": {
                sintomas: ["febreAlta", "dorMuscular", "erupcoesCutaneas", "doresNasArticulacoes", "hemorragiaIntensa", "dificuldadesParaRespirar", "rubor", "dorDeCabeca", "vomitos", "diarreia"],
                link: "dengue.html"
            },
            "Animais Peçonhentos": {
                sintomas: ["dorImediata", "infeccaoNecrosePicada", "diminuicaoBatimentosCardiacos", "quedaPressaoArterial", "formigamentoSuorLocal", "bolhas", "eritema", "hematomas"],
                link: "animais.html"
            }
        };

        const diagnosticos = [];

        // Cálculo da probabilidade para cada doença
        for (const [doenca, info] of Object.entries(doencas)) {
            const sintomas = info.sintomas;
            const sintomasComuns = sintomas.filter(sintoma => sintomasMarcados.includes(sintoma));
            if (sintomasComuns.length > 0) {
                const nivel = (sintomasComuns.length / sintomas.length) * 100;

                let diagnostico;
                if (nivel < 25) {
                    diagnostico = `Baixa chance de <a href="${info.link}">${doenca}</a>, verifique outros sintomas.`;
                } else if (nivel >= 25 && nivel < 50) {
                    diagnostico = `Há chance de contaminação por <a href="${info.link}">${doenca}</a>, verifique os sintomas e os cuidados.`;
                } else if (nivel >= 50) {
                    diagnostico = `Muito provável contaminação por <a href="${info.link}">${doenca}</a>, procure diagnóstico profissional e verifique as formas de cuidado.`;
                }

                diagnosticos.push(diagnostico);
            }
        }

        // Exibir os resultados
        const resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.innerHTML = diagnosticos.map(d => `<p>${d}</p>`).join('');
    });
});
