var isIsogram = (word) => {
    
    if(typeof word == "undefined" || typeof word !== 'string' || word.length <= 0){
        return false;
    }else{
        
        var wordLen = word.length;
        var word = word.toLowerCase();

        for(let i = 0; i < wordLen; i++){
            for(let j = 0; j < wordLen-1; j++){
                if(i != j){
                    if(word[i] == word[j]){
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

var longestWord = (str) => {
    
    if(typeof str !== "undefined" && typeof str == 'string' && str.length > 0){

        var words = str.split(' ');
        var longestWord = '';

        for(let word of words){
            if(word.length > longestWord.length){
                longestWord = word;
            }
        }
        return longestWord;
    }
}

var power = (a,b) => {

    if(b === 0){
        return 1;
    }else{
        return a === 0? 0 : a*power(a, b-1);
    }
}

var mySort = (nums) => {
    //floor all decimal numbers
    const floored = nums.map(num => Math.floor(num));

    //eliminate all non-numeric characters and return odd numbers 
    var odd = floored.filter(num => {
        return !isNaN(num) && num % 2 !== 0;
    });

    //eliminate all non-numeric characters and return even numbers
    var even = floored.filter(num => {
        return !isNaN(num) && num % 2 === 0;
    });

    //ascending sorting of odd numbers
    odd.sort((a,b) => a-b);

    //ascending sorting of even numbers
    even.sort((a,b) => a-b);

    //merge the odd array and the even array
    return odd.concat(even);
}

var removeDuplicate = (str) => {
    if(typeof str !== "undefined" && typeof str == 'string' && str.length > 0){

        let words = str.toLowerCase().split('');
        let uniqChar = [];
        let checkedChar = [];

        for( let word of words){
            if(checkedChar.indexOf(word) == -1){
                if(words.lastIndexOf(word) == words.indexOf(word)){
                    uniqChar.push(word);
                    checkedChar.push(word);                    
                }else{
                    checkedChar.push(word);
                }
            }
        }

        return { unique: checkedChar.sort().join('').replace(/[^a-zA-Z ]/g, ""), duplicates: words.join("").length - checkedChar.length };
    }
}

class ShoppingCart{
  constructor(){
      
      this.items = {};
      this.total = 0;
  }
  
  addItem(itemName, quantity, price){
    
    this.items[itemName] = quantity;
    this.total += (quantity * price);
    
}

removeItem(itemName, quantity, price){
    var prevQuantity =  this.items[itemName];
    if(prevQuantity){
      if(prevQuantity >= quantity){
        var currentQuantity = prevQuantity - quantity;
        this.items[itemName] = currentQuantity;
        this.total -= (quantity * price);
    }
    else{
      delete this.items[itemName];
      this.total -= (prevQuantity * price);   
  }
  
}
}

checkout(cashPaid){
    var balance;
    if(cashPaid >= this.total){
      balance = (cashPaid - this.total);
  }
  else
  {
      balance = "Cash paid not enough";
  }
  return balance;
}

}


class Shop extends ShoppingCart{
  
  constructor(){
    super();
    this.quantity  = 100;
}

removeItem(){
    --this.quantity;
}
}