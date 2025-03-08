
let image = [
    "https://cdn.pixabay.com/photo/2023/09/11/16/44/roses-8247285_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/06/19/18/rose-2378156_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/06/15/03/rose-blossom-8369834_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/10/27/07/37/pink-2893502_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/08/21/22/19/rose-1610932_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/05/24/22/47/rose-782513_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/09/28/13/17/pink-rose-7485056_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/18/19/28/rose-4776198_640.jpg"
]

let i = 0;
document.querySelector("#img").innerHTML=`<img src=${image[i]} style="hight:300px;width:100%;">`

let btn1=document.querySelector("#next")
let btn2=document.querySelector("#prev")

btn1.addEventListener("click",incress)
btn2.addEventListener("click",decress)

function incress(){
    if (i < image.length - 1) {
        i++;
    }
    else {
        i=0
    }
document.querySelector("#img").innerHTML=`<img src=${image[i]} style="hight:300px;width:100%;">`
}

function decress() {
    if (i > 0) {
        i--;
    }
    else {
        i = image.length - 1;
    }
    document.querySelector("#img").innerHTML=`<img src=${image[i]} style="hight:300px;width:100%;">`
}

