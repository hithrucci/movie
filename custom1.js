//---------------------------------------------
// DOM 요소/API
//---------------------------------------------
let movieBoard = document.querySelector("#movieBoard");
let nowTitle = document.querySelector("h2");
let apikey = "56e4c11af3a58be9818d461a54ab6e64";

//---------------------------------------------
// movie 함수(api가져오기)
//---------------------------------------------
movie = async (lists) => {
  //   console.log("movie");
  //   console.log(lists);
  let url = `https://api.themoviedb.org/3/movie/${lists}?api_key=${apikey}&language=ko-BR`;
  let response = await fetch(url);
  let data = await response.json();
  //   console.log(data);
  let movieList = data.results;
  console.log(movieList);
  render(movieList);
};
movie("now_playing");

//---------------------------------------------
// render 함수(화면에 보이기)
//---------------------------------------------
render = (movieList) => {
  //   console.log(movieList);
  movieBoard.innerHTML = "";
  movieList.forEach((movie) => {
    console.log(movie.title);
    card = `
  <div>
  <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}">
  <h3>${movie.title}</h3>
  </div>
  `;
    nowTitle.textContent = "제목";
    //movieBoard에 card삽입(누적)
    movieBoard.innerHTML += card;
  });
};
