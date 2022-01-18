// display amesage to the user
function getValue() {
        alert("hello App");
}
//Program Entry Point


function getValues2(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if they are in fact an Integer //
if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // generate a list of numbers 
    let numbers = generateNumbers(startValue, endValue);
    displayNumbers(numbers);
} else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Only Intergers are allowed for BuzzFizz'
    })
}
}
    
function generateNumbers(start, end){
    let numbers=[];
    for (let i= start; i<= end; i++){
        numbers.push(i);
    }
    return numbers;
}

function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index ++){
        let number = numbers[index];
        let result = "";

        if (number % 15 == 0){
            result="fizzbuzz";
        }
        else if (number % 5 == 0){
            result="buzz";
        }
        else if (number % 3 == 0){
            result="fizz";
        } else {
            result = number;
        }
        let row = `<tr><td class="${result}">${result}</td></tr>`;
        templateRows += row;
    }

    document.getElementById("result").innerHTML = templateRows;
}
    


  

