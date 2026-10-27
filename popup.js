const movieTitleInput = document.getElementById("movieTitle");
const movieYearInput = document.getElementById("movieYear");
const posterUrlInput = document.getElementById("posterUrl");
const changePosterButton = document.getElementById("changePoster");
const status = document.getElementById("status");

function showStatus(message, isError = false) {
    status.textContent = message;
    status.className = isError ? "error" : "success";
}

changePosterButton.addEventListener("click", async () => {
    const movieTitle = movieTitleInput.value.trim();
    const movieYear = movieYearInput.value.trim();
    const posterUrl = posterUrlInput.value.trim();

    if (!movieTitle || !/^\d{4}$/.test(movieYear) || !posterUrl) {
        showStatus("Enter a movie title, a four-digit year, and poster URL.", true);
        return;
    }

    try {
        const url = new URL(posterUrl);
        if (!["http:", "https:"].includes(url.protocol)) {
            throw new Error("Unsupported URL protocol");
        }

        const stored = await chrome.storage.local.get("customPosters");
        const customPosters = stored.customPosters || {};
        customPosters[`${movieTitle} (${movieYear})`] = posterUrl;
        await chrome.storage.local.set({ customPosters });

        showStatus(`Saved poster for ${movieTitle} (${movieYear}).`);
        movieYearInput.value = "";
        posterUrlInput.value = "";
    } catch (error) {
        showStatus("Enter a valid http(s) poster URL.", true);
    }
});