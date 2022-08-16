//ELEMENTOS NECESSÁRIOS
/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração*/
/*console.log("Pratica Guiada I");

let numero = Number(prompt("Digite um número para somar ou 0 para sair"))
let soma=0
while(numero!==0){
soma=soma+numero
console.log(soma);
console.log(numero);
numero = Number(prompt("Digite um número para somar ou 0 para sair"))
}
console.log("SOMA=",soma);*/

/*console.log("Pratica Guiada II");
const num = +prompt('Digite um numero')
for(let i=0;i<=num ;i++){
    console.log(i);
};*/
/*console.log("Prática Guiada III");

const listaDeNumero =[2,4,6,8,10,12,14]

for(let i=0;i<listaDeNumero.length;i++){

console.log(`O número do indice ${i} é ${listaDeNumero[i]}`);
}
console.log("FIM");*/

console.log("Fixação")
//Parte 1
let user = prompt('Por favor coloque seu "tipo" de usuário sendo \n"A":Administrador; \n"B": Usuário comun; \n"C":Usuário assinante.').toUpperCase();

while ( user !=='A'){
    alert("Acesso Negado");
    user = prompt('Por favor coloque seu "tipo" de usuário sendo \n"A":Administrador; \n"B": Usuário comun; \n"C":Usuário assinante.').toUpperCase();
};
alert("Boas vindas, admin!");
//Parte 2
for (i=0;i<=20;i+=2){
    console.log(i)
};
//solução daniel
let tabuada = 0
for (let i=1;i<=10;i++){
    console.log(2*i)
}
console.log("Execício 2 do bruno hammes");
let tabu = Number(prompt("Digite o numero para criar a tabuada"))
while (isNaN(tabu)) {
    tabu = Number(prompt("Numero invalido tente novamente"))
}
let mult = 0
for (let i = 1; i <= 10; i++) {
    mult =  tabu * i
    console.log(`${tabu} * ${i} = ${mult}`)
    console.log("-".repeat(20))
}
console.log("=".repeat(20))
for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${2 * i}`)
};

//parte 3
const arrayString = ["arroz","alface","feijão","carne"]
for (n=0;n<arrayString.length;n++){
    console.log(arrayString[n].toUpperCase())
};
