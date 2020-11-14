const apiKey = 'R7AKtourLHlFQco2ccOQAmXv16LR9_JDX01SjJ57fA4';
const count = 5;
// const URL_RAND = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${searchTerm}&count=${count}`;
// const URL = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchTerm}&count=${count}`;

function fetchRequest(keyword) {
  return fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${keyword}&count=${count}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

export default fetchRequest;
