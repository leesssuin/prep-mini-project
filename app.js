const getCodeText = document.querySelector("h1");
const clickButton = document.querySelector("button");


function gethex() {
    const codeNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  
    let result = "#";

    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * codeNumbers.length);
      result += codeNumbers[random];
    }

    return result;
  }

function click() {
    const hexCode = gethex();

    document.body.style.backgroundColor = hexCode;
    getCodeText.innerText = `HEX COLOR : ${hexCode}`;
}

clickButton.addEventListener("click", click);
