# Letterboxd Custom Poster Extension 

A Chrome extension that allows you to replace the poster image for a specific movie on [Letterboxd](https://letterboxd.com/) with a custom movie poster of your choice.

## Features

- Automatically replaces the poster on the Letterboxd movie page with your custom poster
- Gets around having to use Letterboxd Patron to get access to custom posters
- Easily specify the Letterboxd movie URL and the image URL for your desired custom poster 

## Installation

1. Download or clone this repository to your local machine
2. Open the Chrome Extensions page (chrome://extensions/)
3. Enable "Developer mode" using the toggle in the top right corner
4. Click the "Load unpacked" button and select the directory containing this extension
5. The extension will now be loaded into Chrome

## Customization

1. Replace the contents of `imageSources` in the `content.js` file with your desired custom posters and their corresponding Letterboxd movie title

## Usage

1. Click the extension icon to open the popup 
2. Enter the full Letterboxd URL for the movie whose poster you want to replace
3. Enter the full URL for the custom poster image you want to use
4. Click "Save"
5. Navigate to the Letterboxd page for that movie and the poster will be replaced with your custom image

## Compatibility

This extension is compatible with Google Chrome browsers. It may work in other Chromium-based browsers like the new Microsoft Edge, but this has not been fully tested.

