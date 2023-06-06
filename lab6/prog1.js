function printNumbers(from,to){
 const intervalId = setInterval(() => {
        console.log(from);
        if(from == to){
         clearInterval(intervalId);
        }
        from++;
 }, 1000);
 
    
}

printNumbers(5,15);
