const substrings = (str) => {
  const res = [];
  for (let i = 1; i < str.length + 1; i++) {
    let j = 0;
    while (j  + i < str.length + 1) {
      const sub = str.slice(j, j + i);
      res.push(sub);
       j++;
    }
  }
  return res;
};
//arr = ["cab","ad","bad","c"]

var shortestSubstrings = function(arr) {
    
    let res = [];
   
    //traverse the arr and find the substrings for each word 
    //while doing this check the first coming substring in the rest of the str
    for(let i = 0; i < arr.length; i++){
        const substr= substrings(arr[i]).sort();
        console.log(substr)
        //[c, a, v, ca, ab, cab]
        
        const rest= arr.reduce((str, word, id) => {
            return id !== i ? str = str + word + " " : str+="";
        }, "")
        console.log(rest)
        let j = 0;
        let present = false;
        while(j < substr.length){
            if(!rest.includes(substr[j])){
                res.push(substr[j])
                present = true;
                break;
            }
            j++;
        }
        if(!present){
            res.push("")
        }
       
    }
    return res;

};
// console.log(substrings("bad"));
console.log(shortestSubstrings(["abc","bcd","abcd"]))