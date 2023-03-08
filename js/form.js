var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();  //event.preventDefault permite vc segurar uma ação padrão do html

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //.reset vc reseta aquele objeto
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; //.innerHTML vc pega todo o HTML interno daquele objeto

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){ //forEach é tipo um for, porém vc simplifica conseguidno pegar separadamente cada objeto
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value, //form.peso.value pega os valores do forms
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); //.createElement crai qlqr tag html
    pacienteTr.classList.add("paciente"); //classList vc disponibiliza a lista de classes. .add vc adiciona algo novo 

   
    //adicionando o paciente à tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //appendChild coloca um elemento dentro do outro, um filho dentro de um pai
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco!"); //.push vc coloca um valor novo dentro de um array
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco!")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco!")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco!")
    }

    return erros;
}