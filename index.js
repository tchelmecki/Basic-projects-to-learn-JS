//COLOR PICKER
const colorPicker = document.querySelector('input');
const demo = document.querySelector('.demo');
const colorContainer = document.querySelector('.colorContainer');

function picker(e){
    const text = e.target.value;
    colorContainer.style.backgroundColor = text;
}

colorPicker.addEventListener('input',picker)

//COUNTER
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const number = document.querySelector('.number');
let a = Number(number.innerHTML);
function minus(){
    a-=1;
    number.innerHTML = String(a);
}

function resetNumber(){
    number.innerHTML = '0';
    a=0;
}

function plus(){
    a+=1;
    number.innerHTML = String(a);
}

decrease.addEventListener('click', minus);
reset.addEventListener('click', resetNumber);
increase.addEventListener('click', plus);

//TO-DO-LIST with arrow function ()=>{}
let taskInput = document.querySelector('.enterSth input');
const add = document.querySelector('.enterSth span');
const taskArea = document.querySelector('.tasks');

add.addEventListener('click',()=>{
    let taskText = taskInput.value;
    if (taskText.trim() !== '') {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let label = document.createElement('label');
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        label.textContent = taskText;
        // taskDiv.textContent = taskText;
        let removeBtn = document.createElement('button');
        removeBtn.innerText = "x";
        removeBtn.classList.add("remove-btn");
        

        
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(removeBtn);
        taskArea.appendChild(taskDiv);
        

        taskInput.value = '';

        removeBtn.addEventListener('click', ()=>{
            taskArea.removeChild(taskDiv);
        })
    }
    
});
