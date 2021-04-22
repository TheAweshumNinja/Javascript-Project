const getFilms= () =>{
    return fetch('https://ghibliapi.herokuapp.com/films')
           .then(res => res.json())
}


const createFilmDiv = (film) =>{
    const filmContainer= document.createElement('div')
    const title= document.createElement('p')
    const description = document.createElement('p')
    
    title.innerText= film.title
    description.innerText= film.description

    filmContainer.append(title, description)

}
getFilms().then((film) => {
    const filmDiv = createFilmDiv(film)
    console.log(filmDiv)
})