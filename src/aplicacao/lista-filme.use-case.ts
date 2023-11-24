import FilmeRepositorioInterface from "./filme-repositorio-interface";

export default class ListaFilme{
    //Construtor
    constructor(
        readonly filmeRepositorio:FilmeRepositorioInterface
    ){}
    //executar
    public async executar(){
        return await this.filmeRepositorio.listar()
    }
}