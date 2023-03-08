var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest(); //cria um objeto responsável por fazer uma requisição HTTP com o Javascript

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //configura a nossa requisição para ser do tipo GET para o site

    xhr.addEventListener("load", function(){ //quando for concluida a requisição, fazer algo
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(); //JSON é um tipo de texto, JSON.parser vai pegar o texto e te devolver como array
            pacientes.forEach( function(){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
        }
        });
        
    xhr.send(); 

});
