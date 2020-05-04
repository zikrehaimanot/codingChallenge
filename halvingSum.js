

// Given a positive integer n, calculate the following sum:



function halvingSum(n) {
  let score = 0
  while( n >= 1){
    score += n
    n = Math.floor(n/2)
  }
  return score
}
