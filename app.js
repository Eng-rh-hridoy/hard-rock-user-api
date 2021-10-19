const search_song = () =>{
    const searchText = document.getElementById("search-text").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
