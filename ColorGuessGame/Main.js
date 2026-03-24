

 // function BrainCheck(){
const randomColor =`#${Math.floor(Math.random() * 360)
    .toString(16).padEnd(6, '7')}`;

    console.log(randomColor)

    document.body.style.backgroundColor = randomColor
const TimerHTML = document.getElementById("timer");
        let seconds = 5
 setTimeout(() => {   ;TimerHTML.innerHTML =--seconds
}, 1000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds
}, 2000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds
}, 3000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds
}, 4000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds

}, 5000);//}
setTimeout(() => {
    seconds = 5
TimerHTML.innerHTML =seconds

}, 6000);
setTimeout(() => {
    
TimerHTML.innerHTML =--seconds

}, 7000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds

}, 8000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds

}, 9000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds

}, 10000);
setTimeout(() => {
TimerHTML.innerHTML =--seconds

}, 11000);


var InputColorPicker = document.getElementById('ColorPicker')
InputColorPicker.addEventListener('input',function GetHEX(){
    const HEXcolorValue  = InputColorPicker.value
    document.getElementById('HEXvalue').textContent = HEXcolorValue
    if (HEXcolorValue>randomColor){
       let doS= document.createElement('h2')
 document.body.append(doS)
 doS.textContent = 'Smaller'
    }
else{
   let doM= document.createElement('h2')
 document.body.append(doM)
 doM.textContent = 'More'
}}
    
)
 