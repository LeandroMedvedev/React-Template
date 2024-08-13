Desenvolva uma função chamada **filtrarDisponiveis** que receba um array de objetos representando produtos, onde cada produto tem uma propriedade disponivel que é um booleano. A função deve retornar um novo array contendo apenas os produtos que estão disponíveis.

Exemplo de uso:

Entrada:

```js
const produtos = [
  { nome: "Laptop", disponivel: true },
  { nome: "Tablet", disponivel: false },
  { nome: "Smartphone", disponivel: true },
];
```

Saída

```js
[
  { nome: "Laptop", disponivel: true },
  { nome: "Smartphone", disponivel: true },
];
```
