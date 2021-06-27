/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let groupAnagrams = function(arrWords) {
    if (arrWords.length === 0){
      return arrWords;
   };
   const map = new Map();
   for(let word of arrWords){
      let sorted = [...word];
       
      sorted.sort();
      sorted = sorted.join('');
       
      
      if(map.has(sorted)){
         // key sorted word found, push to map
         map.get(sorted).push(word);
      }else{
         // key = sorted word, value = word
         map.set(sorted, [word])
      };
       
   };
   //return value which is array
   return [...map.values()];

};

let inputArr = ["eat","tea","tan","ate","nat","bat"]
groupAnagrams(inputArr)