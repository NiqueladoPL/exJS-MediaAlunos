
function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Pedro", notas: [9, 8],

    media: calcMedia
}

var aluno1 = {
    nome: "Ana", notas: [5, 7],

    media: calcMedia
}

var aluno2 = {
    nome: "Claudio", notas: [10, 8],

    media: calcMedia
}

var aluno3 = {
    nome: "Paula", notas: [4, 6],

    media: calcMedia
}

var aluno4 = {
    nome: "Afonso", notas: [5, 2],

    media: calcMedia
}

console.log(aluno.nome + " - " + aluno.media());
console.log(aluno1.nome + " - " + aluno1.media());
console.log(aluno2.nome + " - " + aluno2.media());
console.log(aluno3.nome + " - " + aluno3.media());
console.log(aluno4.nome + " - " + aluno4.media());