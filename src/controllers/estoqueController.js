// Responsável por renderizar a página de estoque
function renderizarPaginaEstoque(request, response) {
  response.render("estoque");
}

// Responsável por renderizar a página de cadastro de produto
function renderizarPaginaProduto(request, response) {
  response.render("criarProduto");
}

module.exports = {
  renderizarPaginaEstoque,
  renderizarPaginaProduto,
};
