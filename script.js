const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";

    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * 18).toFixed(0);

        text += letter[random];
    }

    return text;
}

const generatePara = () => {
    const numOfWords = Number(input.value);
    const para = document.createElement("p");

    let data = " ";
    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 25).toFixed(0);

        data += generateWord(randomNumber);
        data += " ";
    }
    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
}