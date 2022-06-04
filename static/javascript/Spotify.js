function onButtonClick() {
    fetch('/spotify/request')
        .then(function (response) {
            return response.json();
        }).then(function (text) {
        let table = document.getElementById("spotify_result");
        table.style.visibility = "visible";

        table.innerHTML = '';

        text.items.forEach(item => {
            let row = document.createElement("tr");
            let tdTitleElement = document.createElement("td");
            tdTitleElement.innerHTML = item.name;
            row.appendChild(tdTitleElement);



            let tdDescElement = document.createElement("td");
            tdDescElement.innerHTML = item.description.substring(0, 20) + "...";
            row.appendChild(tdDescElement);

            let tdTeaserElement = document.createElement("td");
            let audio = document.createElement("audio");
            audio.controls = true;
            let source = document.createElement("source");
            source.src = item.audio_preview_url;
            audio.appendChild(source);
            tdTeaserElement.appendChild(audio);
            row.appendChild(tdTeaserElement);
            let br = document.createElement("br");
            row.appendChild(br);
            table.appendChild(row);
        });
    });
}