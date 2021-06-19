
export const queryV3Pool = async () => {
    //format query
    var walletAddress = '0xFe21cD83736FA6CAc6336689342778A3663fFB45';
    walletAddress = walletAddress.toLowerCase();
    const fetchString = 'https://openapi.debank.com/v1/user/protocol?id='+ walletAddress + '&protocol_id=uniswap3';
    
    //get http request
    var response = await fetch(fetchString);
    var responseObj = await response.json();
    console.log("Uniswap LP NFT Query: ", responseObj);
    
}  