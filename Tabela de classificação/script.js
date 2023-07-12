var danilo = {
    nome: "Danilo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var carlosEdu = {
    nome: "Carlos Eduardo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var jogadores = [danilo, carlosEdu];
exibeJogadoresNaTela(jogadores);

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";

    for(var i = 0; i < jogadores.length; i++) {    
        elemento += "<tr>"; //Table Row - linha da tabela
        elemento += "<td>" + jogadores[i].nome + "</td>"; //Table Data - coluna da tabela
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i +")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}