let screen = document.getElementById('display');
let keys =document.querySelectorAll('button');
let calceler =[];
keys.forEach(key=>{
    key.addEventListener('click',() => {
    let thisBut =key.innerText;
    if (thisBut !== '=' && thisBut !== 'C' && thisBut !== 'X'){
        screen.value += thisBut;
        calceler.push(thisBut)
    } 
    else if (thisBut === 'C') {
 screen.value = ''
    } 
    else if (thisBut ==='X') {
     calceler.pop();
     screen.value = calceler.join('');
    }
    else if (thisBut === '=') {
   try {
    screen.value = eval(screen.value);
   } catch (error){
    screen.value= "Error"
   }
    }
    
    })
})
