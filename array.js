// let alunos = [
//     {id: 1, nome: 'Ana', nota: 6.0},
//     {id: 2, nome: 'Bruna', nota: 5.0},
//     {id: 3, nome: 'Jorge', nota: 7.0},
// ];


// Concat

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arraysUnidos = array1.concat(array2);
console.log(arraysUnidos);

let arraysUnidos2 = array2.concat(array1);
console.log(arraysUnidos2);

// Join

console.log(arraysUnidos.join()); 
console.log(arraysUnidos.join( ' | ')); 
console.log(arraysUnidos.join('  ,  ')); 
console.log(arraysUnidos.join(' é antecessor de ')); 