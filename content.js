async function loadPosters() {
  try {
    const response = await fetch(chrome.runtime.getURL("posters.json"));
    const posters = await response.json();
    console.log("Loaded posters:", posters);
    replaceImages(posters);
  } catch (error) {
    console.error("Failed to load posters.json:", error);
  }
}

function replaceImages(posters) {
  let images = document.querySelectorAll("img");

  images.forEach((img) => {
    let alt = img.alt?.trim(); // Trim spaces and check if alt exists
    console.log(`Checking alt text: ${alt}`);

    if (alt && posters.hasOwnProperty(alt)) {
      console.log(`Replacing image for: ${alt}`);
      img.src = posters[alt] + "?t=" + new Date().getTime(); // Prevent caching
      img.srcset = posters[alt];
    }
  });
}

window.addEventListener("load", loadPosters);
setTimeout(loadPosters, 50);
setTimeout(loadPosters, 100);
setTimeout(loadPosters, 250);
setTimeout(loadPosters, 500);
setTimeout(loadPosters, 1000);
