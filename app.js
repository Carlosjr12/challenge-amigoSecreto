let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo){
        listaDeAmigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        listaDeAmigosAtualizados();
    } else{
        alert('Por Favor, digite um nome !!!!')
    }
}

function listaDeAmigosAtualizados(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaDeAmigos.forEach(function(amigo){
        let listaItem = document.createElement('li');
        listaItem.textContent = amigo;
        lista.appendChild(listaItem);
    });
}

function sortearAmigo(){
    if(listaDeAmigos.length < 2){
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function configurarEventoEnter() {
    let input = document.getElementById('amigo');
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
};

configurarEventoEnter();
