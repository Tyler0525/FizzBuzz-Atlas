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
        displayNumbers(fbData);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Intergers are allowed for BuzzFizz'
        })
    }
}

function generateNumbers(fizzValue, buzzValue) {
    let returnArray = [];
    let isFizz = false
    let isBuzz = false
    for (let i = 1; i <= 100; i++) {


        // fizzValue = 3 
        isFizz = index % fizzValue == 0;
        isBuzz = index % buzzValue == 0;
        if (isFizz && isBuzz) {
            returnNumbers.push('fizzBuzz');
        } else if (isFizz) {
            returnNumbers.push('fizz');
        } else if (isBuzz) {
            renturnNumbers.push('buzz')
        } else {
            returnNumbers.push(index);
        }
        return returnArray;
    }
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