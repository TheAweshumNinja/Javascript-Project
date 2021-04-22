const getFilms= () =>{
    return fetch('https://ghibliapi.herokuapp.com/films')
           .then(res => res.json())
}


const createFilmDiv = (film) =>{
    const filmContainer= document.createElement('div')
    const title= document.createElement('p')
    const description = document.createElement('p')
    const originalTitle = document.createElement('p')
    const species = document.createElement('p')
    const location = document.createElement('p')
    const searchBtn= document.createElement('button')

    title.innerText= film.title
    description.innerText= film.description
    filmContainer.append(title, description, originalTitle, species, location, searchBtn)
    return filmContainer
}
getFilms().then((film) => {
    const filmDiv = createFilmDiv(film)
    console.log(filmDiv)

})
function addingEventListener(){
    const searchBtn = document.getElementById('search-button');
    searchBtn.addingEventListener('click', function(event){
        
    })

}