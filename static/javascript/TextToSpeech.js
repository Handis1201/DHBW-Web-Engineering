function textToSpeech() {
    if ('speechSynthesis' in window) {
        var tts = new SpeechSynthesisUtterance();
        speechSynthesis.cancel();
        tts.text = document.getElementById('textToSpeechText').value;
        console.log(tts.text);
        tts.volume = 1;
        tts.rate = 0.8;
        tts.pitch = 1;
        tts.lang = 'de';
        window.speechSynthesis.speak(tts);
    } else {
        alert("Dieser Browser scheint Text to speech nicht zu unterstützen :(");
    }
}