var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){


    // var alvoEvento = event.target; //.target vc pega quem ta sofrendo o efeito do evento
    // var paiDoAlvo = alvoEvento.parentNode; //.parentNode você pega o pai daquele objeto
    // paiDoAlvo.remove();  //.remove vc remove aquele objeto
    
    //é possível fazer tudo em 1 única linha com: event.target.parentNode.remove()

    event.target.parentNode.classList.add("fadeOut");//faz com que suma esmaecendo

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);//delay de 500ms

    
});
