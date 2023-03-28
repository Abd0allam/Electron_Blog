//==============================Sliders=======================================
//===================images arrays=====================0
var imgArray0 = new Array();var imgArray1 = new Array();var imgArray2 = new Array();var imgArray3 = new Array();
imgArray0[0] = new Image();
imgArray0[1] = new Image();
imgArray0[2] = new Image();
imgArray0[0].src = '1.png';
imgArray0[1].src = '2.png';
imgArray0[2].src = '3.png';
imgArray1[0] = new Image();
imgArray1[1] = new Image();
imgArray1[2] = new Image();
imgArray1[0].src = '1.png';
imgArray1[1].src = 'l2.png';
imgArray1[2].src = 'l3.png';
imgArray2[0] = new Image();
imgArray2[1] = new Image();
imgArray2[2] = new Image();
imgArray2[0].src = '2.png';
imgArray2[1].src = 's1.png';
imgArray2[2].src = 's2.png';
imgArray3[0] = new Image();
imgArray3[1] = new Image();
imgArray3[2] = new Image();
imgArray3[0].src = '3.png';
imgArray3[1].src = 'm1.png';
imgArray3[2].src = 'm2.png';

var img;
var imgArray;

function forward()
{   

    img = document.getElementById("img");
    imgArray =imgArray0

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i == Number(imgArray.length)-1){
                document.getElementById("img").src = imgArray[0].src;
                break;
            }else{
                document.getElementById("img").src = imgArray[i+1].src;
                break;               
            }
        }
    }
}

function back()
{
    img = document.getElementById("img");
    imgArray =imgArray0

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i == 0){
                document.getElementById("img").src = imgArray[imgArray.length-1].src;
                break;
            }else{
                document.getElementById("img").src = imgArray[i-1].src;
                break;               
            }
        }
    }
}
var int=setInterval(() => {
  forward();
}, 2000);
//====================================================================================================================
//===================================Display elements============
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const container = document.getElementById('items-container');
let btn;

function addBtns(imgArray) {
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    const img = document.createElement('img');
    img.src = imgArray[i].src;
    img.id = `im1`;

    const p = document.createElement('p');
    p.textContent = `Description for item ${i + 1}`;

    btn = document.createElement('button');
    btn.textContent = 'Add Item';
    btn.id = `${i}`;

    box.appendChild(img);
    box.appendChild(p);
    box.appendChild(btn);
    container.appendChild(box);
  }
}

b1.addEventListener('click', () => addBtns(imgArray1));

b2.addEventListener('click', () => addBtns(imgArray3));

b3.addEventListener('click', () => addBtns(imgArray2));

//====================================================================================================
//=================================cart===========================
const cont = document.getElementById("items-container");
const info = document.getElementById("cart-count");

cont.addEventListener("click", (event) => {
  const clickedBtn = event.target;
  if (clickedBtn.tagName === "BUTTON" && /^(\d{1})$/.test(clickedBtn.id)) {
    const img = clickedBtn.parentNode.querySelector("img");
    const existingContent = info.innerHTML;
    const newContent = `<img src="${img.src}"width="200px" height="150px">`;
    info.innerHTML = existingContent + newContent;
  }
	let count = parseInt(document.getElementById("cart-contin").textContent);
	count++;
	document.getElementById("cart-contin").textContent = `${count}`;
});