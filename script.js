
//Mostrar no console: Nome - Nota1 - Nota2 - Media - Situacao (Aprovado/Reprovado)

var nomes = ["Pedro", "João", "Ana", "Paulo", "Roberta", "Maria"];
var notasA = [9.0, 4.0, 7.5, 5.5, 3.0, 8.0];
var notasB = [7.5, 4.5, 7.0, 6.5, 7.5, 1.0];
var notasC = [8.0, 6.5, 6.0, 8.5, 5.5, 7.5];
var notasD = [10.0, 8.5, 7.5, 7.0, 6.5, 5.5];

 function media(n1,n2,n3,n4){
     return (n1 + n2 + n3 + n4)/4;
 }

function situacao(media){
    
    if(media>=6){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

 for(var index in nomes){
    
    var alunos = nomes[index];
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var nota3 = notasC[index];
    var nota4 = notasD[index];

    var result = media(nota1, nota2, nota3, nota4);

    console.log(alunos + " - " +
            nota1 + " - " + 
            nota2 + " - " +
            nota3 + " - " +
            nota4 + " - " + 
            result + " - " +
            situacao(result));
 }
