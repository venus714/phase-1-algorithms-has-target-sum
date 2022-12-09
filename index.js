function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen={}
  for (const number of array){
    const comp=target-number
    if (comp in seen)return true
  seen[number] = true}
  return false
}
function find(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

function find (object) {
  if (object.sock) return "sock";
}


 
/* 
  Write the Big O time complexity of your function here
*/
  Runtime: O(n^2)
  Space: O(n)
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
