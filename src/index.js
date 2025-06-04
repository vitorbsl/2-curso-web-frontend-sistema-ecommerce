const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 }
];

let carrinho = [];
let continuar = true;

while (continuar) {
  let produtoEscolhido = prompt("Qual produto você deseja comprar? (Camisa, Calça, Sapato, Boné)");

  let produtoEncontrado = produtosDisponiveis.find(
    p => p.nome.toLowerCase() === produtoEscolhido.toLowerCase()
  );

  if (produtoEncontrado) {
    let quantidade = parseInt(prompt(
      `O produto ${produtoEncontrado.nome} custa R$${produtoEncontrado.preco}\nQuantas unidades deseja adicionar ao carrinho?`
    ), 10);

    if (!isNaN(quantidade) && quantidade > 0) {
      carrinho.push({
        nome: produtoEncontrado.nome,
        preco: produtoEncontrado.preco,
        quantidade
      });
      alert(`${quantidade} unidade(s) de ${produtoEncontrado.nome} adicionadas ao carrinho!`);
    } else {
      alert("Quantidade inválida!");
      continue;
    }

    continuar = confirm("Deseja adicionar mais produtos?");
  } else {
    alert("Produto inválido! Tente novamente.");
  }
}

if (carrinho.length > 0) {
  let resumo = "Produtos no carrinho:\n";
  let total = 0;

  carrinho.forEach((item, index) => {
    let subtotal = item.preco * item.quantidade;
    resumo += `${index + 1}. ${item.nome} - R$${item.preco} x ${item.quantidade} = R$${subtotal}\n`;
    total += subtotal;
  });

  resumo += `\nValor total da compra: R$${total}`;
  alert(resumo);
} else {
  alert("Nenhum produto foi comprado.");
}
