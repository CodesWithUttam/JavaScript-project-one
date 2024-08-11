// * Color code


let colorBox = document.getElementById('colorBox');
let colorCode = "1234567890abcdef";
let addColor = document.getElementById('addColor');
let gradientArea = document.getElementById('gradientArea');
let confirmColor = document.getElementById('confirmColor');
let colorItems = document.getElementsByClassName('color-item');
let showData = document.getElementById('showData');
let clearData = document.getElementById('clearData');

const createColorBox = () => {

    const colorGenerator = () =>{
        let color1 = "";
        for (let i = 1; i<=6; i++){
            let items = colorCode[Math.floor(Math.random() * 16)];
            color1 = color1 + items;
        }
        colorItem.innerText = `#${color1}`;
        colorItem.style.background = `${colorItem.innerText}`;
    }

    const removeBox = () => {
        colorItemBox.remove();
    }

    let colorItemBox = document.createElement('div');
    let colorItem = document.createElement('div');
    let colorRemove = document.createElement('div');

    colorItemBox.setAttribute('class','color-item-box')
    colorItem.setAttribute('class','color-item');
    colorItem.setAttribute('id','colorItem');
    colorRemove.setAttribute('class','color-remove');

    colorItem.innerText = '#ffffff';
    colorRemove.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    colorItem.addEventListener('click',colorGenerator);
    colorRemove.addEventListener('click',removeBox);


    colorItemBox.appendChild(colorItem);
    colorItemBox.appendChild(colorRemove);
    colorBox.appendChild(colorItemBox);

}

var range = document.getElementById("range");
var showRange = document.getElementById("showRange");
showRange.innerHTML = `${range.value}deg`;

range.oninput = function() {
  showRange.innerHTML = `${this.value}deg`;
}

const getColor = () => {
    let data = [];
    for (let items of colorItems){
        data = data + `,${items.innerText}`;
    }
    gradientArea.style.background = `linear-gradient(${showRange.innerText}${data})`;
    showData.innerText = `background: ${gradientArea.style.background}`;
    console.log(showRange.innerText);
}

const clearAllData = () =>{
    gradientArea.style.background = "linear-gradient(0deg, rgb(0, 0, 0), rgb(255, 255, 255))";
    showData.innerText = "background: linear-gradient(0deg, rgb(0, 0, 0), rgb(255, 255, 255));";
    colorBox.innerHTML = '';
    range.value = 0;
    showRange.innerText = '0deg';
}

showData.addEventListener('dblclick',()=>{
    navigator.clipboard.writeText(showData.innerText);
    alert('Text Copied')
})

addColor.addEventListener('click',createColorBox)
confirmColor.addEventListener('click',getColor);
clearData.addEventListener('click',clearAllData);










