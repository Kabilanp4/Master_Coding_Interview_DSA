 function canBeEqual (s1, s2) {
  let slow =0;
  let fast =1;
  let set = new Set();
  s1Arr = s1.split("");
    while(true){
      if(set.has(s1Arr.join("")) && s1 !== s1Arr.join("")){
        return false;
      }else{
        if(fast - slow === 2 && s1[slow] ){
          set.add(s1Arr.join("")); // uouc
          if(s1Arr.join("") === s2){
            return true;
          } else{
           [s1Arr[slow],s1Arr[fast]] = [s1Arr[fast],s1Arr[slow]];
           slow++;
          }
        }
        if(fast === s1Arr.length -1){
          if(s1===s1Arr.join("")){
            return false;
          }
          fast =1;
          slow=0;
        }else{
          fast ++;
        }
      }
    }
};

//Optimal Solution
var canBeEqual = function (s1, s2) {
  if (s1 === s2) return true;
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i] && s1[i] !== s2[(i + 2) % n]) {
      return false;
    }
  }
  return true;
};