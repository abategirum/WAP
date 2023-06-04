function sum(numArr){
    const summedData = numArr.reduce((sum,num) => {
        if(num >= 20){
            return sum + num;
            
        }
        return sum;
    },0);
    return summedData;
}

const numbers = [1,34,14,66,12,20];
const result = sum(numbers);
console.log(result);