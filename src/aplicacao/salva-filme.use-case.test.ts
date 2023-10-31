import {test,expect,describe} from 'vitest'

import SalvaFilme from './salva-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'

describe("Testando salva filmes use case",()=>{
    test("Deve salvar um filme",()=>{
        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(BancoEmMemoria)
        const input = {
            id:1,
            titulo:"test",
            descricao:"test",
            imagem:"test"
        }
        const resultado = salvaFilme.execute(input)
        expect(resultado).toEqual(input)
    })
})

type Input = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
type Output = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}