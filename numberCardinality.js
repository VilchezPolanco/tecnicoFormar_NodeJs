function number_cardinality(number) {
    let ultimoNumero = number % 10;
    
    if (ultimoNumero === 0) {
      return "zero";
    } else if (ultimoNumero === 5) {
      return "five";
    } else if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  console.log(number_cardinality(100)); 
  console.log(number_cardinality(88)); 
  console.log(number_cardinality(155)); 
  console.log(number_cardinality(99)); 