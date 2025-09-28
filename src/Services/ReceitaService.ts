import { RepositorioGenerico } from "./RepositorioGenerico";
import { Receita } from "../models/Receita";
import { Ingrediente } from "../models/Ingrediente";

export class ReceitaService {
  private repo: RepositorioGenerico<Receita>;

  constructor(repo?: RepositorioGenerico<Receita>) {
    this.repo = repo ?? new RepositorioGenerico<Receita>();
  }

  public cadastrar(receita: Receita): void {
    //try pode gerar erro
    try {
      this.repo.cadastrar(receita);
      console.log(`✅ Receita "${receita.getTitulo()}" cadastrada.`);
      //catch trata o erro
    } catch (err) {
      throw new Error(`Erro ao cadastrar receita: ${(err as Error).message}`);
    }
  }

  public listar(): void {
    const todas = this.repo.listar();
    if (todas.length === 0) {
      console.log("Nenhuma receita cadastrada.");
      return;
    }

    console.log("📋 Receitas cadastradas:");
    todas.forEach((r, i) => {
      console.log(`${i + 1}. ${r.getTitulo()} - ${r.getCategoria()}`);
    });
  }

  public excluir(id: number): void {
    try {
      this.repo.excluir(id);
      console.log(`🗑️ Receita ${id} excluída.`);
    } catch (err) {
      throw new Error(`Erro ao excluir receita: ${(err as Error).message}`);
    }
  }

  public editar(id: number, novaReceita: Receita): void {
    try {
      this.repo.editar(id, novaReceita);
      console.log(`✏️ Receita ${id} atualizada.`);
    } catch (err) {
      throw new Error(`Erro ao editar receita: ${(err as Error).message}`);
    }
  }

  public detalhar(id: number): void {
    const r = this.repo.buscarPorId(id);
    if (!r) {
      console.log("Receita não encontrada.");
      return;
    }
    console.log(`\n--- ${r.getTitulo()} ---`);
    console.log(`Categoria: ${r.getCategoria()}`);
    console.log("Ingredientes:");
    r.listarIngredientes().forEach(i => console.log(`- ${i.toString()}`));
    console.log("Modo de preparo:", r.getModoPreparo());
  }

  public gerarListaDeCompras(): Map<string, string[]> {
    const lista = new Map<string, string[]>();
    this.repo.listar().forEach(r => {
      r.listarIngredientes().forEach((i: Ingrediente) => {
        const nome = i.getNome();
        const qtd = i.getQuantidade();
        const arr = lista.get(nome) || [];
        arr.push(qtd);
        lista.set(nome, arr);
      });
    });
    return lista;
  }
}
