let posters = {};

async function loadPosters() {
  try {
    const response = await fetch(chrome.runtime.getURL("posters.json"));
    const bundledPosters = await response.json();
    const stored = await chrome.storage.local.get("customPosters");
    posters = { ...bundledPosters, ...(stored.customPosters || {}) };
    replaceImages();
  } catch (error) {
    console.error("Failed to load posters.json:", error);
  }
}

function replaceImages() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const alt = img.alt?.trim() || "";
    const match = alt.match(/^Poster for (.+) \((\d{4})\)$/);
    const title = match?.[1];
    const year = match?.[2];
    const posterUrl = title && year
      ? posters[`${title} (${year})`] || posters[title]
      : undefined;

    if (posterUrl && img.dataset.customPosterUrl !== posterUrl) {
      img.src = posterUrl;
      img.srcset = posterUrl;
      img.dataset.customPosterUrl = posterUrl;
    }
  });
}

loadPosters();
new MutationObserver(replaceImages).observe(document.documentElement, {
  childList: true,
  subtree: true
});
