import { IEntidade } from "../models/Entidade";

export class RepositorioGenerico<T extends IEntidade> {
  private itens: T[] = [];  // array interno de itens

  public cadastrar(item: T): void {
    if (!item) throw new Error("Item inválido.");
    const existe = this.itens.some(i => i.id === item.id);
    if (existe) throw new Error("Item com esse ID já cadastrado.");
    this.itens.push(item);
  }

  public editar(id: number, novoItem: T): void {
    if (!novoItem) throw new Error("Item inválido para edição");
    const idx = this.itens.findIndex(i => i.id === id);
    if (idx === -1) throw new Error("Item não encontrado para editar.");
    this.itens[idx] = novoItem;
  }

  public excluir(id: number): void {
    const original = this.itens.length;
    this.itens = this.itens.filter(i => i.id !== id);
    if (this.itens.length === original) throw new Error("Item não encontrado para exclusão.");
  }

  public listar(): T[] {
    return [...this.itens];  // retorna cópia da lista
  }

  public buscarPorId(id: number): T | undefined {
    return this.itens.find(i => i.id === id);
  }
}

