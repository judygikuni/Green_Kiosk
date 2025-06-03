document.body.style.backgroundColor = "white";

const heading = document.getElementById('title');

heading.style.color = "green";
heading.style.textAlign = "center";

heading.style.fontSize = "430%";



const headingThree = document.getElementById('heading-three')
headingThree.style.textTransform = "uppercase";
headingThree.style.marginLeft = "50vh"
headingThree.style.marginTop = "20vh"
headingThree.style.fontSize = "200%"
headingThree.style.color = "green"



const headingVegetables = document.getElementById('heading-vegetables')
headingVegetables.style.textTransform = "uppercase"
headingVegetables.style.marginTop = "20vh"
headingVegetables.style.fontSize = "200%"
headingVegetables.style.color = "green"
headingVegetables.style.marginLeft = "50vh"




const slogan = document.getElementById('slogan');

slogan.style.textAlign = "center"
slogan.style.marginTop = "-40px"
slogan.style.fontSize = "150%"
slogan.style.color = "black"

const fruitList = document.getElementById('fruList')
const newFruit = document.createElement('li')
const textNode = document.createTextNode('Pineapple')
newFruit.appendChild(textNode);

fruitList.appendChild(newFruit);
fruitList.style.marginLeft = "40vh"
fruitList.style.color = "black"
fruitList.style.listStyleType = "none"
fruitList.style.marginTop = "-5vh"


const vegetableList = document.getElementById('vegList');
const newVegetable = document.createElement('li')
const vegNode = document.createTextNode('Cabbage')
newVegetable.appendChild(vegNode);

vegetableList.appendChild(newVegetable);
vegetableList.style.marginLeft = "50vh"
vegetableList.style.color = "black"
vegetableList.style.listStyleType = "none"


const button = document.getElementById('buy-fruits');

button.style.background = 'none';
button.style.border = 'none';
button.style.backgroundColor = 'green';
button.style.padding = '12px 16px';
button.style.borderRadius = '5px';
button.style.color = 'white';
button.style.fontSize = '100%';
button.style.cursor = 'pointer';
button.style.marginLeft = '43vh';
button.style.marginTop = '5vh';

button.addEventListener('click', () => {
    button.textContent = 'Buy Now';
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
})

button.onmouseover = () => {

    headingThree.textContent = "Fresh and Clean";
    headingThree.style.color = "red"
}

const vegetableButton = document.getElementById('buy-vegetables');

vegetableButton.style.background = 'none';
vegetableButton.style.border = 'none';
vegetableButton.style.backgroundColor = 'green';
vegetableButton.style.padding = '12px 16px';
vegetableButton.style.borderRadius = '5px';
vegetableButton.style.color = 'white';
vegetableButton.style.fontSize = '100%';
vegetableButton.style.cursor = 'pointer';
vegetableButton.style.marginLeft = '50vh';
vegetableButton.style.marginTop = '4vh';

vegetableButton.addEventListener('click', () => {
    vegetableButton.textContent = 'Buy Now';
    vegetableButton.style.backgroundColor = 'white'
    vegetableButton.style.color = 'black'
})

vegetableButton.onmouseover = () => {

    headingVegetables.textContent = "Fresh and Clean";
    headingVegetables.style.color = "red"
}