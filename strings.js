// let frase = '  Olá Mundo  ';
// console.log(frase.toLowerCase());
// console.log(frase.toUpperCase());
// console.log(frase.trim());
// console.log(frase.trimStart());
// console.log(frase.trimEnd());
// alert(frase.repeat(200));

// let frase2 = 'Olá Mundo';
// console.log(frase2[3]); //  
// console.log(frase2.length); // 9

// console.log(frase2[0]); // o
// console.log(frase2[7]); // d
// console.log(frase2.at(-2)); //  d
// console.log(frase2.at(2)); // á

// let texto = 'Lógica de Programação em JavaScript';
// console.log(texto.includes('JavaScript'));

// let a = texto.startsWith("Lógica");
// console.log(a);

// let b = texto.endsWith("Script");
// console.log(b);

let frase3 = "O gato viu o gato";
console.log(frase3.replace('gato', 'cachorro')); // O cachorro viu o gato
console.log(frase3.replaceAll('gato', 'cachorro')); // O cachorro viu o cachorro

// Split

let csv = 'Ana;Bruno;Carla;Diego';
let nomes = csv.split(';');
console.log(nomes); // [ 'Ana', 'Bruno', 'Carla', 'Diego' ]
let apenas2Nomes = csv.split(';', 2);
console.log(apenas2Nomes); // [ 'Ana', 'Bruno' ]
console.log('hello'.split('')); // [ 'h', 'e', 'l', 'l', 'o' ]

// padStart | padEnd

console.log('50'.padStart(5, '50')); // 50550
console.log('olá'.padEnd(10, '.')); // olá.......