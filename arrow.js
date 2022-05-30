// function doubleIt(num){
//     return num*2;
// }

// 

const doubleIt = num => num*2;
const add = (x,y) => x +y;
const give5 = () => 5;

const result = doubleIt(10);
console.log(result);
const result2 = add(50,70);
console.log(result2);

const result3 = give5();
console.log(result3);

const mathDo =(x,y) => {
    sum = x+y;
    diff = x-y;
    const result4 = sum* diff;
    return result4;
}
const result5 = mathDo(5,6);
console.log(result5);
