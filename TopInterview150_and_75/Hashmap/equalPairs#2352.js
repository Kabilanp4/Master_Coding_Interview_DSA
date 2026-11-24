/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  if (!grid || !grid.length) return [];
  let map = new Map();
  let count = 0;
  // store all the row frequencies
  for (let i = 0; i < grid.length; i++) {
    const strArr = grid[i].join(",");
    const mapVal = map.get(strArr);
    map.set(strArr, mapVal ? mapVal + 1 : 1);
  }
  // check the row - column pair and count the frequencies if the colum matches with the row
  for (let i = 0; i < grid.length; i++) {
    let str = "";
    for (let j = 0; j < grid.length; j++) {
      str += (j === 0 ? "" : ",") + grid[j][i];
    }
    if (map.has(str)) {
      count += map.get(str);
    }
  }
  return count;
};
