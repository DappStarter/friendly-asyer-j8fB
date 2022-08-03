require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain common just clog metal gate'; 
let testAccounts = [
"0x71de3a23b02f71aa6645fcf02a132dbb342836fd4805a1cb5f7a13bf870a33ec",
"0x20ac6b66b6876bd4bc352f956a04c0ea8544cb4ee5b927f0d8ee02d89acbb6ac",
"0xa1e97edfcdfffb0caf860248a6cf02768b050446e54dccd995cdaa8360528593",
"0x0466a6190bd1a4d3b3f7eb630e4d6cdf39335570462c5da89d335f01de7f51f4",
"0x0167ad5d6e369a716c485b56951246c3d24bc5cfb2117aa8c1ee15ccc4ae2174",
"0x654a6678ec74848e36a4c27ed80c010d51a747ff5dd0e9a70dd815d071b36922",
"0xff6aa9846cbadc39e97f2c778953cfd8dcf83c6a2b72bbd86a54f177a1b5eac5",
"0x2bc9146291a542d9443bfec242492f1045b988f688b29fc3acafa0a84ffb13a3",
"0xc0b381b90d6824c979b05fb80e58d4b97490794b40fac7e9f918924069951c79",
"0x591a69302aa47b4d0586c8ed8b025bbd727385d752cec7f2180b80a82b2005e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

