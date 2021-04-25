

function getfilms(){
    return fetch("https://ghibliapi.herokuapp.com/films")
    .then(resp => resp.json())
    // .then(json =>{
    //     console.log(json);
    //     json.forEach(film => {
    //         console.log(film.title);
    //         console.log(film.description)
    //     });
    //     // for (const product of json) {
    //     // console.log(product.title);
    //     // buttonElement = document.getElementById("search-button");
    //     // buttonElement.addEventListener('click', () => myFunction(product.title))
    //     }
    //)
}
document.getElementById('search-film-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // let selectedFilm = document.getElementById('film-selection').value
    let searchFilm = document.getElementById('inputValue').value
    // console.log(searchFilm)
    searchFilm = searchFilm.toLowerCase(); 
    // console.log(searchFilm)
    // getfilms()
    // .then(data => filterForTitle(data, selectedFilm))
    // .then(selectedFilmObj => showFilms(selectedFilmObj))
    getfilms()
    .then(data => filterForTitle(data, searchFilm))
    .then(selectedFilmArray => showFilms(selectedFilmArray))
})
function filterForTitle(data, searchFilm){
    const filteredArray = data.filter(data => data.title.toLowerCase().includes(searchFilm));
    // console.log(filteredArray)
    // const selectedFilm = filteredArray[0];
    return filteredArray;
}
// function myFunction(a){
//     searchfilm = document.getElementById("inputValue").value;
//     if (a==searchfilm){
//         alert(searchfilm);
//     }
// }
function showFilms (selectedFilmArray){
    clearFilmContainer();
    const filmContainerDiv = document.getElementById('film-container');
    // console.log(selectedFilmObj);
    /*<
        div>
            <h1>Title</h1>
            <p>Description</p>
            <h3>Release Data</h3>
        </div>
     */
    selectedFilmArray.forEach(film => {
        const createDiv = document.createElement('div');
        const createH2 = document.createElement('h2'); 
        const createH22= document.createElement('h2')
        const createRomTitle = document.createElement('h2')
        const createH3 = document.createElement('h3'); 
        const createP = document.createElement('p');
        createH2.innerText = film.title; 
        createH22.innerText = film.original_title;
        createRomTitle.innerText= film.original_title_romanised;
        createP.innerText = film.description;
        createH3.innerText = film.release_date; 
        createDiv.append(createH2,createH22, createRomTitle, createH3,createP); 
        filmContainerDiv.appendChild(createDiv);
    })
}
function clearFilmContainer(){
    document.querySelector("#film-container").innerHTML ="";
}
// function getFilmData(){
//     let a= document.querySelector('#name');
//     let b= document.querySelector('#description');
//     let c= document.querySelector('#release_date');
//     return{
//         Title: a.value,
//         Release_Date: parseFloatr(c.value),
//         Description: b.value,
//     };
// }
