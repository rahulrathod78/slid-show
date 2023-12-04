var arr=["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg","./img/8.jpg","./img/9.jpg",]

var i=0;
const imgDiv= document.querySelector("#img-div")
img=document.createElement("img")

img.src=arr[i]
img.style.width="100%"
img.style.margin="0 auto"

let body=document.querySelector("body")
imgDiv.append(img)


setInterval(()=>{
    i++;
    if(i>arr.length-1){
        i=0
    }
    img.src=arr[i]
},5000)
const next=document.querySelector("#next")
const prev=document.querySelector("#prev")

next.addEventListener("click",()=>{
    i++;
    if(i>arr.length-1){       
        i=0
    }
    img.src=arr[i]
})

prev.addEventListener("click",()=>{
    i--;
    if(i<0){       
        i=arr.length-1
        img.src=arr[i]
    } else {
        img.src=arr[i]
    }
    
})
