// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  
    let money = {};
    if (currency>10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"}};
    if (currency<0) {return {}};
    let coins = {
      H:50, 
      Q:25, 
      D:10, 
      N:5, 
      P:1
    };
    for (var key in coins) {
      money[key] = Math.floor(currency/coins[key]);
      money[key] == 0 ? delete money[key] : currency = currency%coins[key];
    };

    return money;
}
