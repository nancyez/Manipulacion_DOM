const btn_plus = document.getElementById('btn-count-plus');
const btn_minus = document.getElementById('btn-count-minus');
const p = document.getElementById('contador');

let counter = 0;

p.textContent = counter;

btn_minus.addEventListener('click', async () => {
    await setTimeout(() =>{
        counter--;
        p.textContent = counter;
    }, 1000);
})

btn_plus.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 1000);
});


const timerDisplay=document.getElementById('contador2');
const btn_inicio=document.getElementById('btn-tempo-iniciar');
const btn_detener=document.getElementById('btn-tempo-detener');
const btn_regresiva=document.getElementById('btn-tempo-regresiva');

let seconds=0;
let contador2= "";

function formatoTime (seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return (`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
}