require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar public install only forget siege'; 
let testAccounts = [
"0x36185bb05ceca84f9a53b9b28ebce10e8a3cba092e4686ee213769759137d571",
"0xa83110c3b8d284b2715a0e832826f57e76bc927a0b2c3c9f441c824c2d981a4f",
"0x39d7c2d8a302da9d46915a23884c20ad2cf191f29aad54208f63250ae85afd74",
"0x4c36613751473f1c22a3b9abf3edf7298b6944fb11a3859241942f5cd5ec96ae",
"0xcf4865a0eb17875fe13c5b41b66550fdc5b5406f71a547c04a3e758dfafd4f5c",
"0x7f481479e2a4cc5fe07e3a12e199e82b39d42b0fd7b08d2cce7579b2fd34ee29",
"0x7be1e25d841f337a5735680b32f9279fe9988f9ddcc77a8f95bc432a5566f305",
"0xda8f0f0750f4da379d79a9af3c33040529716264844d4812ffc9535819120976",
"0x377092eee006aa2e40223d9f2bdd8d4a3476306a3dece14c3143a88e6c1e2ebc",
"0x3fd9d85ea2f5703fe581f3cc5b8325521567e71b959737c07135f5526a3be78c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


