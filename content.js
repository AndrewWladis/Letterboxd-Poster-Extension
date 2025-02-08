let imageSources = {
  'Coraline': 'https://image.tmdb.org/t/p/original/5wwIi8Jdr3nzGCJ9pjaSnRf09k8.jpg',
  'Star Wars': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-iv-a-new-hope.jpg',
  'Solo: A Star Wars Story': 'https://www.coverwhiz.com/uploads/movies/solo-a-star-wars-story.jpg',
  'Star Wars: The Rise of Skywalker': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-ix-the-rise-of-skywalker.jpg',
  'Star Wars: The Force Awakens': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-vii-the-force-awakens.jpg',
  'Star Wars: The Last Jedi': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-viii-the-last-jedi.jpg',
  'Return of the Jedi': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-vi-return-of-the-jedi.jpg',
  'The Empire Strikes Back': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-v-the-empire-strikes-back.jpg',
  'Rogue One: A Star Wars Story': 'https://www.coverwhiz.com/uploads/movies/rogue-one-a-star-wars-story.jpg',
  'Star Wars: Episode II - Attack of the Clones': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-ii-attack-of-the-clones.jpg',
  'Star Wars: Episode I - The Phantom Menace': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-i-the-phantom-menace.jpg',
  'Star Wars: Episode III - Revenge of the Sith': 'https://www.coverwhiz.com/uploads/movies/star-wars-episode-iii-revenge-of-the-sith.jpg',
  'Dune: Part Two': 'https://nightrare.com/cdn/shop/files/mattgriffin-duneparttwo-reg-n.jpg?v=1720703573',
  'Piece By Piece': 'https://preview.redd.it/piece-by-piece-2024-illumination-au-timeline-attf-v0-tiddjcqiqt8e1.png?width=1267&format=png&auto=webp&s=086ec3b8570d43d6111e4717aa97a3a36fad34e9',
  'Deadpool & Wolverine': 'https://m.media-amazon.com/images/I/810zZ6ger0L.jpg',
  'Dune': 'https://cdn.printerval.com/unsafe/960x960/asset.prtvstatic.com/2023/08/30/18-6e2288e910471659e21fc867b2cdaa1b.jpg',
  "Zack Snyder's Justice League": 'https://m.media-amazon.com/images/M/MV5BZjczOGNhNWItYThhOS00Mzg0LWI2MjQtM2EzZmVjOWJiOTNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  'The Suicide Squad': 'https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  '': '',
  '': '',
  '': '',
  '': '',
  '': '',
  '': '',
  '': '',
  '': '',
  '': '',
};

function replaceImages() {
  let images = document.querySelectorAll('img');

  images.forEach(img => {
    let alt = img.alt?.trim(); // Trim spaces and check if alt exists
    console.log(`Checking alt text: ${alt}`);

    if (alt && imageSources.hasOwnProperty(alt)) {
      console.log(`Replacing image for: ${alt}`);
      img.src = imageSources[alt] + "?t=" + new Date().getTime(); // Prevent caching
      img.srcset = imageSources[alt];
    }
  });
}

// Use `load` instead of `DOMContentLoaded`
window.addEventListener('load', replaceImages);

// Also try running it again after 1 second in case of delays
setTimeout(replaceImages, 100);
setTimeout(replaceImages, 250);
setTimeout(replaceImages, 500);
setTimeout(replaceImages, 1000);