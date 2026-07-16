// 1.

// let frutas = ['banana', 'maçã', 'laranja', 'melancia'];
// console.log(frutas[3]);

// // 2.

// let valoresFatura = [400, 200, 150, 250, 500];
// console.log(`Fatura = R$${valoresFatura[3]}`);

// // 3.

// // let estacionamento = [` | | | \n | | vg \n | | |`];
// // alert(estacionamento);
// // console.log('Vaga livre na: Terceira Coluna \n               Segunda Fileira');

// // 4.

// let mensagens = ['Olá', ' Tudo bem?', ' Bom dia'];
// console.log(`Mensagens antigas: ${mensagens}`);
// mensagens.push('                           Como vai?', ' Voce está ai?');
// console.log(`mensagens atualizadas: ${mensagens}`);

// // 5.

// let editorTexto = ['O rato', ' roeu a roupa', 'do rei', 'de roma'];
// console.log(editorTexto);
// editorTexto.pop(3);
// console.log(editorTexto);

// 6.

// let filaAtendimento = ['pessoa1', 'pessoa2', 'pessoa3', 'pessoa4', 'pessoa5'];
// console.log(filaAtendimento);
// filaAtendimento.shift(0);
// console.log(filaAtendimento);
// filaAtendimento.unshift('pessoaUrgente!');
// console.log(filaAtendimento);

// 9.

// let jogosDoDia = ['Jogo 1: Basquete', 'Jogo 2: Futebol', 'Jogo 3: Vôleibol', 'Jogo 4: Tênis de Mesa', 'Jogo 5: Handebol'];
// let jogos = jogosDoDia.slice(0, 3);
// console.log(jogos);

// 10.

// let codigoRastreio = ['444947', '287122', '176489', '965046'];
// let codigoRastreio2 = prompt('Insira o código de rastreio:');
// if (codigoRastreio2.includes('176489')) {
//         console.log('Código presente');
//     } else {
//         console.log('Código não presente');
    // }

// 11.

// let funcionariosPorSetor = [
//     {id: 1, setor: 'limpeza', nome: 'Vinicius'},
//     {id: 2, setor: 'comunicação', nome: 'Guilherme'},
//     {id: 3, setor: 'tecnologia', nome: 'Marvilon'},
// ];

// let encontrar = funcionariosPorSetor.find(funcionario => funcionario.setor === 'tecnologia');
// console.log(encontrar);

// 15.

// let valores = [12, 65, 26, 74, 67];
// console.log(valores);
// let valoresOitoPorcento = valores.map(val => val % 8);
// console.log(valoresOitoPorcento);

// 16.

// let pedidosDoCliente = [
//     {pedido: 'Celular Samsung S25 Ultra', preço: 'R$: 5479,00', status: 'pendente'},
//     {pedido: 'Bicicleta Elétrica', preço: 'R$: 3679,00', status: 'concluido'},
//     {pedido: 'Coleção de Livros: Franz Kafka', preço: 'R$: 199,00', status: 'pendente'},
//     {pedido: 'Almoda Astolfo: Tam. Real', preço: 'R$: 499,90', status: 'concluido'},
// ];

// let concluidos = pedidosDoCliente.filter(pedidos => pedidos.status === 'concluido');
// let pendentes = pedidosDoCliente.filter(pedidos => pedidos.status === 'pendente');
// console.log(concluidos);
// console.log(pendentes);

// 20.

// let emailsClientes = 'pedrinhogamer@GMAIL.COM, JAOpauloPLINIO@GMAIL.com, DEImiSSONVIniCIus@gmail.com';
// console.log(emailsClientes.toLowerCase());

// 21.

// let textosClientes = '          Olá tudo bem com você ?      ';
// console.log(textosClientes.trim());
// console.log(textosClientes.trimStart());

// 23.

let arquivosEmPdf = 'Arquivo1';
let a = arquivosEmPdf.endsWith(".pdf");
console.log(a);