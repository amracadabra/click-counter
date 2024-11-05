const counterDisplay=document.getElementById('counterDisplay');
const incrementButton=document.getElementById('incrementButton');
const resetButton=document.getElementById('resetButton');
let count=0;
function incrementCount(){
    count++;
    counterDisplay.textContent=count;
}
incrementButton.addEventListener('click', incrementCount);
function resetCount(){
    count=0;
    counterDisplay.textContent=count;
}
resetButton.addEventListener('click', resetCount);

