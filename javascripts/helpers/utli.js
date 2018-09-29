
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

    // //all the functions you want to export can live here
    // const monkeyButt = () => {
    //     console.log(hi);
    // }

  export {printToDom}

  