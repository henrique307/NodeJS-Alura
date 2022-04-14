// o import não ta sendo reconhecido porque index.test.js não é um  módulo aparentemente. Resolve

import chalk from "chalk"

// daqui pra baixo funciona 

test('deve ser uma funcao', () => {
    expect(typeof chalk).toBe('function')
});