function onButtonClick() {
    fetch('/spotify/request')
        .then(function (response) {
            return response.json();
        }).then(function (text) {
        console.log(text);
        console.log(text.items)
        let table = document.getElementById("spotify_result");
        table.style.visibility = "visible";

        text.items.forEach(item => {
            let row = document.createElement("tr");
            let tdTitleElement = document.createElement("td");
            tdTitleElement.innerHTML = item.name;
            row.appendChild(tdTitleElement);

            let tdDescElement = document.createElement("td");
            tdDescElement.innerHTML = item.description.substring(0, 20) + "...";
            row.appendChild(tdDescElement);

            let tdTeaserElement = document.createElement("td");
            tdTeaserElement.innerHTML = item.audio_preview_url;
            row.appendChild(tdTeaserElement);
            table.appendChild(row);
        });
    });
}