/* O meu erro no antigo codigo foi não entender bem o conceito de matrizes
e tentar utilizar uma forma bem complexa de se fazer manipulando arrays, porem
o meu aprendizado foi que as arrays são ponteiros que mesmo sendo declarada uma
nova variavel com o conteúdo do array, o original ainda vai ser modificado
devido a logica dos ponteiros */
/* Indo para a solução correta agora, um array bidimensional proporiona que
este exercicio seja feito de forma correta. Utilizando o for cada vez que passa
pelo primeiro for é adicionado 1, e o segundo for é adicionado até sair da condição dele
sendo assim voltando para o primeiro for e adicionando mais 1 com o segundo for sendo zerado
devido a condição e o codigo rodando assim até que o primeiro for satisfaçã a condição
de montagem da matriz, vendo o codigo fica bem mais claro, observe. */

const cordinates = (pair) => {
  const intervals = [];
  for (i = 0; i <= pair[0]; i++) {
    for (j = 0; j <= pair[1]; j++) {
      intervals.push([i, j]);
    }
  }
  console.log(intervals);
};

cordinates([-3, -3]);
