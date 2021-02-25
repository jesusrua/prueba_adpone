// Escribe una función que dado un input "aaaabbbbbcca" devuelva un output: [["a", 4], ["b", 5], ["c", 2], ["a", 1]]

const countConsecutives = (string)=>{
    const result = []
    const finalResult = []

  for (let i = 0; i < string.length; i++ ) {
    
    if(string[i] === string[i-1]) {
      result[0] = string[i] 
      result[1]++
    } else if ( string[i] !== string[i-1]){
      result[0] = string[i] 
      result[1] = 1
    } 
    
    finalResult.push(result.slice(0))
    
  }
  console.log(finalResult)
  const finalResultFiltered = []
  
 
  for(let i=1; i<finalResult.length; i++) {
    if(finalResult[i][0] !== finalResult[i-1][0]) {
      finalResultFiltered.push(finalResult[i-1])
    }
  }
   finalResultFiltered.push(finalResult[finalResult.length - 1])

 return finalResultFiltered
  
}