import { MaterialLeitura } from "./materialLeitura";

class Livro implements MaterialLeitura {
    titulo:string;
    autor:string;
    numeroPagina: number

    constructor(titulo:string, autor: string, numeroPagina:number) {
        this.autor = autor
        this.titulo = titulo
        this.numeroPagina = numeroPagina
    }

    exibirDetalhe(): void {
        console.log(`Nome do livro: ${this.titulo},
        Autor: ${this.autor},
        Número de páginas: ${this.numeroPagina}`)
    }
}

class Revista implements MaterialLeitura {
    titulo:string;
    autor: string;
    edicao: number;

    constructor(titulo:string, autor: string, edicao:number) {
        this.autor = autor
        this.titulo = titulo
        this.edicao = edicao
    }
    
    exibirDetalhe(): void {
        console.log(`Nome da revista: ${this.titulo},
        Autor: ${this.autor},
        Edição: ${this.edicao}`)
    }
}

class Artigo implements MaterialLeitura {
    titulo:string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo:string, autor: string, dataPublicacao:Date) {
        this.autor = autor
        this.titulo = titulo
        this.dataPublicacao = dataPublicacao
    }
    
    exibirDetalhe(): void {
       console.log(`Nome do artigo: ${this.titulo},
        Autor: ${this.autor},
        Data de publicação: ${this.dataPublicacao}`)
    }
}

const novoLivro = new Livro('ABC', 'Maria', 200)

const novaRevista = new Revista('Caras', 'João', 2020)

const novoArtigo = new Artigo('Saúde Primária', 'Márcio', new Date(2021,11,3))

novoLivro.exibirDetalhe()
novaRevista.exibirDetalhe()
novoArtigo.exibirDetalhe()