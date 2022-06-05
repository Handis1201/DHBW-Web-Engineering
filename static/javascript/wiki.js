function onWikipediaButtonClick() {
    let input = document.getElementById("wikipediaSearchText");
    let text = input.value;
    if (text === "" || text.isEmpty)
        return;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/wiki/request?string=' + input.value, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
            document
        }
    }
    xhr.send();
}