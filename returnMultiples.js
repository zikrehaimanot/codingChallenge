// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.



function multiples(m, n){
  let arr = [];
  for(let i = 1; i<=m; i++){
    arr.push(n * i)
  }
  return arr;
}
