const gallery = document.getElementById('gallery');

function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'Dog image';
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.appendChild(img);
      gallery.appendChild(item);
      fetchImages();
    })
    .catch(error => console.error(error));
}

fetchImages();
