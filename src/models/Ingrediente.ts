import { BaseEntity } from "./BaseEntity";

export class Ingrediente extends BaseEntity {
  private nome: string;
  private quantidade: string;

  constructor(id: number, nome: string, quantidade: string) {
    super(id);


     // Validação 
    if (!nome || !quantidade) {
      throw new Error("Ingrediente inválido: nome e quantidade são obrigatórios.");
    }

    this.nome = nome;
    this.quantidade = quantidade;
  }

  public getNome(): string {
    return this.nome;
  }

  public getQuantidade(): string {
    return this.quantidade;
  }

  public toString(): string {
    return `${this.quantidade} de ${this.nome}`; // ex.: "2 colheres de açúcar"
  }
}

