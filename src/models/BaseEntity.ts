import { IEntidade } from "./Entidade";

export abstract class BaseEntity implements IEntidade {
  protected _id: number;

  constructor(id: number) {
    this._id = id; // inicializa o id da entidade
  }

  public get id(): number {
    return this._id; // permite ler o id, mas não alterar

  }

  public abstract toString(): string;
}

