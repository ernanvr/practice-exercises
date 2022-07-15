const img = document.querySelector('img');
const button = document.querySelector('button');
const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL).then((response) => response.json()).then(data => {
  img.src = data[0].url;
})

button.onclick = async () => {
  const response = await fetch( URL );
  const data = await response.json();
  img.src = data[0].url;
}

