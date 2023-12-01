var images = [
  "./projectimage/offers/of-1.jpg",
  "./projectimage/offers/of-2.jpg",
  "./projectimage/offers/of-3.jpg",
  "./projectimage/offers/of-4.jpg",
  "./projectimage/offers/of-5.jpg"
  
];
var h = [
  "10% Off on Analog Watches!",
  "Exclusive Deals HandBags!",
  "20% Off on Women's Tops!",
  "Sale On Sports Shoes!",
  "Brand NEW Grab Now!"
];
var pa1 = [
  "Exclusively Avaliable on RedStore",
  "Best Deals on RedStore",  
  "latest Avaliable on RedStore",
  "Best Deals on watches",
  "Sales on Wears RedStore"
  

];
var as=["Explore Now→","Check Now→","Explore Now→","Check Now→","Explore Now→"]
const img = document.getElementById("img");
const par1 = document.getElementById("p1");
const heading = document.getElementById("h1");
const link =document.getElementById("a1")
var index = 0;
function next() {
  if (index == images.length - 1) index = 0;
  else index++;

  img.src = images[index];
  par1.textContent = pa1[index];
  heading.textContent = h[index];
  link.textContent = as[index];

}

function previous() {
  if (index == 0) index = images.length - 1;
  else index--;

  img.src = images[index];
  par1.textContent = pa1[index];
  heading.textContent = h[index];
  link.textContent = as[index];

}
var time = setInterval(next, 2000);
function playpause(num) {
  if (num == 1) {
    clearInterval(time);
  } else {
    time = setInterval(next, 2000);
  }
}

const menuitem = document.getElementById("item")
const card1=document.getElementById("card")
card1.addEventListener("click",()=>{
  menuitem.classList.toggle("hide")
})