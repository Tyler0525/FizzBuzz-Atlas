// display amesage to the user
function getValue() {
    alert("hello App");
}
//Program Entry Point


function getValues2() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check to see if they are in fact an Integer //
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // generate a list of numbers 
        let numbers = generateNumbers(fizzValue, buzzValue);
        displayData(numbers);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Intergers are allowed for FizzBuzz'
        })
    }
}

function generateNumbers(fizzValue, buzzValue) {
    let returnArray = [];
    let isFizz = false
    let isBuzz = false
    for (let i = 1; i <= 100; i++) {


        // fizzValue = 3
        // buzzValue = 5
        isFizz = i % fizzValue == 0;
        isBuzz = i % buzzValue == 0;
        if (isFizz && isBuzz) {
            returnArray.push('fizzBuzz');
        } else if (isFizz) {
            returnArray.push('fizz');
        } else if (isBuzz) {
            returnArray.push('buzz');
        } else
         {
            returnArray.push(`${i}`);
        }
    }
    return returnArray;
}

//Display the Values to the page 
function displayData(fbData) {
    let contentDiv = document.getElementById("results");
    let content = "";

    // Clear previous Data 
    contentDiv.innerHTML = "";

    for (let i = 0; i < fbData.length; i++) {
        let dataValue = fbData[i];
        let datatElement = `<div class="col ${dataValue}">${dataValue}</div>`
        content += datatElement;
    }
    //Write the results tot the page
    contentDiv.innerHTML = content
}