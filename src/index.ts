import { Receita } from "./models/Receita";
import { Categoria } from "./models/Categoria";
import { ReceitaService } from "./Services/ReceitaService";

// Criando o serviço
const receitaService = new ReceitaService();

// Criando receitas
const macarrao = new Receita(
  "Macarrão",
  Categoria.SALGADO,
  "Adicione o macarrão na panela e cozinhe por 20 minutos."
);

const bolo = new Receita(
  "Bolo de Chocolate",
  Categoria.DOCE,
  "Misture os ingredientes e asse no forno por 40 minutos."
);

// Cadastrando receitas no serviço
receitaService.cadastrar(macarrao);
receitaService.cadastrar(bolo);

// Listando receitas cadastradas
receitaService.listar();


// Editando uma receita
const boloEditado = new Receita(
  "Bolo de Cenoura",
  Categoria.DOCE,
  "Misture os ingredientes e asse no forno por 35 minutos."
);
receitaService.editar(1, boloEditado);

// Listando novamente para ver a edição
receitaService.listar();

// Excluindo a primeira receita
receitaService.excluir(0);

// Listando de novo
receitaService.listar();
