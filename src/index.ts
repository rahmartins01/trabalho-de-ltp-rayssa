// src/index.ts

import { Ingrediente } from "./models/Ingrediente";
import { Receita } from "./models/Receita";
import { ReceitaDoce } from "./models/ReceitaDoce";
import { Categoria } from "./models/Categoria";
import { RepositorioGenerico } from "./services/RepositorioGenerico";
import { ReceitaService } from "./services/ReceitaService";

function main(): void { //void significa a função não retorna nenhum valor
  try {
    // Cria repositório e serviço
    const repo = new RepositorioGenerico<Receita>();
    const service = new ReceitaService(repo);

    //Criando receitas e ingredientes
    const r1 = new Receita(
      1,
      "Macarrão ao Alho",
      Categoria.SALGADO,
      "Cozinhe o macarrão e refogue no alho."
    );
    r1.adicionarIngrediente(new Ingrediente(101, "Macarrão", "500g"));
    r1.adicionarIngrediente(new Ingrediente(102, "Alho", "3 dentes"));
    r1.adicionarIngrediente(new Ingrediente(103, "Azeite", "2 colheres"));

    const r2 = new ReceitaDoce(2, "Bolo Simples", "Misture e asse por 40 minutos.");
    r2.adicionarIngrediente(new Ingrediente(201, "Farinha", "2 xícaras"));
    r2.adicionarIngrediente(new Ingrediente(202, "Ovos", "3 unidades"));
    r2.adicionarIngrediente(new Ingrediente(203, "Açúcar", "1 xícara"));

    // fazendo o cadastro das receitas
    service.cadastrar(r1);
    service.cadastrar(r2);

    // listando as receitas cadastradas
    service.listar();

    // detalhando uma receita expecifica
    service.detalhar(2);

    // montando a lista de compras  
    const lista = service.gerarListaDeCompras();
    console.log("\n🛒 Lista de compras (agrupada por ingrediente):");
    lista.forEach((quantidades, nome) => console.log(`- ${nome}: ${quantidades.join(" + ")}`));

    // editando a primeira receita "r1"
    const r1Editada = new Receita(
      1,
      "Macarrão ao Alho e Óleo",
      Categoria.SALGADO,
      r1.getModoPreparo()
    );
    r1Editada.adicionarIngrediente(new Ingrediente(101, "Macarrão", "500g"));
    r1Editada.adicionarIngrediente(new Ingrediente(102, "Alho", "4 dentes")); // alterando a quantidade dos ingredientes
    r1Editada.adicionarIngrediente(new Ingrediente(103, "Azeite", "2 colheres"));

    service.editar(1, r1Editada);
    service.detalhar(1);

    // apagando a receita "r2"
    service.excluir(2);
    service.listar();

  } catch (err) {
    console.error("Erro na aplicação:", (err as Error).message);
  }
}

main();
