//Identify_Prime...

let number = 18;

let  count = 0;
    
    for(let i=1 ; i<=number ; i++){
        
        if(number % i == 0){

            count++;
        }

    } if(count == 2){
        
        console.log("Yes");

    }else{

        console.log("No");

    }