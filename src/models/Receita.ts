
//classe da receita
export class Receita {

//atributos
private titulo: string;
private categoria: string;
private modoPreparo: string;

constructor(titulo: string, categoria: string, modoPreparo: string){
this.titulo = titulo;
this.categoria = categoria;
this.modoPreparo = modoPreparo;
}

//mostrar informações
public exibirReceita(): void {
    console.log(`Receita: ${this.titulo}`);
    console.log(`Categoria: ${this.categoria}`);
    console.log(`Modo de Preparo: ${this.modoPreparo}`);
}

}