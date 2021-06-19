import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../private/onboard_api';


let web3;

export const onboard = Onboard({
    dappId: API_KEY,
    networkId: 1,  
    subscriptions: {
      wallet: wallet => {
         web3 = new Web3(wallet.provider)
      }
    }
});

export const logAddress = async () => {
    var accounts = await web3.eth.getAccounts();
    console.log("Accounts: " + accounts);
}