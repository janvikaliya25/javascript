function add(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
                return res.json()
        })
        .then((res)=>{
                document.getElementById("img").innerHTML=`<img src="${res.message}"/>`
        })
        .catch((err)=>{
                console.log(err)
        })
}add()