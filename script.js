const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.dir(searchForm.elements.query.value);
  const searchValue = searchForm.elements.query.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.sprites.other["official-artwork"].front_default);
    });
});

const displaySprites = (data) => {};
