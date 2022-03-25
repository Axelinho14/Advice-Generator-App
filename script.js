const resNum = document.getElementById("number");
const resAdv = document.getElementById("device");

const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    getAdvice();
});

window.onload = () => {
    getAdvice();
};

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Advice = adviceData.slip;
        resNum.innerHTML = `ADVICE #${Advice.id}`;
        resAdv.innerHTML = `"${Advice.advice}"`;
    }).catch(error => {
        console.log(error);
    });
}