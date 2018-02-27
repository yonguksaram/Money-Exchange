// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
    money.H = Math.floor(currency/50);
    money.Q = Math.floor((currency-money.H*50)/25);
    money.D = Math.floor((currency-money.H*50-money.Q*25)/10);
    money.N = Math.floor((currency-money.H*50-money.Q*25-money.D*10)/5);
    money.P = Math.floor(currency%5);
    for (let item in money) {
      if (money[item]<=0) {delete money[item]}
    };
    return money;
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
