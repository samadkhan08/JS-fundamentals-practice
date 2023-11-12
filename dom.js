// Dom


// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(class)
const el = document.querySelector('.myclass');
console.log(el);


// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const matches = document.querySelectorAll("p");
console.log(matches);


// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourthPara = document.getElementById("forthP").innerHTML = "Fourth Paragraph"
console.log(fourthPara);

const thirdP = document.getElementsByClassName("thirdPara").innerHTML = "Third Paragraph"
console.log(thirdP);


// Set id and class attribute for all the paragraphs using different attribute setting methods
const attributeSet = document.querySelector('p');
attributeSet.setAttribute("class", "settingclass")
attributeSet.setAttribute("id", "settingId")
console.log(attributeSet)

const thirdpa = document.querySelector(".thirdpara")
thirdpa.setAttribute("id", "thrd")
console.log(thirdpa)


// Change stye of paragraph using JavaScript(eg. color, background, border, fontsize, font-family)
document.getElementById("secondPara").style.color = "white"
document.getElementById("secondPara").style.backgroundColor = "blue"
document.getElementById("secondPara").style.fontSize = "24px"
document.getElementById("secondPara").style.border = "solid 5px black"


// Target the h1 element and change the color for every 2 sec
const colorChanging = document.querySelector('h1')
let hau=true;
setInterval(() =>  {
   
              if(hau){
                  colorChanging.style.color = 'red'
                  hau=false;
              }else{
                colorChanging.style.color = 'black'
                hau=true;
              }
},1000)



     


