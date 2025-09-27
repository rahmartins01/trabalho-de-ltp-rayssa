export class Ingrediente {
    private nome: string;
    private quantidade: string;
  
    constructor(nome: string, quantidade: string) {
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
  
    public exibirIngrediente(): void {
      console.log(`- ${this.quantidade} de ${this.nome}`);
    }
  }
  