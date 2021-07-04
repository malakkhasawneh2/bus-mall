'use strict'

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image')
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 25;
let totalClicks = 0;
// let views = []

function Product(name, imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', './img/pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.png');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('water-can', './img/water-can.jpg');
new Product('wine-glass', './img/wine-glass.jpg');

let leftIndex;
let middleIndex;
let rightIndex;

function randomImage(){
  leftIndex = generateRandomIndex();  
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();  
console.log(leftIndex,middleIndex,rightIndex);

  while(leftIndex ===  middleIndex || leftIndex === rightIndex || middleIndex === rightIndex){
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();  
    console.log(leftIndex,middleIndex,rightIndex);
    Product.allProducts[leftIndex].views++;
    Product.allProducts[middleIndex].views++;
    Product.allProducts[rightIndex].views++;

  }

  leftImageElement.src = Product.allProducts[leftIndex].imgPath;
  middleImageElement.src = Product.allProducts[middleIndex].imgPath;
  rightImageElement.src = Product.allProducts[rightIndex].imgPath;
                                       

}

randomImage();




leftImageElement.addEventListener('click',handleClick);
middleImageElement.addEventListener('click',handleClick);
rightImageElement.addEventListener('click',handleClick);
function handleClick(event){
    totalClicks ++ ;
  if(maxAttempts >= totalClicks){
          if(event.target.id === 'left-image'){
            Product.allProducts[leftIndex].votes++;
            Product.allProducts[leftIndex].views++;

          }else if(event.target.id ==='middle-image'){
            Product.allProducts[middleIndex].votes++;
            Product.allProducts[middleIndex].views++;

          }else if(event.target.id ==='right-image'){
            Product.allProducts[rightIndex].votes++;
            Product.allProducts[rightIndex].views++;

          } 

          randomImage();
  }else{
      let btn = document.createElement("button");
      btn.innerHTML = "View Results";
      btn.addEventListener('click',renderList)
      document.body.appendChild(btn);
  }
}


function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i < Product.allProducts.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Product.allProducts[i].name} has this number of votes ${Product.allProducts[i].votes} and this number of views ${Product.allProducts[i].views}`   
  }
  leftImageElement.removeEventListener('click',handleClick);
  middleImageElement.removeEventListener('click',handleClick);
  rightImageElement.removeEventListener('click',handleClick);
}



function generateRandomIndex(){
    return Math.floor(Math.random() * Product.allProducts.length);
}
