// let alunos = [
//     {id: 1, nome: 'Ana', nota: 6.0},
//     {id: 2, nome: 'Bruna', nota: 5.0},
//     {id: 3, nome: 'Jorge', nota: 7.0},
// ];


// Concat

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let arraysUnidos = array1.concat(array2);
// console.log(arraysUnidos);

// let arraysUnidos2 = array2.concat(array1);
// console.log(arraysUnidos2);

// // Join

// console.log(arraysUnidos.join()); 
// console.log(arraysUnidos.join( ' | ')); 
// console.log(arraysUnidos.join('  ,  ')); 
// console.log(arraysUnidos.join(' < ')); 

// Map

// let numeros = [1, 2, 3, 4, 5, 6];
// let dobro = numeros.map(num => num * 2);
// console.log(numeros); 
// console.log(dobro);

// let alunos = [
//         {nome: 'Ana', nota: 6.0},
//         {nome: 'Bruna', nota: 9.0},
//         {nome: 'Jorge', nota: 7.0},
//     ];

//     let nomeAlunos = alunos.map(aluno => aluno.nome);
//     console.log(nomeAlunos);

// // Filter

// let pares = numeros.filter(num => num % 2 === 0);
// console.log(pares);

// let maioresQueCinco = numeros.filter(num => num > 5);
// console.log(maioresQueCinco);

// let impares = numeros.filter(num => num % 2 !== 0);
// console.log(impares);

// let alunosMediaSeis = alunos.filter(aluno => aluno.nota > 6);
// console.log(alunosMediaSeis);

// // Some e Every

// let temImpar = numeros.some( num => num % 2 !== 0);
// console.log(temImpar);
// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares);