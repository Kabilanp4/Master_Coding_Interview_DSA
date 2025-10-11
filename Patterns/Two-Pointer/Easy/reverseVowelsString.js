//Strings are immutable
function reverseVowels (s) {
    const set = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    s = s.split("");
    let left = 0;
    let right = s.length -1;
    while(left < right){
        if(set.has(s[left]) && set.has(s[right])){
            [s[left],s[right]] =[s[right],s[left]];
            left++;
            right--;
        }else if (set.has(s[left])){
            right --;
        }else{
            left ++;
        }
    }
     return s.join("");
};
const result = reverseVowels ("IceCreAm");
console.log("result",result);