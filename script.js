// Fade In

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));



// Cherry Blossom Petals

const container=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=(6+Math.random()*8)+"s";

petal.style.opacity=Math.random();

petal.style.transform=`scale(${0.5+Math.random()})`;

container.appendChild(petal);

setTimeout(()=>{

petal.remove();

},15000);

}

setInterval(createPetal,250);
