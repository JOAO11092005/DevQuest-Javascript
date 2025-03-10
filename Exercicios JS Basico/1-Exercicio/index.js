let nome = prompt("Digite o seu nome ");

function menssagem(nome){
    if(nome === ""){
        nome = "Quester";
    }else if(nome === null){
        nome = "Quester";
    }
    window.alert('Seja bem vindo(a) '+nome ,'!');
    console.log(nome);
}

menssagem(nome);