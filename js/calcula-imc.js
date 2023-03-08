var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente") //querySelectroAll pega todas as informações, diferente do querySelector que pega só a primeira

for (var i = 0; i < pacientes.length; i++){ //pacientes.length mostra a quantidade de elementos em pacientes

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido.");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); //classList dá acesso a todas as classes do código e add adiciona tal classe ao código
    }

    if(!alturaEhValida){
        console.log("Altura inválida.");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc; 
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);//toFixed(n° de casas deciamis que quer)
}
