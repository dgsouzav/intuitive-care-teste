const fs = require('fs')

const allFileContents = fs.readFileSync('src/teste.csv', 'latin1')

const lines = allFileContents.split(/\r?\n/)
const arrayOfObjects = []

for (let i = 3; i < lines.length - 1; i++) {
    const line = lines[i]
    const lineArray = line.split(';')

    const obj = {
        registro_ans: lineArray[0].replace(/"/g, ''),
        cnpj: lineArray[1].replace(/"/g, ''),
        razao_social: lineArray[2].replace(/"/g, ''),
        nome_fantasia: lineArray[3].replace(/"/g, ''),
        modalidade: lineArray[4].replace(/"/g, ''),
        logradouro: lineArray[5].replace(/"/g, ''),
        numero: lineArray[6].replace(/"/g, ''),
        complemento: lineArray[7].replace(/"/g, ''),
        bairro: lineArray[8].replace(/"/g, ''),
        cidade: lineArray[9].replace(/"/g, ''),
        uf: lineArray[10].replace(/"/g, ''),
        cep: lineArray[11].replace(/"/g, ''),
        ddd: lineArray[12].replace(/"/g, ''),
        telefone: lineArray[13].replace(/"/g, ''),
        fax: lineArray[14].replace(/"/g, ''),
        endereco_eletronico: lineArray[15].replace(/"/g, ''),
        representante: lineArray[16].replace(/"/g, ''),
        cargo_representante: lineArray[17].replace(/"/g, ''),
        data_registro_ans: lineArray[18].replace(/"/g, ''),
    };
    arrayOfObjects.push(obj)
}
console.log(arrayOfObjects)
module.exports = arrayOfObjects