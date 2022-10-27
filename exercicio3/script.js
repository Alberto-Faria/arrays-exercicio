// criando 3 arrays e clonando

const casa = ["cama", "mesa", "sofa", 5, "cozinha"]
const casaOriginal = casa;
const casaCopia = casaOriginal;

console.log(casa);
console.log(casaOriginal);
console.log(casaCopia);

// adicionando iten aos arrays

casa.unshift(4);
console.log("mostrando item adicionado", casa, casaOriginal, casaCopia);

// removendo o ultimo item

casaOriginal.pop();
console.log("mostrando item removido  ", casa, casaOriginal, casaCopia);

// removendo o segundo item
casaCopia.splice(1, 1);
console.log("mostrando item excluido", casa, casaOriginal, casaCopia);




// agora com arrays diferentes....sem ser copias

const casa1 = ["cama", "mesa", "sofa", 5, "cozinha"]
const casa2 = ["cama", "mesa", "sofa", 5, "cozinha"]
const casa3 = ["cama", "mesa", "sofa", 5, "cozinha"]

console.log(casa1);
console.log(casa2);
console.log(casa3);

// adicionando iten aos arrays

casa1.unshift(4);
console.log("mostrando item adicionado", casa1, casa2, casa3);

// removendo o ultimo item

casa2.pop();
console.log("mostrando item removido  ", casa1, casa2, casa3);

// removendo o segundo item
casa3.splice(1, 1);
console.log("mostrando item excluido", casa1, casa2, casa3);