const PrivateKeyConnector = require("connect-privkey-to-provider");
const NETWORK_ID = "1001";
const GASLIMIT = "20000000";
const URL = `https://api.baobab.klaytn.net:8651`;
const PRIVATE_KEY =
  "0xe84cc9393b1b8ee3cd3a171bb1c21ec59a30d663431a32415cf043d427c942c1";

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null
    }
  }
};
