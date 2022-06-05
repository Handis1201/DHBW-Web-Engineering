function onWikipediaButtonClick() {
    let input = document.getElementById("wikipediaSearchText");
    let text = input.value;
    if (text === "" || text.isEmpty)
        return;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/wiki/request?string=' + input.value, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let response = xhr.responseText;
            console.log(response);
            let infoDiv = document.getElementById("wiki_info");
            var data = JSON.parse(response);
            console.log(data.link)
            infoDiv.innerHTML = data.text + "<br><br>" + '<a style="text-decoration: none; color: #2dcba9" href=' + data.link + '>Hier weiterlesen</a>';
            infoDiv.style.visibility = "visible";
        }
    }
    xhr.send();
}