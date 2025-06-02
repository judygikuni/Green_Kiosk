document.body.style.backgroundColor = "black";

const heading = document.getElementById('title');

heading.style.color = "green";
heading.style.textAlign = "center";
heading.style.marginTop = "";
heading.style.fontSize = "430%";



const headingThree = document.getElementById('heading-three')
headingThree.style.textTransform = "uppercase";
headingThree.style.textAlign = "center"
headingThree.style.marginTop = "20vh"
headingThree.style.fontSize = "200%"
headingThree.style.color = "green"



const headingVegetables = document.getElementById('heading-vegetables')
headingVegetables.style.textTransform = "uppercase"
headingVegetables.style.textAlign = "center"
headingVegetables.style.marginTop = "20vh"
headingVegetables.style.fontSize = "200%"
headingVegetables.style.color = "green"




const slogan = document.getElementById('slogan');

slogan.style.textAlign = "center"
slogan.style.marginTop = "-40px"
slogan.style.fontSize = "150%"
slogan.style.color = "white"

const fruitList = document.getElementById('fruList')
const newFruit = document.createElement('li')
const textNode = document.createTextNode('Pineapple')
newFruit.appendChild(textNode);

fruitList.appendChild(newFruit);
fruitList.style.marginLeft = "90vh"
fruitList.style.color = "white"


const vegetableList = document.getElementById('vegList');
const newVegetable = document.createElement('li')
const vegNode = document.createTextNode('Cabbage')
newVegetable.appendChild(vegNode);

vegetableList.appendChild(newVegetable);
vegetableList.style.marginLeft = "90vh"
vegetableList.style.color = "white"

