const appendJoke = (joke) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = joke;
  ul.appendChild(li);
};

const fetchJoke = () => {
  const param = { headers: {Accept: 'aplication.json' } };

  fetch("https://icanhazdadjoke.com/search?term=spider", param)
  .then((response) => {
    response.json().then((data) => {
      const joke = data.results[0].joke
      appendJoke(joke);
    })
  })
}

window.onload = fetchJoke();