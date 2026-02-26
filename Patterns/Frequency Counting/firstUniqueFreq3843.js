/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
  if (!nums.length) return -1;
  let freq = {};
  for (let n of nums) {
    freq[n] = freq[n] ? freq[n] + 1 : 1;
  }
  let freqCount = {};
  for (let key in freq) {
    let count = freq[key];
    freqCount[count] = freqCount[count] ? freqCount[count] + 1 : 1;
  }
  for (let n of nums) {
    if (freqCount[freq[n]] === 1) {
      return n;
    }
  }
  return -1;
};
