function s(input) {

    let i = 0 ;
    
    let primes = 0 ;
    let nonprimes = 0 ;
  
    while (input[i] !== "stop") {
  
      let num = Number(input[i]) ;
  
      if (num < 0) {
        console.log("Number is negative.") ;
      }
  
      
      if (num <= 1) {
        i++ ;
        continue ;
      }
   
      
      if (num <= 3) {
        i++ ;
        primes += num ;
        continue ;
      }
      
      if (num % 2 == 0 || num % 3 == 0) {
        nonprimes += num ;
        i++ ;
        continue ;
      }
   
      for (var j=5; j*j <= num; j=j+6) {
         if (num % j == 0 || num %(j+2) == 0) {
           nonprimes += num ;
           break ;
         }
      }
   
      primes += num ;
      i++ ;
  
     }
  
     console.log(`Sum of all prime numbers is: ${primes}`) ;
     console.log(`Sum of all non prime numbers is: ${nonprimes}`) ;
  
  }