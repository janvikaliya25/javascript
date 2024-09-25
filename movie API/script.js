


fetch(`https://imdb-top-100-movies.p.rapidapi.com/`,{
    method: 'GET',
	headers: {
		'x-rapidapi-key': 'c0f6da3df5msh8248084634d7df3p134bbbjsn1054fb3aa096',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
})
.then((res)=>{
    return res.json()
})
.then((res)=>{
   document.getElementById("main").innerHTML=view(res)
})
.catch((err)=>{
    console.log(err)
})



function view(movie){
    
    return movie.map((el,i)=>{
        return `

    <div id="post">
        <div><img src="${el.image}" alt=""></div>
        <h4>Title:${el.title}</h4>
        <p id="info">
        <span>Rating:${el.rating}</span>
        <span>year:${el.year}</span>
        </p>
    </div>

    `
    }).join("")
}