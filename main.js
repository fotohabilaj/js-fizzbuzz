//contare da 1 a 100, log che dice fizz sui multipli di 3 ebuz su quelli di 5
//fizzbuzz su quelli di 15
//elementi necessari for, if else, n%3;5;15==0, log

for(let i=1; i<101; i++){
    if(i % 3==0){
        if(i % 5==0){
            console.log(i,'fizzbuzz');
            
        }else{
           console.log(i, 'fizz'); 
        }
           
    } else if(i % 5==0){
        
           console.log(i, 'buzz'); 
           
    }

    console.log(i);
    
}