function addNumbers(num1, num2){
    var sum=0;

    for (let i = 0; i < arguments.length; i++){
        const num = arguments [i];
        sum = sum + num;
    }
    
    function logInfo(message){
        console.log(message);
    }
    logInfo('Good Morning');

    var double = sum * 2;


    return double;
}

var result = addNumbers(3, 5, 8, 15);
console.log(result);