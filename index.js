//recebe um par ordenado (x,y) e retorna um array de pares (x,y)
//cada um deles possui x e y menor ou igual ao par recebido em ordem crescente
//pelo que entendi o y é aumentado até ele dar o número que confere a entrada dele
//depois ele aumenta 1 no x e volta a aumentar o y até novamente chegar ao
//mesmo número que confere a entrada, e assim até os dois números conferirem
//a entrada
// eu quero que faça o teste se o segundo elemento do array num é igual o segundo elemento
//do array interval que foi o que eu criei, assim aumentar ele até que sejam iguais
// depois vai pra outro if que vai zerar este segundo elemento do interval e adicionar 1 ao primeiro
//elemento do interval
// o outro if vai testar se o primeiro elemento do interval já está igual o do num
const interval = [[5,3]];
interval.push([0, 0]);
const cordinates = (num) => {
  do {
    if (interval[interval.length - 1][1] != num[1]) {
      const y = [...interval];
      interval.push(y[y.length - 1]);
      interval[interval.length - 1][1] += 1;
    } else if (interval[interval.length - 1][0] != num[0]) {
      interval[interval.length - 1][0] += 1;
      interval[interval.length - 1][1] = 0;
      console.log('ola mundo')
    } else {
     
    }
    console.log(interval);
  } while (
    interval[interval.length - 1][0] != num[0] &&
    interval[interval.length - 1][1] != num[1]
  );
};

cordinates([2, 2]);
