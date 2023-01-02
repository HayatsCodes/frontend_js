// Unsplash API
const count = 10;
const apiKey = 't1xmwF0zz36suQJzokWgwBbVh7K4ACX19HGCFtzKL9w';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplah API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();