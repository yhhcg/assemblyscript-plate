/**
 * 斐波那契数列
 * @param {Number} n 
 * @returns 
 */
function fib(n) {
  var a = 0, b = 1
  if (n > 0) {
    while (--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}