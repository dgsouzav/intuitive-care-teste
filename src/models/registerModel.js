const mongooose = require('mongoose'); 
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    registroAns: Number,
    cnpj: Number,
    razaoSocial: String,
    nomeFantasia: String,
    modalidade: String,
    logradouro: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    uf: String,
    cep: Number,
    ddd: String,
    telefone: String,
    fax: String,
    enderecoEletronico: String,
    representante: String,
    cargoRepresentante: String,
    dataRegistroAns: Date,
});

const register = mongooose.model('register', registerSchema);

module.exports = register;