function parseValue(value) {
    return parseFloat(value.replace(',', '.'));
}

function calc_simples() {
    let juros = parseValue(document.getElementById("juros-simples").value);
    let capital = parseValue(document.getElementById("capital-simples").value);
    let taxa = parseValue(document.getElementById("taxa-simples").value);
    let tempo = parseValue(document.getElementById("tempo-simples").value);
    let mensagem = '';
    let montante = capital + juros;
    
    if (!isNaN(capital) && !isNaN(taxa) && !isNaN(tempo)) {
        juros = (capital * taxa * tempo) / 100;
        mensagem = `O valor do juros calculado foi: ${juros.toFixed(2)}. O montante foi: ${montante.toFixed(2)}. `;
    } else if (isNaN(capital) && !isNaN(juros) && !isNaN(taxa) && !isNaN(tempo)) {
        capital = (juros * 100) / (taxa * tempo);
        montante = capital + juros;
        mensagem = `O valor do capital calculado foi: ${capital.toFixed(2)}. O montante foi: ${montante.toFixed(2)}. `
    } else if (isNaN(taxa) && !isNaN(juros) && !isNaN(capital) && !isNaN(tempo)) {
        taxa = (juros * 100) / (capital * tempo);
        mensagem = `O valor da taxa calculada foi: ${taxa.toFixed(2)}%. O montante foi: ${montante.toFixed(2)}. `;
    } else if (isNaN(tempo) && !isNaN(juros) && !isNaN(capital) && !isNaN(taxa)) {
        tempo = (juros * 100) / (capital * taxa);
        mensagem = `O valor do tempo calculado foi: ${tempo.toFixed(2)}. `;
    } else {
        mensagem = `Confira se todos os campos foram inseridos corretamente.`;
        
    }

    

    document.getElementById("resultado-simples").innerText = mensagem;
    document.getElementById("resultado-simples").style.display = "block";
}

function calc_composto() {
    let capital = parseValue(document.getElementById("capital-composto").value);
    let taxa = parseValue(document.getElementById("taxa-composto").value) / 100;
    let tempo = parseValue(document.getElementById("tempo-composto").value);
    let montante = parseValue(document.getElementById("montante-composto").value);
    let mensagem = '';

    // Calcular o que estiver faltando
    if (!isNaN(capital) && !isNaN(taxa) && !isNaN(tempo) && isNaN(montante)) {
        montante = capital * Math.pow((1 + taxa), tempo);
        let juros = montante - capital;
        mensagem = `O valor do montante calculado foi: ${montante.toFixed(2)}.}.`;
    } else if (!isNaN(montante) && !isNaN(taxa) && !isNaN(tempo) && isNaN(capital)) {
        capital = montante / Math.pow((1 + taxa), tempo);
        let juros = montante - capital;
        mensagem = `O valor do capital calculado foi: ${capital.toFixed(2)}.}.`;
    } else if (!isNaN(montante) && !isNaN(capital) && !isNaN(tempo) && isNaN(taxa)) {
        taxa = Math.pow(montante / capital, 1 / tempo) - 1;
        let juros = montante - capital;
        mensagem = `A taxa de juros calculada foi: ${(taxa * 100).toFixed(2)}%.}.`;
    } else if (!isNaN(montante) && !isNaN(capital) && !isNaN(taxa) && isNaN(tempo)) {
        tempo = Math.log(montante / capital) / Math.log(1 + taxa);
        let juros = montante - capital;
        mensagem = `O tempo calculado foi: ${tempo.toFixed(2)} anos.}.`;
    } else {
        mensagem = `Confira se todos os campos foram inseridos corretamente.`;
    }

    document.getElementById("resultado-composto").innerText = mensagem;
    document.getElementById("resultado-composto").style.display = "block";
}

function limparSimples() {
    document.getElementById("resultado-simples").style.display = "none";
    document.getElementById("juros-simples").value = '';
    document.getElementById("capital-simples").value = '';
    document.getElementById("taxa-simples").value = '';
    document.getElementById("tempo-simples").value = '';
}

function limparComposto() {
    document.getElementById("resultado-composto").style.display = "none";
    document.getElementById("capital-composto").value = '';
    document.getElementById("taxa-composto").value = '';
    document.getElementById("tempo-composto").value = '';
    document.getElementById("montante-composto").value = '';
}