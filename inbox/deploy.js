const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic',
    'https://rinkeby.infura.io/v3/44fd46372f1c4a06b95cb1ca25c20b1e'
);
const web3 = new Web3(provider);

const deploy = async () => {

};

deploy();