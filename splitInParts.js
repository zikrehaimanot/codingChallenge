// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)



var splitInParts = function(s, partLength){
  let store = ''
  let count = -1
  for(let i = 0; i < s.length ; i++){
    count++
    if(count % partLength === 0){
      store += " "
    }
    store += s[i]
  }
  return store.trim()
}
