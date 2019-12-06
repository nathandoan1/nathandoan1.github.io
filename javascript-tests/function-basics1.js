window.onload = () => {
    const simple = document.getElementById('simpleFunctionDisplay');
    const functionCallAction = document.getElementById('functionCallAction');

    function simple() {
        console.log("functions should consist of statements designed to perform a single task.")
        simpleFunctionDisplay.textContent = "simple";
    }


    const functionParametersDisplay = document.getElementById('functionParametersDisplay')

    function functionParameters(value) {
        console.log(value);
    }
    functionParameters("Many functions take parameters.");

    function functionReturn(addResult) {
        return "the add function returned " + addResult;
    }

    functionCallsAction.onclick = () => {
        console.log(simple())
    }

    
}