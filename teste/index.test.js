import { pegaArquivo } from '../cli.js'

test('deve ser uma funcao', () => {
    expect(typeof pegaArquivo).toBe('function')
});

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')    
    })
})