


export const coinsMarket= async()=>{

    try{
        const response= await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        const responsData= await response.json();
        console.log(responsData);
        return {success:true, data: responsData}
    }
    catch(err){
        console.log(err);
        return {success:false}
    }
}