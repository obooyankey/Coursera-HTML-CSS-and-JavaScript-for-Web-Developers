(function(window) {
    var byeGreeter = new Object();
    var speakWord = "Good Bye";
    byeGreeter.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeGreeter = byeGreeter;
})(window);
