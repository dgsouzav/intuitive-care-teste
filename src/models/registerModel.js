const express = require('express');
const mongooose = require('mongoose'); 
const Schema = mongooose.Schema;

const registerSchema = new Schema({
    registroAns: {
        type: String,
        required: false
    },
    cnpj: {
        type: String,
        required: false
    },
    razaoSocial: {
        type: String,
        required: false
    },
    nomeFantasia: {
        type: String,
        required: false
    },
    modalidade: {
        type: String,
        required: false
    },
    logradouro: {
        type: String,
        required: false
    },
    numero: {
        type: String,
        required: false
    },
    complemento: {
        type: String
    },
    bairro: {
        type: String,
        required: false
    },
    cidade: {
        type: String,
        required: false
    },
    uf: {
        type: String,
        required: false
    },
    cep: {
        type: String,
        required: false
    },
    ddd: {
        type:String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    fax: {
        type: String,
        required: false
    },
    enderecoEletronico: {
        type: String,
        required: false
    },
    representante: {
        type: String,
        required: false
    },
    cargoRepresentante: {
        type: String,
        required: false
    },
    dataRegistroAns: {
        type: String,
        required: false
    },
});

const register = mongooose.model('Register', registerSchema);

module.exports = register;