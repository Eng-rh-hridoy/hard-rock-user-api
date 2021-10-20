const search_song = () =>{
    const searchText = document.getElementById("search-text").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displaySongs(data.data);
    })
    .catch(error => displayError("Something wrong! please try again later..."))
}


const displaySongs = songs =>{
    const searchResult = document.getElementById("single-result");
    searchResult.innerHTML = " ";
    songs.forEach(song =>{
        const songDiv = document.createElement("div");
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src="${song.preview}" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick = "getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>`;
        searchResult.appendChild(songDiv);
    })
}

const getLyric = async (artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const res = await fetch(url);
    const data = await res.json();
    displayLyrics(data.lyrics);
}

const displayLyrics = data =>{
    const showLyrics = document.getElementById("song-lyrics");
    showLyrics.innerText = data;
}

const displayError = error =>{
    const showError = document.getElementById("error-message");
    showError = error;
}