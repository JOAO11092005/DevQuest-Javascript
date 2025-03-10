/*
Operadores:

== ---- igual ---- a == b ---- verdadeiro se for igual a b
=== ---- identico ---- a === b ---- verdadeiro se for identico a b
!== ---- não identico ---- a !== ---- não identico A e B
!= ---- a é defienete de b -----

< ---- menor que ---- a é menor que b 
<= ---- menor igual que ---- a é menor ou igual a b 
> ---- maior que ---- a é maior que b 
>= ---- maior ou igual que ---- a é maior ou igual a b 


*/

// const a = 3;
// const b = "3";
// console.log(a != b); 



const a = 2;
const b = 2;

// Nessa operção pra dar verdadeirto tem que dar true nas duas condições.
console.log(a === b && a <= b);
// vai retronar verdadeiro
console.log(a !== b && a <= b);
//vai retronar falso


/*
|| = OR significa "ou" . Cada resultado se uma das condições der verdadeiro retorna true;
*/

console.log(a === b || a < b);
//retrona verdadeiro
console.log(a < b || a > b);
//retrona falso

/*
NOT =  A espressão !(inverte a resposta) oque era verdadeiro se torna falso ou falso para verdadeiro 
*/

console.log(!(a === b));// retrona falso pois é verdadeiro.